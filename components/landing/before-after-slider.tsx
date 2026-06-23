"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
  initialPosition?: number;
  size?: "hero" | "default" | "card";
};

const sizeStyles = {
  hero: "aspect-[3/4]",
  default: "aspect-[4/5] sm:min-h-[520px] sm:aspect-auto",
  card: "aspect-[4/5]",
} as const;

const imageSizes = {
  hero: "(max-width: 768px) 90vw, 400px",
  default: "(max-width: 768px) 100vw, 60vw",
  card: "(max-width: 768px) 50vw, 280px",
} as const;

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
  initialPosition = 50,
  size = "default",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      isDragging.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      updatePosition(event.clientX);
    },
    [updatePosition],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (!isDragging.current) return;
      updatePosition(event.clientX);
    },
    [updatePosition],
  );

  const handlePointerUp = useCallback((event: React.PointerEvent) => {
    isDragging.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((prev) => Math.max(0, prev - 2));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((prev) => Math.min(100, prev + 2));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-taupe-light select-none",
        sizeStyles[size],
        className,
      )}
      style={{ boxShadow: "var(--shadow-elevated)" }}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        priority
        sizes={imageSizes[size]}
        className="object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          priority
          sizes={imageSizes[size]}
          className="object-cover"
          draggable={false}
        />
      </div>

      <div
        className="absolute inset-y-0 z-20 w-px -translate-x-1/2 bg-white/70"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      />

      <button
        type="button"
        role="slider"
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        className={cn(
          "absolute top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-white/80 bg-taupe/90 shadow-sm backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe focus-visible:ring-offset-2",
          size === "card" ? "size-7" : "size-8",
        )}
        style={{ left: `${position}%` }}
        onPointerDown={handlePointerDown}
        onKeyDown={handleKeyDown}
      >
        <span className="flex gap-0.5" aria-hidden="true">
          <span className="h-2.5 w-px rounded-full bg-white" />
          <span className="h-2.5 w-px rounded-full bg-white" />
        </span>
      </button>

      <span className="absolute top-3 left-3 z-10 rounded-md bg-charcoal/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/95 backdrop-blur-sm">
        Before
      </span>
      <span className="absolute top-3 right-3 z-10 rounded-md bg-charcoal/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/95 backdrop-blur-sm">
        After
      </span>
    </div>
  );
}

export { BeforeAfterSlider };
