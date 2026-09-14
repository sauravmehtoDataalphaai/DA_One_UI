import {
  ArrowRight,
  BarChart3,
  Boxes,
  Brain,
  Building2,
  Check,
  Cloud,
  Database,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Globe2,
  LayoutDashboard,
  Lock,
  Plug,
  Server,
  ShieldCheck,
  Warehouse,
} from "lucide-react";
import { Navbar } from "@/components/dataalpha-one/Navbar";
import { Footer } from "@/components/dataalpha-one/Footer";
import { PricingSection } from "@/components/dataalpha-one/PricingPage";
import { Button } from "@/components/ui/Button";
import { Container, Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DataFlowBackground } from "@/components/ui/DataFlowBackground";
import { openBookingOrLead } from "@/lib/booking";
import { track } from "@/lib/analytics";

const dataSources = [
  { label: "Databases", icon: Database },
  { label: "ERP and CRM platforms", icon: Building2 },
  { label: "Cloud applications", icon: Cloud },
  { label: "Internal systems", icon: Server },
  { label: "Spreadsheets", icon: FileSpreadsheet },
  { label: "Documents", icon: FileText },
  { label: "APIs", icon: Plug },
  { label: "Data warehouses", icon: Warehouse },
  { label: "Other enterprise repositories", icon: Boxes },
];

const transformOutputs = [
  { title: "Analytics", icon: BarChart3 },
  { title: "Dashboards", icon: LayoutDashboard },
  { title: "Management reporting", icon: FileCheck2 },
  { title: "AI-driven decision support", icon: Brain },
];

const configureAround = [
  "Business processes",
  "Data models",
  "Reporting structures",
  "KPIs",
  "Decision-making requirements",
];

const reportingSupport = [
  "Predefined reports",
  "Customized reporting requirements",
  "Reusable reporting formats",
];

const residencyPoints = [
  { title: "Data residency", icon: Globe2 },
  { title: "Security", icon: Lock },
  { title: "Governance", icon: ShieldCheck },
];

const valueProps = [
  "Data becomes structured",
  "Analytics becomes accessible",
  "Reporting becomes faster",
  "Reporting becomes more consistent",
  "Reporting becomes more actionable",
];

