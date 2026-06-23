import { cn } from "@/lib/cn";

type IconProps = {
  className?: string;
};

function SparklesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-5", className)} aria-hidden="true">
      <path d="M12 3l1.2 4.2L17.5 8.5l-4.3 1.3L12 14l-1.2-4.2L6.5 8.5l4.3-1.3L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M19 14l.8 2.8L22.5 18l-2.7.8L19 21.5l-.8-2.7L15.5 18l2.7-.8L19 14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function ScissorsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-5", className)} aria-hidden="true">
      <circle cx="6" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 8.5L20 20M8.5 15.5L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-5", className)} aria-hidden="true">
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function CardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-5", className)} aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function FaceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-5", className)} aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
      <path d="M9 15c.9 1 1.9 1.5 3 1.5s2.1-.5 3-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function UploadIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-5", className)} aria-hidden="true">
      <path d="M12 16V6M8 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const iconMap = {
  sparkles: SparklesIcon,
  scissors: ScissorsIcon,
  shield: ShieldIcon,
  card: CardIcon,
  face: FaceIcon,
  upload: UploadIcon,
} as const;

type LandingIconName = keyof typeof iconMap;

function LandingIcon({
  name,
  className,
}: {
  name: LandingIconName;
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}

export { LandingIcon, type LandingIconName };
