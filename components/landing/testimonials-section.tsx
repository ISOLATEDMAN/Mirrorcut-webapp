import { TestimonialCard } from "@/components/landing/testimonial-card";
import { SectionShell } from "@/components/landing/section-shell";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { testimonials, testimonialsSection } from "@/lib/constants/landing";

function TestimonialsSection() {
  return (
    <SectionShell divider className="bg-gradient-to-b from-cream via-taupe-light/20 to-taupe-light/40">
      <div className="mb-14 text-center lg:mb-16">
        <p className="mb-4 font-display text-sm font-medium uppercase tracking-widest text-taupe">
          {testimonialsSection.eyebrow}
        </p>
        <Heading as="h2" className="mb-5 text-4xl leading-[1.1] lg:text-5xl">
          {testimonialsSection.title}
        </Heading>
        <p className="mx-auto max-w-2xl font-display text-2xl font-medium text-charcoal lg:text-3xl">
          {testimonialsSection.subtitle}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            quote={testimonial.quote}
            name={testimonial.name}
            context={testimonial.context}
            rating={testimonial.rating}
            avatar={testimonial.avatar}
          />
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center text-center lg:mt-16">
        <Button href={testimonialsSection.ctaHref} variant="primary" size="lg">
          {testimonialsSection.cta}
        </Button>
        <Text muted className="mt-4 text-sm">
          {testimonialsSection.footnote}
        </Text>
      </div>
    </SectionShell>
  );
}

export { TestimonialsSection };
