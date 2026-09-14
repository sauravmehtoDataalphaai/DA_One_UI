import { Check } from "lucide-react";
import { Footer } from "@/components/dataalpha-one/Footer";
import { Navbar } from "@/components/dataalpha-one/Navbar";
import { Button } from "@/components/ui/Button";
import { Container, Reveal } from "@/components/ui/Reveal";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(price);

const plans = [
  {
    name: "Plus",
    description: "For everyday analysis, research, and creative projects",
    price: 7200,
    originalPrice: undefined,
    period: "/ month",
    href: "https://app.dataalpha.ai/settings/subscription?tier=Plus",
    features: [
      "20,000 credits monthly",
      "Daily refresh credits",
      "1 seat included",
      "Connect your enterprise data",
      "Ask questions in natural language",
      "Generate SQL automatically",
      "Create reports on demand",
      "Reuse reporting workflows",
      "Access leading AI models",
    ],
  },
  {
    name: "Pro",
    description: "For advanced analysis and more ambitious creative work",
    price: 72000,
    originalPrice: 86400,
    period: "/ yearly",
    href: "https://app.dataalpha.ai/settings/subscription?tier=Pro",
    featured: true,
    features: [
      "50,000 credits monthly",
      "Daily refresh credits",
      "1 seat included",
      "Real-time enterprise data access",
      "Connect databases, APIs & data sources",
      "AI-powered SQL generation",
      "Enterprise reports on demand",
      "Choose your preferred LLM",
      "Private & on-prem deployment",
      "Built around your workflows",
      "Priority enterprise support",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-canvas py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[12px] font-semibold tracking-[0.16em] text-accent uppercase">
            Simple pricing
          </p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Choose the plan that fits your work.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-muted">
            Start with the tools you need today and scale when your analysis gets more ambitious.
          </p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-[18px] border p-6 shadow-card sm:p-8 ${
                  plan.featured ? "border-accent bg-navy text-white" : "border-line-strong bg-card text-ink"
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-white uppercase">
                    Recommended
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.name === "Pro" && (
                    <span className="rounded-full bg-accent px-2 py-1 text-[10px] font-semibold tracking-wide text-white uppercase">16% off</span>
                  )}
                </div>
                <p className={`mt-3 min-h-12 text-sm leading-6 ${plan.featured ? "text-white/70" : "text-muted"}`}>
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">{formatPrice(plan.price)}</span>
                  <span className={`text-sm ${plan.featured ? "text-white/65" : "text-muted"}`}>{plan.period}</span>
                  {plan.originalPrice && (
                    <span className={`ml-2 text-sm font-bold line-through ${plan.featured ? "text-white/45" : "text-muted"}`}>
                      {formatPrice(plan.originalPrice)}
                    </span>
                  )}
                </div>
                <Button href={plan.href} target="_blank" rel="noreferrer" variant={plan.featured ? "primary" : "secondary"} className="mt-7 w-full">
                  Get started with {plan.name}
                </Button>
                <div className={`mt-8 border-t pt-6 ${plan.featured ? "border-white/15" : "border-line"}`}>
                  <p className={`mb-4 text-xs ${plan.featured ? "text-white/60" : "text-muted"}`}>Included with {plan.name}:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm leading-5">
                        <Check size={16} className={`mt-0.5 shrink-0 ${plan.featured ? "text-teal-300" : "text-success"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PricingPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main id="main" className="pb-20 pt-28 sm:pt-36">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[12px] font-semibold tracking-[0.16em] text-accent uppercase">
              Simple pricing
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Choose the plan that fits your work.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-muted">
              Start with the tools you need today and scale when your analysis gets more ambitious.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-[18px] border p-6 shadow-card sm:p-8 ${
                    plan.featured
                      ? "border-accent bg-navy text-white"
                      : "border-line-strong bg-card text-ink"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-white uppercase">
                      Recommended
                    </span>
                  )}
                  <div className="flex items-center gap-2">
  <h2 className="text-xl font-semibold">{plan.name}</h2>
  {plan.name === "Pro" && (
    <span className="rounded-full bg-accent px-2 py-1 text-[10px] font-semibold tracking-wide text-white uppercase">
      16% off
    </span>
  )}
</div>
                  <p className={`mt-3 min-h-12 text-sm leading-6 ${plan.featured ? "text-white/70" : "text-muted"}`}>
                    {plan.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-semibold tracking-tight">{formatPrice(plan.price)}</span>
                        <span className={`text-sm ${plan.featured ? "text-white/65" : "text-muted"}`}>
                          {plan.period}
                        </span>
                      </div>
                      {plan.originalPrice && (
                        <>
                          <span
  className={`flex items-center mt-4 text-sm font-bold line-through ${
    plan.featured ? "text-white/45" : "text-muted"
  }`}
>
  {formatPrice(plan.originalPrice)}
</span>
                        </>
                      )}
                    </div>
                  </div>
                  <Button
                    href={plan.href}
                    target="_blank"
                    rel="noreferrer"
                    variant={plan.featured ? "primary" : "secondary"}
                    className="mt-7 w-full"
                  >
                    Get started with {plan.name}
                  </Button>
                  <div className={`mt-8 border-t pt-6 ${plan.featured ? "border-white/15" : "border-line"}`}>
                    <p className={`mb-4 text-xs ${plan.featured ? "text-white/60" : "text-muted"}`}>
                      Included with {plan.name}:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm leading-5">
                          <Check size={16} className={`mt-0.5 shrink-0 ${plan.featured ? "text-teal-300" : "text-success"}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
