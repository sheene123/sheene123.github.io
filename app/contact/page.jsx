'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/lib/data';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  // décodé seulement dans le navigateur → absent du HTML statique servi par GitHub Pages
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(atob(profile.emailEncoded));
  }, []);

  const copy = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="max-w-3xl mx-auto px-5 py-20">
      <h1 className="font-mono text-sm text-accent mb-2">
        <span className="text-soft">##</span> contact
      </h1>
      <p className="font-mono font-bold text-3xl sm:text-5xl leading-tight max-w-xl">
        Un projet, une alternance, une question&nbsp;?
      </p>
      <p className="text-soft mt-6 max-w-md">
        Basé à {profile.location}. Je recherche une alternance en data science /
        ingénierie de la donnée. Réponse rapide garantie.
      </p>

      {/* Fenêtre terminal */}
      <div className="mt-12 border border-line rounded-xl overflow-hidden bg-panel/80">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
          <span className="w-3 h-3 rounded-full bg-red-400/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <span className="w-3 h-3 rounded-full bg-green-400/70" />
          <span className="font-mono text-[10px] text-soft ml-3">contact.sh</span>
        </div>
        <div className="p-6 font-mono text-sm space-y-4">
          <p>
            <span className="text-accent">$</span> echo $EMAIL
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={email ? `mailto:${email}` : undefined}
              className="text-accent2 text-base sm:text-xl hover:underline break-all"
            >
              {email || '••••••••@••••••.•••'}
            </a>
            <button
              onClick={copy}
              disabled={!email}
              className="text-xs px-3 py-1.5 rounded border border-line hover:border-accent hover:text-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {copied ? '✓ copié' : 'copier'}
            </button>
          </div>
          <p className="pt-2">
            <span className="text-accent">$</span> ls ~/réseaux
          </p>
          <div className="flex gap-6">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft hover:text-accent transition-colors"
              >
                github ↗
              </a>
            )}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft hover:text-accent transition-colors"
            >
              linkedin ↗
            </a>
          </div>
          <p className="text-soft pt-2">
            <span className="text-accent">$</span> <span className="caret" />
          </p>
        </div>
      </div>
    </div>
  );
}
