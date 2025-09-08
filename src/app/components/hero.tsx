"use client"

import { Button } from "./UIs/button";
import Image from "next/image";



export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src="/backgroundIMG.jpg"
        alt="Construction workers at site"
        fill
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          HAMTEC PROJECTS
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          "Building Excellence, Managing Success."
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300">
          Transform spaces and ideas into sustainable realities with our comprehensive construction, 
          landscaping, cleaning, and project management services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('services')}
            className="bg-primary text-white hover:bg-primary/90 px-8 py-3"
          >
            Our Services
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-white text-black hover:bg-white hover:text-primary px-8 py-3"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  );
}