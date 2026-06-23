import { cn } from "@/lib/cn";
import { Heading, Text } from "@/components/ui/typography";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className,
      )}
    >
      <Heading as="h2" className={cn("mb-3", align === "center" && "mx-auto")}>
        {title}
      </Heading>
      {subtitle && (
        <Text muted className={cn("text-base", align === "center" && "mx-auto max-w-xl")}>
          {subtitle}
        </Text>
      )}
    </div>
  );
}

export { SectionHeader };
