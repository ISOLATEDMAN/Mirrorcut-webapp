import { cn } from "@/lib/cn";
import { Text } from "@/components/ui/typography";

type StepCardProps = {
  step: number;
  title: string;
  description: string;
  className?: string;
};

function StepCard({ step, title, description, className }: StepCardProps) {
  const stepLabel = String(step).padStart(2, "0");

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border border-border/30 bg-card p-8 lg:p-10",
        className,
      )}
    >
      <span className="font-display text-5xl font-semibold leading-none text-taupe lg:text-6xl">
        {stepLabel}
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-charcoal lg:text-2xl">
        {title}
      </h3>
      <Text muted className="mt-3 text-base leading-relaxed lg:text-lg">
        {description}
      </Text>
    </div>
  );
}

export { StepCard };
