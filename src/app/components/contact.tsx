"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./UIs/card";
import { Button } from "./UIs/button";
import { Input } from "./UIs/input";
import { Textarea } from "./UIs/textarea";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const itemLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const itemRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const iconVariant: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -30 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with us today for a
            consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help with all your construction, landscaping,
                cleaning, and project management needs. Contact us today to
                discuss your project.
              </p>
            </motion.div>

            {/* INFO ITEMS */}
            <motion.div variants={staggerContainer} className="space-y-6">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-white" />,
                  title: "Address",
                  text: "82 Barr Street\nRegina, SK, Canada",
                },
                {
                  icon: <Phone className="w-6 h-6 text-white" />,
                  title: "Phone",
                  text: "+1 306 519 9602",
                },
                {
                  icon: <Mail className="w-6 h-6 text-white" />,
                  title: "Email",
                  text: "info@hamtecprojects.com",
                },
                {
                  icon: <Globe className="w-6 h-6 text-white" />,
                  title: "Website",
                  text: "hamtecprojects.com",
                },
              ].map((info, i) => (
                <motion.div
                  key={i}
                  variants={itemLeft}
                  className="flex items-start space-x-4"
                >
                  <motion.div
                    variants={iconVariant}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    {info.icon}
                  </motion.div>

                  <div>
                    <h4 className="font-bold mb-1">{info.title}</h4>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {info.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* SERVICE SECTION */}
            <motion.div variants={fadeUp} className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Our Service Areas</h4>
              <p className="text-muted-foreground">
                We proudly serve Regina, Saskatchewan, and surrounding areas.
                Contact us to discuss projects in other locations across Canada.
              </p>
            </motion.div>
          </motion.div>

          {/* FORM SECTION */}
          <motion.div
            variants={itemRight}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2">
                    Phone
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 (306) 000-0000" />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="construction">
                      Construction & Renovation
                    </option>
                    <option value="landscaping">
                      Landscaping & Outdoor Solutions
                    </option>
                    <option value="cleaning">
                      Professional Cleaning Services
                    </option>
                    <option value="project-management">
                      Project Management
                    </option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                  />
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Send Message
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
