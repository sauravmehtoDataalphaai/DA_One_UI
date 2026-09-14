import { useState } from "react";
import {
  ArrowUp, BarChart3, ChevronDown, ChevronRight,
  Database, FileText, Layers, MessageSquare, Plus,
} from "lucide-react";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { AuthModal } from "@/components/ui/AuthModal";

const railNav = [
  { id: "chat", label: "Chat", Icon: MessageSquare },
  { id: "dashboards", label: "Dashboards", Icon: BarChart3 },
  { id: "reports", label: "Reports", Icon: FileText },
  { id: "data", label: "Data", Icon: Database },
  { id: "semantic", label: "Semantic Layer", Icon: Layers },
];

const quickChips = [
  { label: "Dashboards", Icon: BarChart3, isNew: false },
  { label: "Reports", Icon: FileText, isNew: true },
  { label: "Data", Icon: Database, isNew: false },
  { label: "Semantic Layer", Icon: Layers, isNew: false },
];

export function HeroProductDemo() {
  const [activeRail, setActiveRail] = useState("chat");
  const [query, setQuery] = useState("");
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="w-full overflow-hidden rounded-[24px] border border-line-strong bg-card shadow-[0_24px_80px_rgb(12_18_32/0.10)]">
      <div className="flex">
        {/* Icon rail – hidden on mobile */}
        <nav className="hidden w-14 shrink-0 flex-col items-center gap-5 border-r border-line py-5 sm:flex">
          {railNav.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              title={label}
              onClick={() => setActiveRail(id)}
              className={cn(
                "flex size-[34px] items-center justify-center rounded-[9px] transition-colors",
                activeRail === id
                  ? "bg-accent-soft text-accent"
                  : "text-muted hover:bg-canvas-2 hover:text-ink",
              )}
            >
              <Icon size={18} aria-hidden="true" />
            </button>
          ))}
          <div className="flex-1" />
          <button
            type="button"
            title="New chat"
            className="flex size-[34px] items-center justify-center rounded-[9px] text-muted transition-colors hover:bg-canvas-2 hover:text-ink"
          >
            <Plus size={17} aria-hidden="true" />
          </button>
        </nav>

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Top bar */}
          <div className="border-b border-line px-4 py-3 sm:px-5">
            <img src="/DAOne_Blue logo.png" alt="DA One" className="h-8 w-auto dark:brightness-0 dark:invert" />
          </div>

          {/* Main */}
          <div className="flex flex-col items-center px-4 py-10 sm:px-8 sm:py-14">
            {/* Pill badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-[12px] font-medium text-accent sm:text-[12.5px]">
              <span className="rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold tracking-[0.05em] text-white">
                New
              </span>
              Live dashboards now in DA One
              <ChevronRight size={12} aria-hidden="true" />
            </div>

            {/* Heading */}
            <h1 className="mb-8 max-w-[500px] text-center text-[28px] font-medium leading-[1.2] tracking-[-0.01em] text-ink sm:text-[36px]">
              What would you like to{" "}
              <em className="italic text-accent">explore</em>{" "}
              today?
            </h1>

            {/* Composer */}
            <div className="w-full max-w-[600px] rounded-[20px] border border-line-strong bg-card px-4 pb-3 pt-4 shadow-[0_18px_40px_rgb(20_30_25/0.06)] sm:px-5">
              <textarea
                rows={1}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && query.trim()) {
                    e.preventDefault();
                    track("ask_demo_submit", { draft: query });
                    setShowAuth(true);
                  }
                }}
                placeholder="Show me revenue growth by region for the last 6 months..."
                className="w-full resize-none border-none bg-transparent text-[14px] text-ink outline-none placeholder:text-muted sm:text-[15px]"
              />
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    title="Attach"
                    className="flex size-8 items-center justify-center rounded-[8px] text-muted transition-colors hover:bg-canvas-2 hover:text-ink"
                  >
                    <Plus size={17} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-[8px] border border-line px-2.5 py-1.5 text-[12px] font-medium text-muted transition-colors hover:border-line-strong hover:text-ink-2"
                  >
                    <BarChart3 size={12} aria-hidden="true" />
                    Reasoning
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden items-center gap-1 text-[12px] font-medium text-ink-2 sm:flex">
                    DataAlpha 1.0
                    <ChevronDown size={12} aria-hidden="true" />
                  </span>
                  <button
                    type="button"
                    aria-label="Send"
                    onClick={() => {
                      track("ask_demo_submit", { draft: query });
                      setShowAuth(true);
                    }}
                    className="flex size-8 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-2"
                  >
                    <ArrowUp size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick chips */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {quickChips.map(({ label, Icon, isNew }) => (
                <button
                  key={label}
                  type="button"
                  className="flex items-center gap-1.5 rounded-full border border-line bg-card px-3.5 py-2 text-[13px] font-medium text-ink-2 transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
                >
                  {isNew && (
                    <span className="rounded-[5px] bg-accent-soft px-1.5 py-0.5 text-[9px] font-bold tracking-[0.03em] text-accent">
                      New
                    </span>
                  )}
                  <Icon size={13} aria-hidden="true" />
                  {label}
                </button>
              ))}
              <button
                type="button"
                className="flex items-center gap-1 rounded-full border border-line bg-card px-3.5 py-2 text-[13px] font-medium text-ink-2 transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
              >
                More
                <ChevronDown size={12} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showAuth && (
        <AuthModal prompt={query} onClose={() => setShowAuth(false)} />
      )}
    </div>
  );
}
