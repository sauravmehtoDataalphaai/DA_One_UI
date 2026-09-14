import {
  FileSpreadsheet,
  FileText,
  LayoutDashboard,
  Layers,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { Container, Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: MessageSquare,
    title: "Ask in plain English",
    description:
      "No SQL, no dashboards to learn. Type your question the way you'd ask a colleague and get an answer.",
  },
  {
    icon: FileSpreadsheet,
    title: "Upload Excel & PDF files",
    description:
      "Drop in spreadsheets and documents and DA One reads them directly — no data prep required.",
  },
  {
    icon: ShieldCheck,
    title: "Answers grounded in your data",
    description:
      "Every response is generated from what you upload. DA One won't invent numbers that aren't there.",
  },
  {
    icon: Layers,
    title: "Compare files & spot patterns",
    description:
      "Compare multiple files, surface trends, and find your top-performing categories in seconds.",
  },
  {
    icon: FileText,
    title: "Reports you can share",
    description:
      "Answers come back as clean, structured reports — headings, tables, and summaries ready to copy.",
  },
  {
    icon: LayoutDashboard,
    title: "One workspace for your data",
    description:
      "Chat, dashboards, reports, data connections, and your semantic layer, all in one place.",
  },
];

export function ProductFeatures() {
  return (
    <section id="features" className="bg-canvas py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Product features"
            title="Everything you need to understand your data."
            copy={"DA One turns your files into answers — ask a question, upload what you have, and get a report back."}
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-[18px] border border-line-strong bg-card p-6 shadow-card">
                <div className="flex size-10 items-center justify-center rounded-[10px] bg-accent-soft text-accent">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-[17px] font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-muted">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
