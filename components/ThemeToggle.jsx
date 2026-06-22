'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.dataset.theme === 'light');
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    if (next) {
      document.documentElement.dataset.theme = 'light';
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem('theme', next ? 'light' : 'dark');
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Changer de thème"
      title="Changer de thème"
      className="w-9 h-9 grid place-items-center rounded-lg border border-line text-soft hover:text-accent hover:border-accent transition-colors"
    >
      {light ? '☾' : '☀'}
    </button>
  );
}
