"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./UIs/card";
import Image from "next/image";
import { Badge } from "./UIs/badge";
import { motion, Variants } from "framer-motion";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

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
      description:
        "Complete home renovation including kitchen, bathrooms, and living spaces.",
      src: "/servIMG2.jpg",
    },
    {
      title: "Office Building Construction",
      category: "Commercial",
      description:
        "Modern office building with sustainable design and efficient workflow spaces.",
      src: "/portIMG2.jpg",
    },
    {
      title: "Backyard Landscaping",
      category: "Landscaping",
      description:
        "Complete backyard transformation with modern design and sustainable plantings.",
      src: "/portIMG3.jpg",
    },
    {
      title: "Commercial Cleaning & Maintenance",
      category: "Cleaning",
      description:
        "Ongoing cleaning services for office buildings and commercial spaces.",
      src: "/img1.jpg",
    },
    {
      title: "Infrastructure Support Projects",
      category: "Infrastructure",
      description:
        "Municipal infrastructure projects including roadwork and utilities.",
      src: "/servIMG5.jpg",
    },
    {
      title: "Project Management Excellence",
      category: "Management",
      description:
        "Comprehensive project coordination and resource management for large-scale developments.",
      src: "/servIMG6.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        {/* PORTFOLIO HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of successful projects across construction,
            landscaping, cleaning, and project management.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >

          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="h-full"
            >
              <Card className="group transition-all duration-300 flex flex-col h-full overflow-hidden">
                {/* IMAGES */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* BADGE FRAMER EFFECTS */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + 0.1,
                      type: "spring",
                      stiffness: 350,
                    }}
                    viewport={{ once: false }}
                  >
                    <Badge className="absolute top-4 left-4 bg-primary text-white cursor-pointer">
                      {project.category}
                    </Badge>
                  </motion.div>

                </div>

                {/* TEXTS */}
                <div className="flex flex-col flex-1">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
