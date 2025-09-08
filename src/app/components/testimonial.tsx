import { Card, CardContent } from "./UIs/card";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "John D.",
      role: "Homeowner",
      content: "HAMTEC PROJECTS transformed our home with their outstanding renovation work. Professional, timely, and detail-oriented!",
      rating: 5
    },
    {
      name: "Sarah L.",
      role: "Business Owner",
      content: "Their cleaning services are exceptional. Our office has never looked better.",
      rating: 5
    },
    {
      name: "Mark T.",
      role: "Developer",
      content: "The project management team ensured our commercial project was delivered smoothly and on schedule. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}