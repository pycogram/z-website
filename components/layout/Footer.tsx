import Link from 'next/link';
import { Github, Twitter, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  documentation: [
    { label: 'Getting Started', href: '/docs/getting-started' },
    { label: 'Architecture', href: '/docs#' },
    { label: 'API Reference', href: '/docs/#' },
    { label: 'Examples', href: '/examples' },
  ],
  crates: [
    { label: 'z-core', href: '/crates/#' },
    { label: 'z-messaging', href: '/crates/#' },
    { label: 'z-cognition', href: '/crates/#' },
    { label: 'z-patterns', href: '/crates/#' },
  ],
  community: [
    { label: 'GitHub', href: 'https://github.com/zeroicai', external: true },
    { label: 'Twitter / X', href: 'https://x.com/tm401z', external: true },
    { label: 'Contributing', href: '/#' },
    { label: 'Code of Conduct', href: '/#' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/assets/favicon.ico" 
                alt="ZeroicAI"         
                width={32} 
                height={32} 
                className="[filter:drop-shadow(0_0_1px_gray)_drop-shadow(0_0_1px_gray)] dark:[filter:none]"  
              />
              <span className="font-bold text-lg">ZeroicAI</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Agent-Oriented Programming for Rust. Build intelligent multi-agent systems with production-ready tools.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/zeroicai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/tm401z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/K3CcB6yUan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Documentation</h3>
            <ul className="space-y-2">
              {footerLinks.documentation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Crates */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Crates</h3>
            <ul className="space-y-2">
              {footerLinks.crates.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZeroicAI. Licensed under MIT / Apache-2.0.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}