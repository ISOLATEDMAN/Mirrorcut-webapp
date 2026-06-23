import Link from "next/link";
import { BarberCard } from "@/components/landing/barber-card";
import { BeforeAfterSlider } from "@/components/landing/before-after-slider";
import { SectionShell } from "@/components/landing/section-shell";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { heroContent, heroImages } from "@/lib/constants/landing";

function HeroSection() {
  return (
    <SectionShell className="pb-14 pt-6 lg:pb-24 lg:pt-8">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
        <div className="lg:pr-4 xl:pr-8">
          <p className="mb-4 font-display text-lg font-medium italic text-taupe lg:mb-5 lg:text-xl">
            {heroContent.hook}
          </p>

          <Heading as="h1" className="mb-6 leading-[1.06] lg:mb-8">
            {heroContent.headline}{" "}
            <span className="font-display italic text-taupe">
              {heroContent.headlineAccent}
            </span>{" "}
            {heroContent.headlineEnd}
          </Heading>

          <div className="mb-10 max-w-lg space-y-3 lg:mb-12">
            <Text className="text-base leading-relaxed text-charcoal">
              {heroContent.subtextLead}
            </Text>
            <Text muted className="text-sm leading-relaxed">
              {heroContent.subtextSupport}
            </Text>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#" variant="primary" size="lg">
              {heroContent.primaryCta}
            </Button>
            <Link
              href={heroContent.secondaryCtaHref}
              className="text-sm font-medium text-muted transition-colors hover:text-charcoal"
            >
              {heroContent.secondaryCta} →
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:ml-auto lg:max-w-md lg:pt-1">
          <BeforeAfterSlider
            size="hero"
            beforeSrc={heroImages.before}
            afterSrc={heroImages.after}
            beforeAlt={heroImages.beforeAlt}
            afterAlt={heroImages.afterAlt}
          />
          <BarberCard className="absolute bottom-3 left-3 z-10 hidden max-w-[180px] md:block" />
        </div>
      </div>
    </SectionShell>
  );
}

export { HeroSection };
