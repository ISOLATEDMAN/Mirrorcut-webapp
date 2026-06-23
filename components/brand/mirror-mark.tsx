import { cn } from "@/lib/cn";

type MirrorMarkProps = {
  size?: number;
  className?: string;
};

function MirrorMark({ size = 32, className }: MirrorMarkProps) {
  return (
    <svg
      viewBox="0 0 48 64"
      width={size}
      height={size * (64 / 48)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0 text-taupe", className)}
    >
      {/* Outer mirror frame */}
      <rect
        x="4"
        y="2"
        width="40"
        height="60"
        rx="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Inner top arc */}
      <path
        d="M12 14 C12 8 36 8 36 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Reflection lines */}
      <line
        x1="22"
        y1="30"
        x2="28"
        y2="36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="30"
        x2="32"
        y2="36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { MirrorMark };
