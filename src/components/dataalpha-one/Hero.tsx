import { Container } from "@/components/ui/Reveal";
import { DataFlowBackground } from "@/components/ui/DataFlowBackground";
import { HeroProductDemo } from "./HeroProductDemo";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-canvas pb-12 pt-20 sm:pb-16 sm:pt-24">
      <DataFlowBackground />
      <Container className="relative">
        <HeroProductDemo />
      </Container>
    </section>
  );
}
