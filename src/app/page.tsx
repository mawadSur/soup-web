import Gallery from "@/components/gallery";
import About from "@/components/about";
import GetInvolved from "@/components/get-involved";
import Hero from "@/components/hero";
import LastestDonations from "@/components/latest-donations";
import TopHero from "@/components/top-hero";

export default function Home() {
  return (
    <>
      <TopHero />
      <GetInvolved />
      <Hero />
      <About />
      <LastestDonations />
      <Gallery />
    </>
  );
}
