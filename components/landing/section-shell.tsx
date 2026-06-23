import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

type SectionShellProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  divider?: boolean;
};

function SectionShell({
  id,
  children,
  className,
  divider = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 lg:py-24",
        divider && "border-t border-border/30",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export { SectionShell };
