import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-canvas py-10">
      <Container className="max-w-3xl">
        <Logo />
        <h1 className="mt-10 text-4xl font-semibold tracking-tight">{title}</h1>
        <div className="mt-6 space-y-4 text-sm leading-7 text-muted">{children}</div>
        <Button className="mt-10" href="#top">
          Back to DA One
        </Button>
      </Container>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage title="Privacy">
      <p>
        This landing page collects the information you submit in the meeting and demo form: name, business email, company, title, country, reporting challenge, and preferred next step.
      </p>
      <p>
        Campaign parameters from the URL (such as utm_source) may be stored with the request so the event team can understand how you arrived.
      </p>
      <p>
        If no server endpoint is configured, submissions remain on the device used to fill the form. Privacy questions: sales@dataalpha.ai.
      </p>
    </LegalPage>
  );
}

export function TermsPage() {
  return (
    <LegalPage title="Terms">
      <p>
        This website describes DA One for the Seamless Middle East 2026 campaign. Product interfaces, figures, and analyses shown here are demonstration examples, not customer results.
      </p>
      <p>
        Submitting the form is a request to meet or receive a demo. It is not a purchase, license, or service agreement.
      </p>
    </LegalPage>
  );
}
