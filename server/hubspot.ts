const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN ?? "";
const HUBSPOT_BASE_URL = "https://api.hubapi.com";

function splitName(fullName: string): { firstname: string; lastname: string } {
  const parts = fullName.trim().split(/\s+/);
  const firstname = parts[0] ?? "";
  const lastname = parts.slice(1).join(" ");
  return { firstname, lastname };
}

async function hubspotFetch(path: string, init: RequestInit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    return await fetch(`${HUBSPOT_BASE_URL}${path}`, {
      ...init,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        ...init.headers,
      },
    });
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Creates or updates a HubSpot contact, keyed on email. Never throws —
 * failures are logged only, so signup is never blocked by HubSpot being down.
 */
export async function upsertHubspotContact(fullName: string, email: string): Promise<void> {
  if (!HUBSPOT_ACCESS_TOKEN) return;

  const { firstname, lastname } = splitName(fullName);
  const properties = { email, firstname, lastname };

  try {
    const searchRes = await hubspotFetch("/crm/v3/objects/contacts/search", {
      method: "POST",
      body: JSON.stringify({
        filterGroups: [
          { filters: [{ propertyName: "email", operator: "EQ", value: email }] },
        ],
        properties: ["email"],
        limit: 1,
      }),
    });

    if (!searchRes.ok) {
      console.error("HubSpot contact search failed:", searchRes.status, await searchRes.text());
      return;
    }

    const searchData = (await searchRes.json()) as { results?: { id: string }[] };
    const existingId = searchData.results?.[0]?.id;

    const upsertRes = existingId
      ? await hubspotFetch(`/crm/v3/objects/contacts/${existingId}`, {
          method: "PATCH",
          body: JSON.stringify({ properties }),
        })
      : await hubspotFetch("/crm/v3/objects/contacts", {
          method: "POST",
          body: JSON.stringify({ properties }),
        });

    if (!upsertRes.ok) {
      console.error("HubSpot contact upsert failed:", upsertRes.status, await upsertRes.text());
    }
  } catch (error) {
    console.error("HubSpot contact sync error:", error instanceof Error ? error.message : error);
  }
}
