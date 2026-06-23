import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export { Container };
