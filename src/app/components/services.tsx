"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./UIs/card";
import { Hammer, Trees, Sparkles, ClipboardList } from "lucide-react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -45, opacity: 0 },
  show: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export function Services() {
  const services = [
    {
      title: "Construction & Renovation",
      description:
        "Residential, commercial, and industrial projects delivered with precision and quality.",
      icon: Hammer,
      src: "/portIMG5.jpg",
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
    <section id="services" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        {/* SERVICES HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive solutions for all your construction,
            landscaping, cleaning, and project management needs.
          </p>
        </motion.div>

        {/* SERVICES SECTION */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="h-full"
              >
                <Card className="group transition-all duration-300 flex flex-col h-full">
                  {/* IMAGE SECTION */}
                  <div className="relative h-48 overflow-hidden rounded-t-lg shrink-0">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={service.src}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors"></div>

                    {/* ICON */}
                    <motion.div
                      className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                  </div>

                  {/* TEXT SECTION */}
                  <div className="flex flex-col flex-1">
                    <CardHeader>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
