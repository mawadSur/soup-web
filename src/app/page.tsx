import About from "@/components/about";
import GetInvolved from "@/components/get-involved";
import HelpSection from "@/components/help-section";
import Hero from "@/components/hero";
import TopHero from "@/components/top-hero";

export default function Home() {
  return (
    <>
      <TopHero />
      <GetInvolved />
      <Hero />
      <About />
      <HelpSection />
    </>
  );
}
