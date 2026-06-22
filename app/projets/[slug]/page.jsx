import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} — Carld Similien` : 'Projet' };
}

export default function ProjetDetail({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <Link href="/projets" className="font-mono text-xs text-soft hover:text-accent">
        ← cd ../projets
      </Link>

      <div className="mt-8 font-mono text-[11px] uppercase tracking-widest text-accent2">
        {p.category} · {p.year}
      </div>
      <h1 className="font-mono font-bold text-3xl sm:text-5xl mt-3 leading-tight">
        {p.title}
      </h1>

      <div className="mt-10 border border-line rounded-xl bg-panel/60 p-6">
        <h2 className="font-mono text-xs text-accent mb-3">
          <span className="text-soft">##</span> contexte
        </h2>
        <p className="text-soft leading-relaxed">{p.context}</p>
      </div>

      <div className="mt-6 border border-line rounded-xl bg-panel/60 p-6">
        <h2 className="font-mono text-xs text-accent mb-4">
          <span className="text-soft">##</span> ce-que-j-ai-fait
        </h2>
        <ul className="space-y-3">
          {p.missions.map((m) => (
            <li key={m} className="flex gap-3 text-sm text-soft">
              <span className="text-accent font-mono shrink-0">→</span>
              {m}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border border-line rounded-xl bg-panel/60 p-6">
        <h2 className="font-mono text-xs text-accent mb-4">
          <span className="text-soft">##</span> stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="font-mono text-xs border border-line rounded px-2.5 py-1 text-accent2"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={`/projets/${next.slug}`}
        className="group block mt-12 border border-line rounded-xl p-6 bg-panel/60 hover:border-accent transition-colors"
      >
        <span className="font-mono text-xs text-soft">projet suivant</span>
        <div className="font-mono font-bold text-xl mt-1 group-hover:text-accent transition-colors">
          {next.title} →
        </div>
      </Link>
    </div>
  );
}
