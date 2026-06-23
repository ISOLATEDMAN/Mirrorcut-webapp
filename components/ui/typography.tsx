import { cn } from "@/lib/cn";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
};

function Heading({ as: Tag = "h2", className, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold tracking-tight text-charcoal",
        Tag === "h1" && "text-4xl sm:text-5xl lg:text-6xl",
        Tag === "h2" && "text-3xl sm:text-4xl",
        Tag === "h3" && "text-2xl sm:text-3xl",
        Tag === "h4" && "text-xl sm:text-2xl",
        className,
      )}
      {...props}
    />
  );
}

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  muted?: boolean;
};

function Text({ className, muted, ...props }: TextProps) {
  return (
    <p
      className={cn(
        "font-body text-base leading-relaxed",
        muted ? "text-muted" : "text-charcoal",
        className,
      )}
      {...props}
    />
  );
}

type LabelProps = React.HTMLAttributes<HTMLSpanElement>;

function Label({ className, ...props }: LabelProps) {
  return (
    <span
      className={cn(
        "font-body text-xs font-medium uppercase tracking-wide text-muted",
        className,
      )}
      {...props}
    />
  );
}

export { Heading, Text, Label };
