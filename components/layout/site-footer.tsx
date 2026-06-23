import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { footerColumns } from "@/lib/constants/landing";
import { siteConfig } from "@/lib/constants/site";

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/30 bg-cream py-12">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="sm" />
            <p className="mt-3 max-w-xs text-sm text-muted">
              {siteConfig.description}
            </p>
          </div>

          {footerColumns.map((column) => (
            <div
              key={column.title}
              id={column.title === "Support" ? "faq" : undefined}
            >
              <h3 className="mb-3 font-body text-sm font-semibold text-charcoal">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-muted transition-colors hover:text-charcoal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-border/30 pt-6 text-xs text-muted">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export { SiteFooter };
