"use client";

import { BeforeAfterSlider } from "@/components/landing/before-after-slider";
import { cn } from "@/lib/cn";

type StylePreviewCardProps = {
  name: string;
  tag?: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  featured?: boolean;
  className?: string;
};

function StylePreviewCard({
  name,
  tag,
  description,
  beforeImage,
  afterImage,
  featured = false,
  className,
}: StylePreviewCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border bg-card transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]",
        featured
          ? "border-taupe/40 lg:flex-row lg:items-stretch"
          : "border-border/30",
        className,
      )}
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden",
          featured ? "lg:w-[52%] lg:min-h-[360px]" : "w-full",
        )}
      >
        <BeforeAfterSlider
          beforeSrc={beforeImage}
          afterSrc={afterImage}
          beforeAlt={`${name} before`}
          afterAlt={`${name} after`}
          size="card"
          initialPosition={featured ? 42 : 55}
          className={cn(
            "rounded-none shadow-none",
            featured && "h-full min-h-[280px] lg:absolute lg:inset-0 lg:aspect-auto",
          )}
        />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col justify-center p-6 lg:p-8",
          featured && "lg:py-10 lg:pl-10 lg:pr-12",
        )}
      >
        {tag && (
          <span className="mb-3 inline-flex w-fit rounded-full bg-taupe-light/80 px-3 py-1 text-xs font-medium uppercase tracking-widest text-taupe">
            {tag}
          </span>
        )}
        <h3
          className={cn(
            "font-display font-semibold leading-tight text-charcoal",
            featured ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl",
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "mt-2 leading-relaxed text-muted",
            featured ? "text-base lg:text-lg" : "text-sm lg:text-base",
          )}
        >
          {description}
        </p>
        <p className="mt-4 text-sm font-medium text-taupe opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Drag to compare →
        </p>
      </div>
    </article>
  );
}

export { StylePreviewCard };
