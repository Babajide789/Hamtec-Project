"use client";

import { Card, CardContent } from "./UIs/card";
import { Star, Quote } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -45, opacity: 0 },
  show: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 250, damping: 12 },
  },
};

export function Testimonials() {
  const testimonials = [
    {
      name: "John D.",
      role: "Homeowner",
      content:
        "HAMTEC PROJECTS transformed our home with their outstanding renovation work. Professional, timely, and detail-oriented!",
      rating: 5,
    },
    {
      name: "Sarah L.",
      role: "Business Owner",
      content:
        "Their cleaning services are exceptional. Our office has never looked better.",
      rating: 5,
    },
    {
      name: "Mark T.",
      role: "Developer",
      content:
        "The project management team ensured our commercial project was delivered smoothly and on schedule. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 py-8">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our work.
          </p>
        </motion.div>

        {/* TESTIMONIAL CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="h-full"
            >
              <Card className="p-6 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                <CardContent className="pt-6 flex flex-col justify-between h-full">
                  {/* QUOTE ICON */}
                  <motion.div variants={iconVariants}>
                    <Quote className="w-8 h-8 text-primary mb-4" />
                  </motion.div>

                  {/* TEXT */}
                  <p className="text-muted-foreground mb-6 italic flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* RATINGS */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: i * 0.1 + index * 0.2,
                          type: "spring",
                          stiffness: 300,
                          damping: 12,
                        }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* AUTHOR */}
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
