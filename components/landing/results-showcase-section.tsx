import { StylePreviewCard } from "@/components/landing/style-preview-card";
import { SectionShell } from "@/components/landing/section-shell";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { trendingStyles, trendingStylesSection } from "@/lib/constants/landing";

function ResultsShowcaseSection() {
  const [featured, ...rest] = trendingStyles;

  return (
    <SectionShell id="styles" divider>
      <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 font-display text-sm font-medium uppercase tracking-widest text-taupe">
            {trendingStylesSection.eyebrow}
          </p>
          <Heading as="h2" className="mb-5 text-4xl leading-[1.1] lg:text-5xl">
            {trendingStylesSection.title}
          </Heading>
          <p className="font-display text-2xl font-medium leading-snug text-charcoal lg:text-3xl">
            {trendingStylesSection.subtitle}
          </p>
        </div>
        <Button href={trendingStylesSection.ctaHref} variant="secondary" size="lg" className="shrink-0">
          {trendingStylesSection.cta}
        </Button>
      </div>

      <div className="space-y-5 lg:space-y-6">
        <StylePreviewCard
          name={featured.name}
          tag={featured.tag}
          description={featured.description}
          beforeImage={featured.beforeImage}
          afterImage={featured.afterImage}
          featured
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {rest.map((style) => (
            <StylePreviewCard
              key={style.name}
              name={style.name}
              tag={"tag" in style ? style.tag : undefined}
              description={style.description}
              beforeImage={style.beforeImage}
              afterImage={style.afterImage}
            />
          ))}
        </div>
      </div>

      <Text muted className="mt-12 text-center text-lg lg:mt-14">
        {trendingStylesSection.footnote}
      </Text>
    </SectionShell>
  );
}

export { ResultsShowcaseSection };
