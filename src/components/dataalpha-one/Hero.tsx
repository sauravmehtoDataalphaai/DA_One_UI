import { Container } from "@/components/ui/Reveal";
import { DataFlowBackground } from "@/components/ui/DataFlowBackground";
import { HeroProductDemo } from "./HeroProductDemo";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-canvas pb-12 pt-20 sm:pb-16 sm:pt-24">
      <DataFlowBackground />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[7fr_3fr] md:items-stretch md:gap-5">
          <HeroProductDemo />
          <div className="flex items-center justify-center overflow-visible bg-transparent shadow-none md:self-center">
            <img
              src="/gif/DAOne_Gif.gif"
              alt="DA One live product preview"
              className="w-full object-contain 2xl:scale-125"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