export function ProductPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section
          id="top"
          className="relative overflow-hidden bg-canvas pb-12 pt-20 sm:pb-16 sm:pt-24"
        >
          <DataFlowBackground />
          <Container className="relative">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                One Enterprise Platform for{" "}
                <em className="not-italic text-accent">Data, Analytics</em>{" "}
                &amp; Reporting
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-muted sm:text-[17px] sm:leading-8">
                DA One is an enterprise-grade Data, Analytics and Reporting platform
                designed to help organizations turn fragmented, complex and
                underutilized data into structured, trusted and decision-ready
                intelligence.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-muted">
                Built for enterprises that operate across multiple systems,
                applications and data environments, DA One provides a unified layer
                through which business users can access, transform, analyze and
                report on information — without being constrained by where the data
                originates or how it is stored.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  onClick={() => {
                    track("hero_cta_click", { source: "product_page" });
                    openBookingOrLead("demo");
                  }}
                >
                  Book a 20-minute Demo
                  <ArrowRight size={16} />
                </Button>
                <Button href="/pricing" variant="secondary">
                  View Pricing
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Data Sources */}
        <section id="data-sources" className="bg-canvas py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeading
                align="center"
                eyebrow="Connectivity"
                title="Connect data from virtually any source."
                copy="Enterprise information can exist across databases, applications and systems that don't naturally talk to each other. DA One is designed to connect these disparate environments and bring information together within a consistent enterprise data framework."
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {dataSources.map(({ label, icon: Icon }, index) => (
                <Reveal key={label} delay={index * 0.04} className="h-full">
                  <div className="flex h-full flex-col items-center gap-3 rounded-[16px] border border-line-strong bg-card p-4 text-center shadow-card">
                    <div className="flex size-10 items-center justify-center rounded-[10px] bg-accent-soft text-accent">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <p className="text-[13px] font-medium leading-5 text-ink">{label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mx-auto mt-10 max-w-2xl text-center text-[14px] leading-7 text-muted">
                This addresses one of the biggest challenges faced by modern
                organizations: data existing in multiple silos, formats and
                systems, making reporting and analysis slow, manual and dependent
                on specialist teams.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Data Transformation */}
        <section id="data-transformation" className="bg-canvas-2/50 py-20 sm:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <Reveal>
                <p className="mb-4 text-[12px] font-semibold tracking-[0.16em] text-accent uppercase">
                  Data transformation
                </p>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Turn data into structured, usable information.
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  DA One goes beyond simply accessing information. It can ingest
                  and transform structured, semi-structured and unstructured data
                  into structured, usable information.
                </p>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Whether the underlying information comes from traditional
                  databases, spreadsheets, system-generated files, documents or
                  other enterprise sources, DA One helps standardize, organize and
                  prepare that data so that it can be analyzed consistently and
                  used for enterprise reporting.
                </p>
              </Reveal>
              <div className="grid grid-cols-2 gap-4">
                {transformOutputs.map(({ title, icon: Icon }, index) => (
                  <Reveal key={title} delay={index * 0.06} className="h-full">
                    <div className="flex h-full flex-col gap-3 rounded-[16px] border border-line-strong bg-card p-5 shadow-card">
                      <div className="flex size-9 items-center justify-center rounded-[10px] bg-accent-soft text-accent">
                        <Icon size={17} aria-hidden="true" />
                      </div>
                      <p className="text-[14px] font-semibold leading-5 text-ink">{title}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* One-Stop Platform */}
        <section id="platform" className="bg-canvas py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeading
                align="center"
                eyebrow="Enterprise configuration"
                title="A one-stop Data, Analytics & Reporting platform."
                copy="The result is a one-stop solution for an enterprise's Data, Analytics and Reporting requirements. Organizations can configure DA One around their own business — rather than adapting their operations to a rigid, standardized product."
              />
            </Reveal>
            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
              <Reveal className="h-full">
                <div className="h-full rounded-[18px] border border-line-strong bg-card p-6 shadow-card sm:p-8">
                  <h3 className="text-lg font-semibold text-ink">
                    Configured around your business
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {configureAround.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-5 text-ink-2">
                        <Check size={16} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.08} className="h-full">
                <div className="h-full rounded-[18px] border border-line-strong bg-card p-6 shadow-card sm:p-8">
                  <h3 className="text-lg font-semibold text-ink">
                    Flexible reporting formats
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {reportingSupport.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-5 text-ink-2">
                        <Check size={16} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Security & On-Premises */}
        <section id="security" className="bg-navy py-20 text-white sm:py-28">
          <Container>
            <Reveal className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-[12px] bg-white/10">
                <ShieldCheck size={22} aria-hidden="true" />
              </div>
              <p className="mt-5 text-[12px] font-semibold tracking-[0.16em] text-teal-300/80 uppercase">
                Security
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Enterprise security & on-premises deployment.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-white/70">
                Security is fundamental to the DA One architecture. DA One is
                designed as a secure, enterprise-grade solution that can operate
                within an organization's own on-premises environment — so
                enterprises can maintain control over their data infrastructure
                while benefiting from advanced data processing, analytics and
                reporting capabilities.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Data Residency & Governance */}
        <section id="residency" className="bg-canvas py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeading
                align="center"
                eyebrow="Data residency & governance"
                title="Your data stays in your environment."
                copy="Critically, enterprise data does not need to leave the customer's own environment or country. This enables organizations to maintain stronger control while deploying modern analytics and AI-enabled reporting capabilities."
              />
            </Reveal>
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {residencyPoints.map(({ title, icon: Icon }, index) => (
                <Reveal key={title} delay={index * 0.06} className="h-full">
                  <div className="flex h-full flex-col items-center gap-3 rounded-[16px] border border-line-strong bg-card p-6 text-center shadow-card">
                    <div className="flex size-10 items-center justify-center rounded-[10px] bg-accent-soft text-accent">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <p className="text-[14px] font-semibold text-ink">{title}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Final Value Proposition */}
        <section id="value" className="bg-canvas-2/50 py-20 sm:py-28">
          <Container>
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-[12px] font-semibold tracking-[0.16em] text-accent uppercase">
                Why DA One
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                From fragmented data to a unified intelligence environment.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-muted">
                With DA One, enterprises can move from fragmented data and manual
                reporting toward a secure, configurable and unified intelligence
                environment.
              </p>
            </Reveal>
            <Reveal>
              <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2.5">
                {valueProps.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-card px-3.5 py-2 text-[13px] font-medium text-ink-2 shadow-card"
                  >
                    <Check size={14} className="text-success" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Button
                  onClick={() => {
                    track("hero_cta_click", { source: "product_page_value" });
                    openBookingOrLead("demo");
                  }}
                >
                  Book a 20-minute Demo
                  <ArrowRight size={16} />
                </Button>
                <Button href="/signup" variant="secondary">
                  Get started
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>

        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
