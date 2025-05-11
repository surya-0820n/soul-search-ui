'use client';
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Check localStorage first
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on localStorage or system preference
    const initialTheme = storedTheme === 'dark' || (!storedTheme && prefersDark);
    setDark(initialTheme);
    
    if (initialTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mounted]);

  const toggleDarkMode = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    
    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <button
        className="ml-4 rounded-lg px-3 py-1.5 text-sm font-medium border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[#23272f] text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-[#23272f]/80 transition-colors"
        aria-label="Toggle dark mode"
      >
        Loading...
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="ml-4 rounded-lg px-3 py-1.5 text-sm font-medium border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[#23272f] text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-[#23272f]/80 transition-colors"
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
} 