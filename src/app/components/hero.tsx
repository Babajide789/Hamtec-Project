"use client";

import { Button } from "./UIs/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const buttonContainer = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const buttonItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // prevents mismatch before hydration
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white overflow-hidden">
      {/* OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-black/50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />

      {/* BACKGROUND IMAGE */}
      <Image
        src="/backgroundIMG.jpg"
        alt="Construction workers at site"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* HERO CONTENT */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          HAMTEC PROJECTS
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          "Building Excellence, Managing Success."
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Transform spaces and ideas into sustainable realities with our
          comprehensive construction, landscaping, cleaning, and project
          management services.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={buttonContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={buttonItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/services" passHref>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 cursor-pointer"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={buttonItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact-us" passHref>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 cursor-pointer rounded-md font-medium transition-colors 
                bg-white text-black 
                dark:bg-black dark:text-white hover:bg-secondary/50"
              >
                Get Quote
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
