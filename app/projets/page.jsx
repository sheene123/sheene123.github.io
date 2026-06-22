'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';

const categories = ['Tous', 'DevOps', 'Cloud', 'IA', 'Web'];

export default function Projets() {
  const [filter, setFilter] = useState('Tous');
  const shown =
    filter === 'Tous' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <h1 className="font-mono text-sm text-accent mb-2">
        <span className="text-soft">##</span> projets
      </h1>
      <p className="font-mono font-bold text-3xl sm:text-4xl mb-10">
        ls ~/projets <span className="text-soft text-xl">({shown.length})</span>
      </p>

      {/* Filtres */}
      <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              filter === c
                ? 'bg-accent text-bg border-accent font-bold'
                : 'border-line text-soft hover:border-accent hover:text-accent'
            }`}
          >
            --{c.toLowerCase()}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid sm:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                href={`/projets/${p.slug}`}
                className="group block border border-line rounded-xl p-6 bg-panel/60 h-full hover:border-accent hover:-translate-y-1 transition-all"
              >
                <div className="flex items-baseline justify-between gap-3 font-mono text-[10px] uppercase tracking-widest">
                  <span className="text-accent2">{p.category}</span>
                  <span className="text-soft">{p.year}</span>
                </div>
                <h2 className="font-mono font-bold text-lg mt-3 group-hover:text-accent transition-colors">
                  {p.title}
                </h2>
                <p className="text-sm text-soft mt-2 leading-relaxed">{p.short}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] border border-line rounded px-2 py-0.5 text-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-xs text-accent inline-block mt-4">
                  cat {p.slug}.md →
                </span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
