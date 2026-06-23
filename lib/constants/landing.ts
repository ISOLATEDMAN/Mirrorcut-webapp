// Replace Unsplash URLs with /public/landing/... paths when real generated assets exist.

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Styles", href: "#styles" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Styles", href: "#styles" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#" },
    ],
  },
] as const;

export const heroContent = {
  hook: "Never regret a haircut again.",
  headline: "See your next haircut",
  headlineAccent: "before",
  headlineEnd: "you get it.",
  subtextLead:
    "Upload a selfie, pick a style, and see a realistic preview on your face.",
  subtextSupport:
    "Compare before and after, then get barber-ready instructions in seconds.",
  primaryCta: "Try Your Look Free",
  secondaryCta: "See How It Works",
  secondaryCtaHref: "#how-it-works",
} as const;

export const heroImages = {
  before: unsplash("photo-1507003211169-0a1dd7228f2d"),
  after: unsplash("photo-1506794778202-cad84cf45f1d"),
  beforeAlt: "Before haircut preview",
  afterAlt: "After haircut preview",
} as const;

export const heroBarberCard = {
  style: "Textured Crop",
  topLength: "2–3 inches",
  sides: "Low Fade",
  texture: "Natural",
  styling: "Matte Finish",
} as const;

export const whySection = {
  eyebrow: "The difference",
  title: "Why MirrorCut",
  subtitle: "Built for the chair, not just the screen.",
  manifesto:
    "See it on your face. Walk in knowing exactly what to ask for.",
} as const;

export const whyFeatures = [
  {
    number: "01",
    title: "Realistic Preview",
    description: "Your face. Your hairline. No celebrity guesswork.",
    highlight: false,
  },
  {
    number: "02",
    title: "Barber Card",
    description: "Fade, length, texture — everything your barber needs.",
    highlight: true,
  },
  {
    number: "03",
    title: "Made for You",
    description: "Previews tailored to your face, not a random model.",
    highlight: false,
  },
  {
    number: "04",
    title: "Private by Default",
    description: "Your photos stay yours. Share only what you choose.",
    highlight: false,
  },
] as const;

export const howItWorksSection = {
  eyebrow: "Simple flow",
  title: "How it works",
  subtitle: "Four steps. Under a minute.",
  closer: "That's it — walk into the barber with confidence.",
} as const;

export const howItWorksSteps = [
  {
    step: 1,
    title: "Upload",
    description: "Snap a clear front-facing selfie.",
  },
  {
    step: 2,
    title: "Pick a Style",
    description: "Browse trending cuts or go custom.",
  },
  {
    step: 3,
    title: "Preview",
    description: "See the look on your face instantly.",
  },
  {
    step: 4,
    title: "Barber Card",
    description: "Get instructions ready to share.",
  },
] as const;

export const trendingStylesSection = {
  eyebrow: "Style gallery",
  title: "Trending Styles",
  subtitle: "See the cut on your face before you sit in the chair.",
  cta: "Try Any Style Free",
  ctaHref: "#",
  footnote: "Every style includes a barber-ready card when you're ready to go.",
} as const;

export const trendingStyles = [
  {
    name: "Textured Crop",
    tag: "Most popular",
    description: "Clean fade with volume on top — works on almost every face.",
    beforeImage: unsplash("photo-1507003211169-0a1dd7228f2d", 600),
    afterImage: unsplash("photo-1560250097-0b93528c311a", 600),
  },
  {
    name: "Low Taper Fade",
    tag: "Barber favorite",
    description: "Gradual taper that stays sharp for weeks.",
    beforeImage: unsplash("photo-1500648767791-00dcc994a43e", 500),
    afterImage: unsplash("photo-1472099645785-5658abf4ff4e", 500),
  },
  {
    name: "Modern Mullet",
    tag: "Trending",
    description: "Short front, longer back — bold without going overboard.",
    beforeImage: unsplash("photo-1519085360753-af0119f7cbe7", 500),
    afterImage: unsplash("photo-1463453091185-91306f9c1784", 500),
  },
  {
    name: "Buzz Cut",
    description: "Zero maintenance. Maximum clean.",
    beforeImage: unsplash("photo-1539571696357-5a69c17a67c6", 500),
    afterImage: unsplash("photo-1557862948-648055602f69", 500),
  },
  {
    name: "Wolf Cut",
    tag: "New",
    description: "Layered texture with a relaxed, lived-in shape.",
    beforeImage: unsplash("photo-1544005313-94ddf0286df2", 500),
    afterImage: unsplash("photo-1438761681033-6461ffad8d80", 500),
  },
  {
    name: "Curtain Hair",
    description: "Middle part with soft flow — effortless and classic.",
    beforeImage: unsplash("photo-1531427186611-ecfd6d936c79", 500),
    afterImage: unsplash("photo-1527980792235-41a9a574764b", 500),
  },
] as const;

export const socialProofStats = [
  { value: "50,000+", label: "Looks Generated" },
  { value: "4.8/5", label: "User Rating" },
  { value: "1,000+", label: "Barber Cards Shared" },
] as const;

export const pricingTeaser = {
  title: "Simple credit packs",
  description: "Start with one free look. Then choose packs from ₹99.",
  packs: ["5 Looks → ₹99", "15 Looks → ₹249", "40 Looks → ₹599"],
} as const;

export const testimonialsSection = {
  eyebrow: "Real stories",
  title: "People who stopped guessing",
  subtitle: "Rated 4.8/5 — because barbers love clear instructions.",
  cta: "Try Your Look Free",
  ctaHref: "#",
  footnote: "No credit card required · 1 free look",
} as const;

export const testimonials = [
  {
    quote:
      "Showed my barber the card and he nailed the fade first try. No more awkward 'a little shorter' back and forth.",
    name: "Arjun M.",
    context: "Textured Crop · Mumbai",
    rating: 5,
    avatar: unsplash("photo-1507003211169-0a1dd7228f2d", 200),
  },
  {
    quote:
      "I used to dread haircuts. Now I walk in knowing exactly what I want — and it actually looks like the preview.",
    name: "Rohan K.",
    context: "Low Taper Fade · Bangalore",
    rating: 5,
    avatar: unsplash("photo-1500648767791-00dcc994a43e", 200),
  },
  {
    quote:
      "Tried three styles in five minutes. Picked one, shared the barber card, done. Wish this existed years ago.",
    name: "Vikram S.",
    context: "Modern Mullet · Delhi",
    rating: 5,
    avatar: unsplash("photo-1472099645785-5658abf4ff4e", 200),
  },
] as const;
