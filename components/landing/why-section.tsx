import { FeatureCard } from "@/components/landing/feature-card";
import { SectionShell } from "@/components/landing/section-shell";
import { Heading, Text } from "@/components/ui/typography";
import { whyFeatures, whySection } from "@/lib/constants/landing";

function WhySection() {
  return (
    <SectionShell id="features" divider>
      <div className="mb-14 max-w-3xl lg:mb-16">
        <p className="mb-4 font-display text-sm font-medium uppercase tracking-widest text-taupe">
          {whySection.eyebrow}
        </p>
        <Heading as="h2" className="mb-5 text-4xl leading-[1.1] lg:text-5xl">
          {whySection.title}
        </Heading>
        <p className="font-display text-2xl font-medium leading-snug text-charcoal lg:text-3xl">
          {whySection.subtitle}
        </p>
        <Text muted className="mt-6 max-w-2xl text-lg leading-relaxed lg:text-xl">
          {whySection.manifesto}
        </Text>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {whyFeatures.map((feature) => (
          <FeatureCard
            key={feature.number}
            number={feature.number}
            title={feature.title}
            description={feature.description}
            highlight={feature.highlight}
          />
        ))}
      </div>
    </SectionShell>
  );
}

export { WhySection };
