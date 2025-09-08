import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">HAMTEC PROJECTS</h3>
                <p className="text-sm text-gray-300">Building Excellence, Managing Success</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming spaces and ideas into sustainable realities with our comprehensive 
              construction, landscaping, cleaning, and project management services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Construction & Renovation</li>
              <li>Landscaping Solutions</li>
              <li>Professional Cleaning</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">82 Barr Street, Regina, SK</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 306 519 9602</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@hamtecprojects.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm">hamtecprojects.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} HAMTEC PROJECTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}