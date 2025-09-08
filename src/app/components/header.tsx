"use client"

import { Button } from "./UIs/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ properly define pathname

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">HAMTEC PROJECTS</h1>
              <p className="text-sm text-muted-foreground">
                Building Excellence, Managing Success
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "font-bold mr-6"
                  : "text-blue-500 mr-4"
              }
            >
              About
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white hover:bg-primary/90 w-fit"
              >
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
