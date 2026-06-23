import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-body font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-taupe text-white hover:brightness-95 active:brightness-90",
        secondary:
          "border border-border bg-card text-charcoal hover:bg-taupe-light active:brightness-95",
        ghost: "text-charcoal hover:bg-taupe-light hover:text-charcoal",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-11 px-6 text-sm rounded-full",
        lg: "h-12 px-8 text-base rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
  };

function Button({
  className,
  variant,
  size,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}

export { Button, buttonVariants };
