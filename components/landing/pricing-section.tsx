import { SectionHeader } from "@/components/landing/section-header";
import { SectionShell } from "@/components/landing/section-shell";
import { pricingTeaser } from "@/lib/constants/landing";

function PricingSection() {
  return (
    <SectionShell id="pricing" divider>
      <SectionHeader
        title={pricingTeaser.title}
        subtitle={pricingTeaser.description}
      />
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        {pricingTeaser.packs.map((pack) => (
          <span
            key={pack}
            className="rounded-full border border-border/40 px-5 py-2 text-sm text-charcoal"
          >
            {pack}
          </span>
        ))}
      </div>
    </SectionShell>
  );
}

export { PricingSection };
