import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ResultsShowcaseSection } from "@/components/landing/results-showcase-section";
import { SocialProofSection } from "@/components/landing/social-proof-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { WhySection } from "@/components/landing/why-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WhySection />
        <HowItWorksSection />
        <ResultsShowcaseSection />
        <SocialProofSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  );
}
