import { Categories } from "@/components/home/categories";
import { HeroScroll } from "@/components/home/hero-scroll";
import { Highlights } from "@/components/home/highlights";
import { Stats } from "@/components/home/stats";
import { FeaturedProducts } from "@/components/home/featured-products";
import { HowItWorks } from "@/components/home/how-it-works";
import { Reviews } from "@/components/home/reviews";
import { TrustBenefits } from "@/components/home/trust-benefits";
import { WhatsAppCta } from "@/components/home/whatsapp-cta";

export default function HomePage() {
  return (
    <>
      <HeroScroll />
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
