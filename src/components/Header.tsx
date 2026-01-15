import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Trophy, MapPin } from "lucide-react";

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
      {/* Top Bar - Black */}
      <div className="bg-black py-2 text-white">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm gap-2">
          {/* Left - Award */}
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-white" />
            <span className="text-white">Voted BEST Painting & Concrete Coatings Contractors for over 15 years!</span>
          </div>
          
          {/* Right - Phone */}
          <a href="tel:6612744297" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <Phone className="h-5 w-5" />
            <span className="font-bold text-lg">(661) 274-4297</span>
          </a>
        </div>
      </div>

      {/* Main Header - White */}
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
                <span className="text-foreground italic">Painting</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`font-semibold uppercase tracking-wide transition-colors ${
                  isActive("/")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Home
              </Link>
              <div className="flex items-center gap-1 font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors cursor-pointer">
                Residential
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors cursor-pointer">
                Commercial
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors cursor-pointer">
                Cabinets
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors cursor-pointer">
                Concrete Coatings
                <ChevronDown className="h-4 w-4" />
              </div>
              <Link
                to="/services"
                className="font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors"
              >
                Garage Storage
              </Link>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-5 font-bold uppercase tracking-wide">
                  Free Quote
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>


        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
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
                to="/about"
                className={`font-medium py-2 ${
                  isActive("/about") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
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
                to="/contact"
                className={`font-medium py-2 ${
                  isActive("/contact") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  Free Quote
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
