import { Card, CardContent, CardHeader, CardTitle } from "./UIs/card";
import { Button } from "./UIs/button";
import { Input } from "./UIs/input";
import { Textarea } from "./UIs/textarea";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with us today for a consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help with all your construction, landscaping, cleaning, and project management needs. 
                Contact us today to discuss your project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-muted-foreground">82 Barr Street<br />Regina, SK, Canada</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 306 519 9602</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@hamtecprojects.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Website</h4>
                  <p className="text-muted-foreground">hamtecprojects.com</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Our Service Areas</h4>
              <p className="text-muted-foreground">
                We proudly serve Regina, Saskatchewan, and surrounding areas. 
                Contact us to discuss projects in other locations across Canada.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2">First Name</label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">Last Name</label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2">Phone</label>
                <Input id="phone" type="tel" placeholder="+1 (306) 000-0000" />
              </div>
              
              <div>
                <label htmlFor="service" className="block mb-2">Service Interested In</label>
                <select 
                  id="service" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select a service</option>
                  <option value="construction">Construction & Renovation</option>
                  <option value="landscaping">Landscaping & Outdoor Solutions</option>
                  <option value="cleaning">Professional Cleaning Services</option>
                  <option value="project-management">Project Management</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}