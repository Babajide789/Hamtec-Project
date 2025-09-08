"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./UIs/card";
import { Hammer, Trees, Sparkles, ClipboardList } from "lucide-react";
import Image from "next/image";

export function Services() {
  const services = [
    {
      title: "Construction & Renovation",
      description:
        "Residential, commercial, and industrial projects delivered with precision and quality.",
      icon: Hammer,
      src: "/img1.jpg",
    },
    {
      title: "Landscaping & Outdoor Solutions",
      description:
        "Design, installation, and maintenance of beautiful outdoor spaces.",
      icon: Trees,
      src: "/img7.jpg",
    },
    {
      title: "Professional Cleaning Services",
      description:
        "Post-construction, residential, and commercial cleaning services.",
      icon: Sparkles,
      src: "/img3.jpg",
    },
    {
      title: "Project Management",
      description:
        "Planning, scheduling, and managing resources for seamless execution.",
      icon: ClipboardList,
      src: "/img6.jpg",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive solutions for all your construction,
            landscaping, cleaning, and project management needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.src}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
