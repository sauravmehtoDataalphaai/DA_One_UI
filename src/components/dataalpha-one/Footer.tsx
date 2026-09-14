import {
  BriefcaseBusiness,
  BadgeDollarSign,
  CalendarCheck2,
  CalendarDays,
  ContactRound,
  Database,
  FileDown,
  Globe,
  Linkedin,
  Mail,
  PlayCircle,
  Sparkles,
  UserRound,
  Workflow,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Reveal";
import { openBookingOrLead } from "@/lib/booking";
import { scrollToId } from "@/lib/scroll";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Product", id: "ask", icon: Database },
      { label: "Product Features", id: "features", icon: Sparkles },
      { label: "Pricing", id: "pricing", href: "/pricing", icon: BadgeDollarSign },
      { label: "How it works", id: "how-it-works", icon: Workflow },
      { label: "Demo", id: "demo", icon: PlayCircle },
    ],
  },
  {
    title: "Event",
    links: [
      { label: "Seamless 2026", id: "event", icon: CalendarDays },
      { label: "Book a meeting", id: "lead", icon: CalendarCheck2 },
      { label: "Contact", id: "lead", icon: ContactRound },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-2/50 pb-24 pt-16 md:pb-10">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-muted">DA <em>One</em></p>
            <p className="mt-2 text-sm leading-6 text-ink-2">
              Ask your data. Get the report.
            </p>
            <p className="mt-4 text-sm">
              <a
                className="inline-flex items-center gap-1.5 text-accent hover:underline"
                href={`mailto:${site.email}`}
              >
                <Mail size={14} />
                {site.email}
              </a>
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button
                size="sm"
                onClick={() => {
                  track("event_meeting_click", { source: "footer" });
                  openBookingOrLead("seamless");
                }}
              >
                Meet us at Seamless
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => {
                  track("post_event_demo_click", { source: "footer" });
                  openBookingOrLead("demo");
                }}
              >
                Book a 20-minute Demo
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
                  {group.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.label}>
                        {link.href ? (
                          <a
                            href={link.href}
                            className="inline-flex items-center gap-1.5 text-sm text-ink-2 hover:text-ink"
                          >
                            <Icon size={14} />
                            <span>{link.label}</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 text-sm text-ink-2 hover:text-ink"
                            onClick={() => scrollToId(link.id)}
                          >
                            <Icon size={14} />
                            <span>{link.label}</span>
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
                Connect
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink" href={site.url}>
                    <Globe size={14} /> dataalpha.ai
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink"
                    href={site.linkedin.company}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={14} /> Company
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink"
                    href={site.linkedin.ceo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <UserRound size={14} /> CEO
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink"
                    href={site.linkedin.bd}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BriefcaseBusiness size={14} /> BD 
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink"
                    href={site.pdf.flyer}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileDown size={14} /> Flyer
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink"
                    href={site.pdf.brochure}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileDown size={14} /> Brochure
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <p>© 2026 DataAlpha</p>
          <div className="flex gap-4">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
