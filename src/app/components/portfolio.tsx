"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./UIs/card";
import Image from "next/image";
import { Badge } from "./UIs/badge";


interface Project {
  title: string;
  category: string;
  description: string;
  src: string;
}

export function Portfolio() {
  
  const projects: Project[] = [
    {
      title: "Residential House Renovations",
      category: "Construction",
      description: "Complete home renovation including kitchen, bathrooms, and living spaces.",
      src: "/servIMG1.jpg",
    },
    {
      title: "Office Building Construction",
      category: "Commercial",
      description: "Modern office building with sustainable design and efficient workflow spaces.",
      src: "/servIMG2.jpg",
    },
    {
      title: "Backyard Landscaping",
      category: "Landscaping",
      description: "Complete backyard transformation with modern design and sustainable plantings.",
      src: "/servIMG3.jpg",
    },
    {
      title: "Commercial Cleaning & Maintenance",
      category: "Cleaning",
      description: "Ongoing cleaning services for office buildings and commercial spaces.",
      src: "/servIMG4.jpg",
    },
    {
      title: "Infrastructure Support Projects",
      category: "Infrastructure",
      description: "Municipal infrastructure projects including roadwork and utilities.",
      src: "/servIMG5.jpg",
    },
    {
      title: "Project Management Excellence",
      category: "Management",
      description: "Comprehensive project coordination and resource management for large-scale developments.",
      src: "/servIMG6.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of successful projects across construction,
            landscaping, cleaning, and project management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {project.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
