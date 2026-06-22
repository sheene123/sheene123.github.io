'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences, education } from '@/lib/data';

export default function Experience() {
  const [openId, setOpenId] = useState('framatome');

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="font-mono text-sm text-accent mb-2">
        <span className="text-soft">##</span> expériences
      </h1>
      <p className="font-mono font-bold text-3xl sm:text-4xl mb-12">Parcours professionnel</p>

      {/* Timeline accordéon */}
      <div className="relative border-l-2 border-line ml-2 pl-8 space-y-6">
        {experiences.map((xp) => {
          const open = openId === xp.id;
          return (
            <div key={xp.id} className="relative">
              <span className="absolute -left-[42px] top-5 w-4 h-4 rounded-full bg-accent border-4 border-bg" />
              <div className="border border-line rounded-xl bg-panel/60 overflow-hidden">
                <button
                  onClick={() => setOpenId(open ? null : xp.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-panel transition-colors"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent2">
                      {xp.type} · {xp.period}
                    </span>
                    <h2 className="font-mono font-bold text-lg mt-1">{xp.role}</h2>
                    <p className="text-soft text-sm mt-0.5">
                      {xp.org} — {xp.place}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    className="text-2xl text-accent shrink-0 leading-none mt-1"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <ul className="space-y-2.5 border-t border-line pt-5">
                          {xp.missions.map((m) => (
                            <li key={m} className="flex gap-3 text-sm text-soft">
                              <span className="text-accent font-mono shrink-0">→</span>
                              {m}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-5">
                          {xp.stack.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[11px] border border-line rounded px-2 py-1 text-accent2"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>

      {/* Formation */}
      <h2 className="font-mono text-sm text-accent mt-20 mb-2">
        <span className="text-soft">##</span> formation
      </h2>
      <p className="font-mono font-bold text-2xl mb-8">Études</p>
      <div className="space-y-3">
        {education.map((e) => (
          <div
            key={e.degree}
            className="flex flex-wrap items-baseline justify-between gap-2 border border-line rounded-xl bg-panel/60 px-5 py-4"
          >
            <div>
              <h3 className="font-mono font-bold text-sm">{e.degree}</h3>
              <p className="text-soft text-xs mt-0.5">{e.school}</p>
            </div>
            <span className="font-mono text-xs text-accent">{e.period}</span>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs text-soft mt-8">
        <span className="text-accent">$</span> langues --list → français (natif) · anglais (B2)
      </p>
    </div>
  );
}
