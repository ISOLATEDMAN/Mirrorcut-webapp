import { cn } from "@/lib/cn";
import { Text } from "@/components/ui/typography";

type FeatureCardProps = {
  number: string;
  title: string;
  description: string;
  highlight?: boolean;
};

function FeatureCard({
  number,
  title,
  description,
  highlight = false,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border p-8 lg:p-10",
        highlight
          ? "border-taupe/40 bg-taupe-light/40"
          : "border-border/30 bg-card",
      )}
    >
      <span
        className="pointer-events-none absolute -right-2 -top-4 font-display text-8xl font-semibold leading-none text-taupe/15 select-none"
        aria-hidden="true"
      >
        {number}
      </span>
      <div className="relative">
        <span className="mb-4 inline-block font-display text-sm font-medium tracking-widest text-taupe">
          {number}
        </span>
        <h3 className="mb-3 font-display text-2xl font-semibold leading-tight text-charcoal lg:text-3xl">
          {title}
        </h3>
        <Text muted className="text-base leading-relaxed lg:text-lg">
          {description}
        </Text>
      </div>
    </div>
  );
}

export { FeatureCard };
