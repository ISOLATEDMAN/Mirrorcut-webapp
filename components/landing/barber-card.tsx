import { cn } from "@/lib/cn";
import { heroBarberCard } from "@/lib/constants/landing";

type BarberCardProps = {
  className?: string;
  data?: typeof heroBarberCard;
};

function BarberCard({ className, data = heroBarberCard }: BarberCardProps) {
  const rows = [
    { label: "Top Length", value: data.topLength },
    { label: "Sides", value: data.sides },
    { label: "Texture", value: data.texture },
    { label: "Styling", value: data.styling },
  ];

  return (
    <div
      className={cn(
        "rounded-xl border border-border/30 bg-card/95 p-3 shadow-card backdrop-blur-sm",
        className,
      )}
    >
      <p className="mb-2.5 font-display text-base font-semibold text-charcoal">
        {data.style}
      </p>
      <dl className="space-y-1">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between gap-3 text-xs">
            <dt className="text-muted">{row.label}</dt>
            <dd className="font-medium text-charcoal">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export { BarberCard };
