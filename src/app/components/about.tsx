"use client";

import { Card, CardContent } from "./UIs/card";
import { Target, Eye, Heart } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        {/* ABOUT HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">About HAMTEC PROJECTS</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            HAMTEC PROJECTS is a dynamic construction and project management
            company based in Regina, Saskatchewan. We specialize in delivering
            high-quality construction, landscaping, cleaning, and project
            management services tailored to meet the unique needs of our clients.
            With a commitment to innovation, professionalism, and customer
            satisfaction, we take pride in building not just projects, but
            long-lasting relationships.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* VISION CARD */}
          <motion.div
            variants={item}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <motion.div
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.9, type: "spring" }}
                >
                  <Eye className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-4">Vision</h3>
                <p className="text-muted-foreground">
                  To become a trusted leader in construction and project
                  management across Canada, recognized for quality, integrity, and
                  sustainable solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* MISSION CARD */}
          <motion.div
            variants={item}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <motion.div
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.9, type: "spring" }}
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-4">Mission</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    • To deliver construction projects on time, within budget,
                    and to the highest standards.
                  </p>
                  <p>
                    • To provide value-driven landscaping, cleaning, and
                    maintenance services that enhance living and working
                    environments.
                  </p>
                  <p>
                    • To empower our clients through professional project
                    management that ensures efficiency and peace of mind.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* PURPOSE CARD */}
          <motion.div
            variants={item}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <motion.div
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.9, type: "spring" }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-4">Purpose</h3>
                <p className="text-muted-foreground">
                  At HAMTEC PROJECTS, our purpose is to transform spaces and ideas
                  into sustainable realities while exceeding client expectations
                  in every project.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
