import { Categories } from "@/components/home/categories";
import { Hero } from "@/components/home/hero";
import { Highlights } from "@/components/home/highlights";
import { Stats } from "@/components/home/stats";
import { FeaturedProducts, HowItWorks, Reviews, TrustBenefits, WhatsAppCta } from "@/components/home/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedProducts />
      <Categories />
      <HowItWorks />
      <TrustBenefits />
      <Stats />
      <Reviews />
      <WhatsAppCta />
    </>
  );
}
