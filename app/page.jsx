import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { profile, skills, projects } from '@/lib/data';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="relative">
      <div className="grid-bg absolute inset-x-0 top-0 h-[480px] -z-10" />

      <div className="max-w-5xl mx-auto px-5">
        {/* ── Hero ── */}
        <header className="py-20 sm:py-28 grid sm:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="font-mono text-xs text-accent mb-5">
              <span className="text-soft">$</span> whoami{' '}
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse ml-2" />{' '}
              <span className="text-soft">disponible — alternance</span>
            </p>
            <h1 className="font-mono font-bold text-4xl sm:text-6xl tracking-tight leading-tight">
              {profile.name}
            </h1>
            <p className="font-mono text-lg sm:text-2xl mt-4 text-accent caret">
              {profile.tagline}
            </p>
            <p className="text-soft mt-6 max-w-xl leading-relaxed">
              Je transforme des processus manuels en pipelines automatisés — de
              l'extraction de données jusqu'au dashboard. Actuellement chez{' '}
              <strong className="text-ink font-medium">Framatome</strong>, demain en{' '}
              <strong className="text-ink font-medium">Master Data Science à Paris-Saclay</strong>.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link
                href="/projets"
                className="font-mono text-sm px-5 py-3 rounded-lg bg-accent text-bg font-bold hover:opacity-85 transition-opacity"
              >
                ./voir-projets →
              </Link>
              <Link
                href="/cv"
                className="font-mono text-sm px-5 py-3 rounded-lg border border-line hover:border-accent hover:text-accent transition-colors"
              >
                cat cv.pdf
              </Link>
            </div>
          </div>

          <div className="justify-self-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl border border-accent/40" />
              <Image
                src="/profile.jpg"
                alt="Photo de Carld Similien"
                width={190}
                height={190}
                className="rounded-2xl object-cover w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] grayscale hover:grayscale-0 transition-all"
                priority
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] bg-panel border border-line rounded-full px-3 py-1 text-soft whitespace-nowrap">
                📍 {profile.location}
              </span>
            </div>
          </div>
        </header>

        {/* ── Stats ── */}
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-line rounded-xl overflow-hidden font-mono">
            {[
              ['2', 'expériences industrielles'],
              [`${projects.length}`, 'projets'],
              ['8+', 'technologies maîtrisées'],
              ['B2', 'anglais'],
            ].map(([num, label]) => (
              <div key={label} className="p-5 border border-line -m-px bg-panel/60">
                <div className="text-3xl font-bold text-accent">{num}</div>
                <div className="text-xs text-soft mt-1">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── À propos ── */}
        <section className="py-20">
          <Reveal>
            <h2 className="font-mono text-sm text-accent mb-6">
              <span className="text-soft">##</span> à-propos
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl">{profile.about}</p>
          </Reveal>
        </section>

        {/* ── Compétences ── */}
        <section className="pb-20">
          <Reveal>
            <h2 className="font-mono text-sm text-accent mb-8">
              <span className="text-soft">##</span> compétences
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <div className="group border border-line rounded-xl p-5 bg-panel/60 h-full hover:border-accent hover:-translate-y-1 transition-all">
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <h3 className="font-mono text-sm font-bold group-hover:text-accent transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-xs text-soft mt-2 leading-relaxed">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Projets en avant ── */}
        <section className="pb-24">
          <Reveal>
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-mono text-sm text-accent">
                <span className="text-soft">##</span> projets-récents
              </h2>
              <Link href="/projets" className="font-mono text-xs text-accent2 hover:underline">
                ls --all →
              </Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/projets/${p.slug}`}
                  className="group block border border-line rounded-xl p-6 bg-panel/60 h-full hover:border-accent hover:-translate-y-1 transition-all"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent2">
                    {p.category} · {p.year}
                  </span>
                  <h3 className="font-mono font-bold mt-2 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-soft mt-2 leading-relaxed">{p.short}</p>
                  <span className="font-mono text-xs text-accent inline-block mt-4">
                    open →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
