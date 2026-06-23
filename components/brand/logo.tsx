import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/constants/site";
import { MirrorMark } from "./mirror-mark";

type LogoProps = {
  size?: "sm" | "nav" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
  href?: string;
};

const markSizes = {
  sm: 20,
  nav: 28,
  md: 28,
  lg: 40,
} as const;

const wordmarkSizes = {
  sm: "text-lg",
  nav: "text-xl",
  md: "text-xl",
  lg: "text-3xl",
} as const;

function Logo({
  size = "md",
  showWordmark = true,
  className,
  href,
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <MirrorMark size={markSizes[size]} />
      {showWordmark && (
        <span
          className={cn(
            "font-display font-semibold tracking-tight text-charcoal",
            wordmarkSizes[size],
          )}
        >
          {siteConfig.name}
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex transition-opacity hover:opacity-80">
        {content}
      </Link>
    );
  }

  return content;
}

export { Logo };
