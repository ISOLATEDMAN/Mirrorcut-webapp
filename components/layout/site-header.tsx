import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/lib/constants/landing";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-cream/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo size="nav" href="/" />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted/80 transition-colors hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden font-body text-sm text-muted/80 transition-colors hover:text-charcoal sm:inline"
          >
            Sign In
          </Link>
          <Button href="#" variant="primary" size="sm">
            Try Free
          </Button>
        </div>
      </Container>
    </header>
  );
}

export { SiteHeader };
