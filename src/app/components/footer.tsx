import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 text-center md:text-left">
            <Link
              href="/"
              className="flex flex-col items-center md:flex-row md:items-center gap-3 group mb-6"
            >
              {/* Logo Image */}
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/logo1.jpg"
                  alt="Hamtec Projects Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Logo Text */}
              <div className="leading-tight">
                <h3 className="text-2xl font-extrabold tracking-wide">
                  HAMTEC <span className="text-secondary">PROJECTS</span>
                </h3>
                <p className="text-sm text-gray-300 tracking-wide">
                  Building Excellence, Managing Success
                </p>
              </div>
            </Link>

            <p className="text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
              Transforming spaces and ideas into sustainable realities with our
              comprehensive construction, landscaping, cleaning, and project
              management services.
            </p>
        </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Construction & Renovation</li>
              <li>Landscaping Solutions</li>
              <li>Professional Cleaning</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">82 Barr Street, Regina, SK</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 306 519 9602</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@hamtecprojects.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm">hamtecprojects.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-8 pt-5 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} HAMTEC PROJECTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
