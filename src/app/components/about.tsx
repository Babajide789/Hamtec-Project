import { Card, CardContent } from "./UIs/card";
import { Target, Eye, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About HAMTEC PROJECTS</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            HAMTEC PROJECTS is a dynamic construction and project management company based in Regina, Saskatchewan. 
            We specialize in delivering high-quality construction, landscaping, cleaning, and project management 
            services tailored to meet the unique needs of our clients. With a commitment to innovation, 
            professionalism, and customer satisfaction, we take pride in building not just projects, 
            but long-lasting relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4">Vision</h3>

              <p className="text-muted-foreground">
                To become a trusted leader in construction and project management across Canada, 
                recognized for quality, integrity, and sustainable solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4">Mission</h3>

              <div className="text-muted-foreground space-y-2">
                <p>• To deliver construction projects on time, within budget, and to the highest standards.</p>
                <p>• To provide value-driven landscaping, cleaning, and maintenance services that enhance living and working environments.</p>
                <p>• To empower our clients through professional project management that ensures efficiency and peace of mind.</p>
              </div>
              
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4">Purpose</h3>
              <p className="text-muted-foreground">
                
                At HAMTEC PROJECTS, our purpose is to transform spaces and ideas into sustainable 
                realities while exceeding client expectations in every project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}