"use client";

import { Button } from "./UIs/button";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const linkVariants: Variants = {
    hidden: { opacity: 0, x: 20, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut" as const,
      },
    }),
  };

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link 
  href="/" 
  className="flex items-center gap-2 sm:gap-3 group"
>
  {/* Logo Image */}
  <div className="relative w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0">
    <Image
      src="/logo1.jpg"
      alt="Hamtec Projects Logo"
      fill
      className="object-contain transition-transform duration-300 group-hover:scale-105"
      priority
    />
  </div>

  {/* Logo Text */}
  <div className="leading-tight">
    <h1 className="text-base sm:text-2xl font-extrabold tracking-wide text-primary">
      HAMTEC <span className="text-primary">PROJECTS</span>
    </h1>
    <p className="text-[10px] sm:text-sm text-muted-foreground tracking-wide">
      Building Excellence, Managing Success
    </p>
  </div>
</Link>




          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-foreground hover:text-primary transition-colors ${
                  pathname === link.href ? "font-bold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Link href="/contact-us" passHref>
              <Button
                asChild
                className={`bg-primary text-white hover:bg-primary/90 ${
                  pathname === "/contact-us" ? "font-bold" : ""
                }`}
              >
                <span>Contact Us</span>
              </Button>
            </Link>
          </nav>

          {/*MOBILE MHAMBURGER */}
          <div ref={menuContainerRef} className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex flex-col justify-center items-center w-8 h-8 focus:outline-none cursor-pointer"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-black rounded mb-1"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-black rounded mb-1"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-black rounded"
                transition={{ duration: 0.3 }}
              />
            </button>

            {/* OVERLAY */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                  onClick={() => setIsOpen(false)}
                />
              )}
            </AnimatePresence>

            {/* MOBILE DRAWER */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="mobileMenu"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute top-14 right-4 z-50"
                >
                  <div className="bg-white rounded-xl shadow-2xl p-6 w-64 flex flex-col items-center space-y-6">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        variants={linkVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                      >
                        <Link
                          href={link.href}
                          className={`text-lg text-foreground hover:text-primary transition-colors ${
                            pathname === link.href ? "font-bold" : ""
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}

                    <motion.div
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      custom={navLinks.length}
                    >
                      <Link href="/contact-us" passHref>
                        <Button
                          asChild
                          className="bg-primary text-white hover:bg-primary/90 w-full"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>Contact Us</span>
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
