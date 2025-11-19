import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-background border-b border-border py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="text-text-medium">
            <span className="font-medium">CA License #1121976</span>
            <span className="mx-2 text-text-lighter">|</span>
            <span>BuildZoom Score: 92</span>
          </div>
          <a 
            href="tel:3235921043" 
            className="text-primary font-semibold hover:text-primary-hover transition-colors flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            (323) 592-1043
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 bg-background transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="font-heading text-2xl font-bold">
                <span className="text-primary">NVJ</span>{" "}
                <span className="text-foreground">PAINTING</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive("/")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors ${
                  isActive("/services")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive("/about")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                About
              </Link>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  Get Free Estimate
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                to="/"
                className={`font-medium py-2 ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`font-medium py-2 ${
                  isActive("/services") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={`font-medium py-2 ${
                  isActive("/about") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  Get Free Estimate
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
