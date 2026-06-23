import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/40 bg-card p-6 shadow-card",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: CardProps) {
  return (
    <div className={cn("mb-3 flex flex-col gap-1", className)} {...props} />
  );
}

function CardTitle({ className, ...props }: CardProps) {
  return (
    <h3
      className={cn("font-display text-xl font-semibold text-charcoal", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: CardProps) {
  return (
    <p className={cn("text-sm leading-relaxed text-muted", className)} {...props} />
  );
}

export { Card, CardHeader, CardTitle, CardDescription };
