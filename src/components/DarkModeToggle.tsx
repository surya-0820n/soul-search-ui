'use client';
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="ml-4 rounded-lg px-3 py-1.5 text-sm font-medium border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[#23272f] text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-[#23272f]/80 transition-colors"
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
} 