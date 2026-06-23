import { StepCard } from "@/components/landing/step-card";
import { SectionShell } from "@/components/landing/section-shell";
import { Heading, Text } from "@/components/ui/typography";
import { howItWorksSection, howItWorksSteps } from "@/lib/constants/landing";

function HowItWorksSection() {
  return (
    <SectionShell id="how-it-works" divider className="bg-taupe-light/20">
      <div className="mb-14 text-center lg:mb-16">
        <p className="mb-4 font-display text-sm font-medium uppercase tracking-widest text-taupe">
          {howItWorksSection.eyebrow}
        </p>
        <Heading as="h2" className="mb-5 text-4xl leading-[1.1] lg:text-5xl">
          {howItWorksSection.title}
        </Heading>
        <p className="mx-auto max-w-xl font-display text-2xl font-medium text-charcoal lg:text-3xl">
          {howItWorksSection.subtitle}
        </p>
      </div>

      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div
          className="absolute left-[12.5%] right-[12.5%] top-14 hidden h-px bg-border/50 lg:block"
          aria-hidden="true"
        />
        {howItWorksSteps.map((step) => (
          <StepCard
            key={step.step}
            step={step.step}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>

      <Text muted className="mt-12 text-center text-lg lg:mt-14">
        {howItWorksSection.closer}
      </Text>
    </SectionShell>
  );
}

export { HowItWorksSection };
