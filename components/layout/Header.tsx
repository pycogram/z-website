"use client"

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Products', href: '/products' },
  { label: 'Docs', href: '/docs' },
  { label: 'Crates', href: '/crates' },
  { label: 'Examples', href: '/examples' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: '◎ Solana', href: '/solana', highlight: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[var(--cyan)]/20 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
      style={isScrolled ? { background: 'rgba(5, 6, 18, 0.85)' } : {}}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/assets/ag-logo.png"
              alt="ZeroicAI"
              width={28}
              height={28}
              className="transition-opacity opacity-80 group-hover:opacity-100"
              style={{ filter: 'invert(1) brightness(0.92)' }}
            />
            <span className="font-display text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-[var(--cyan)] transition-colors">
              ZeroicAI
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.highlight
                    ? `nav-link px-3 py-2 text-[var(--cyan)] font-semibold ${isActive(item.href) ? 'active' : ''}`
                    : `nav-link px-3 py-2 ${isActive(item.href) ? 'active' : ''}`
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/zeroicai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground hover:text-[var(--cyan)] transition-colors"
              style={{ letterSpacing: '0.12em' }}
            >
              GitHub ↗
            </a>

            <Link href="/chat">
              <span className="hidden md:inline-flex btn-cyber" style={{ padding: '0.5rem 1rem', fontSize: '0.6rem' }}>
                Chat
                <ExternalLink className="h-3 w-3" />
              </span>
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-[var(--cyan)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--cyan)]/20"
            style={{ background: 'rgba(5, 6, 18, 0.95)' }}
          >
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 font-display text-[0.65rem] uppercase tracking-widest transition-colors ${
                    isActive(item.href) || item.highlight
                      ? 'text-[var(--cyan)]'
                      : 'text-muted-foreground hover:text-[var(--cyan)]'
                  }`}
                >
                  {isActive(item.href) ? '▸ ' : ''}{item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[var(--cyan)]/10">
                <a
                  href="https://github.com/zeroicai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground hover:text-[var(--cyan)] transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
