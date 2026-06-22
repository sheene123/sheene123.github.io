'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: '~/accueil' },
  { href: '/experience', label: '~/experiences' },
  { href: '/projets', label: '~/projets' },
  { href: '/cv', label: '~/cv' },
  { href: '/contact', label: '~/contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="font-mono text-sm font-bold tracking-tight">
          <span className="text-accent">carld</span>
          <span className="text-soft">@</span>
          <span>similien</span>
          <span className="text-accent2">:~$</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-mono text-xs px-3 py-2 rounded-md transition-colors ${
                isActive(l.href)
                  ? 'text-accent bg-panel border border-line'
                  : 'text-soft hover:text-ink'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="w-9 h-9 grid place-items-center rounded-lg border border-line"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line px-5 py-3 flex flex-col bg-bg">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-mono text-sm py-2.5 ${
                isActive(l.href) ? 'text-accent' : 'text-soft'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
