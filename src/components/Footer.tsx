import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">
              <span className="text-primary">NVJ</span> PAINTING INC
            </h3>
            <p className="text-background/80 mb-4">
              Licensed and bonded painting contractor serving Los Angeles with professional commercial and residential painting services.
            </p>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <div>CA License #1121976</div>
              <div>BuildZoom Score: 92</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:3235921043" className="text-background/80 hover:text-primary transition-colors">
                    (323) 592-1043
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  332 West 76th Street<br />
                  Los Angeles, CA 90003
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  Available upon request
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; {currentYear} NVJ Painting Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
