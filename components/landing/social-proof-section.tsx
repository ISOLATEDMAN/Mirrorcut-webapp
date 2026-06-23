import { socialProofStats } from "@/lib/constants/landing";

function SocialProofSection() {
  return (
    <section className="border-y border-border/30 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-center sm:gap-0 lg:px-8">
        {socialProofStats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-1 flex-col items-center px-6 text-center sm:border-l sm:border-border/30 sm:first:border-l-0"
          >
            <p className="font-display text-2xl font-semibold text-charcoal">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { SocialProofSection };
