import { Hero } from "../components/sections/Hero";
import { Showcase } from "../components/sections/Showcase";
import { HealthFeatures } from "../components/sections/HealthFeatures";
import { ProductExperience } from "../components/sections/ProductExperience";
import { Specs } from "../components/sections/Specs";
import { Testimonials } from "../components/sections/Testimonials";
import { Pricing } from "../components/sections/Pricing";
import { Contact } from "../components/sections/Contact";

export function Home({ onOpenCheckout }: { onOpenCheckout: () => void }) {
  return (
    <>
      <Hero onOpenCheckout={onOpenCheckout} />
      <Showcase />
      <HealthFeatures />
      <ProductExperience />
      <Specs />
      <Testimonials />
      <Pricing onOpenCheckout={onOpenCheckout} />
      <Contact />
    </>
  );
}
