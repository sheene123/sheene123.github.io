import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-5 py-6 flex flex-wrap justify-between gap-3 font-mono text-xs text-soft">
        <span>
          <span className="text-accent">©</span> 2026 {profile.name}
        </span>
        <span>{profile.location} · Next.js + Tailwind</span>
      </div>
    </footer>
  );
}
