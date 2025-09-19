"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg 
        bg-gray-200 dark:bg-gray-800 
        text-gray-800 dark:text-gray-200
        transition-colors duration-500 ease-in-out"
      aria-label="Toggle Dark Mode"
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        key={theme}
        className="absolute inset-0 rounded-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1.4, opacity: 0.15 }}
        transition={{ duration: 0.6 }}
      />

      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <Sun size={20} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <Moon size={20} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
