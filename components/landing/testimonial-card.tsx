import Image from "next/image";
import { cn } from "@/lib/cn";

type StarRatingProps = {
  rating: number;
  className?: string;
};

function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div
      className={cn("flex gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={cn(
            "size-4",
            index < rating ? "fill-taupe text-taupe" : "fill-taupe-light text-taupe-light",
          )}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

type TestimonialCardProps = {
  quote: string;
  name: string;
  context: string;
  rating: number;
  avatar: string;
};

function TestimonialCard({
  quote,
  name,
  context,
  rating,
  avatar,
}: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border/30 bg-card p-8 transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)] lg:p-10">
      <StarRating rating={rating} className="mb-5" />
      <blockquote className="flex-1 font-display text-lg leading-relaxed text-charcoal lg:text-xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-8 flex items-center gap-4 border-t border-border/20 pt-6">
        <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-border/30">
          <Image
            src={avatar}
            alt=""
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-display text-base font-semibold text-charcoal">
            {name}
          </p>
          <p className="text-sm text-muted">{context}</p>
        </div>
      </div>
    </article>
  );
}

export { TestimonialCard, StarRating };
