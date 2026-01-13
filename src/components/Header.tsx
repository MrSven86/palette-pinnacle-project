import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

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
      {/* Top Bar - Dark Blue */}
      <div className="bg-[hsl(var(--hero-bg))] py-2.5 text-white">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center text-sm gap-2">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>
              <span className="font-bold text-accent">AV</span>{" "}
              <span className="text-white">(661) 274-4297</span>
            </span>
            <span className="text-white/50">|</span>
            <span>
              <span className="font-bold text-accent">SFV</span>{" "}
              <span className="text-white">(818) 715-0024</span>
            </span>
            <span className="text-white/50">|</span>
            <span>
              <span className="font-bold text-accent">VENTURA</span>{" "}
              <span className="text-white">(805) 701-6654</span>
            </span>
            <span className="text-white/50">|</span>
            <span className="text-white/80">654 E Rancho Vista Blvd Suite A, Palmdale, CA 93550</span>
          </div>
          <a 
            href="/contact" 
            className="font-semibold hover:text-accent transition-colors underline"
          >
            Contact Us
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
                <span className="text-[hsl(var(--hero-bg))]">NVJ</span>{" "}
                <span className="text-foreground">PAINTING</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive("/")
                    ? "text-[hsl(var(--hero-bg))]"
                    : "text-foreground hover:text-[hsl(var(--hero-bg))]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive("/about")
                    ? "text-[hsl(var(--hero-bg))]"
                    : "text-foreground hover:text-[hsl(var(--hero-bg))]"
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors flex items-center gap-1 ${
                  isActive("/services")
                    ? "text-[hsl(var(--hero-bg))]"
                    : "text-foreground hover:text-[hsl(var(--hero-bg))]"
                }`}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className={`font-medium transition-colors ${
                  isActive("/projects")
                    ? "text-[hsl(var(--hero-bg))]"
                    : "text-foreground hover:text-[hsl(var(--hero-bg))]"
                }`}
              >
                Projects
              </Link>
              <Link
                to="/gallery"
                className={`font-medium transition-colors ${
                  isActive("/gallery")
                    ? "text-[hsl(var(--hero-bg))]"
                    : "text-foreground hover:text-[hsl(var(--hero-bg))]"
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/blog"
                className={`font-medium transition-colors ${
                  isActive("/blog")
                    ? "text-[hsl(var(--hero-bg))]"
                    : "text-foreground hover:text-[hsl(var(--hero-bg))]"
                }`}
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className={`font-medium transition-colors ${
                  isActive("/faq")
                    ? "text-[hsl(var(--hero-bg))]"
                    : "text-foreground hover:text-[hsl(var(--hero-bg))]"
                }`}
              >
                FAQ
              </Link>
              <Link to="/contact">
                <Button className="bg-[hsl(var(--nav-accent))] hover:bg-[hsl(145,63%,38%)] text-white px-6">
                  Contact
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
                  isActive("/") ? "text-[hsl(var(--hero-bg))]" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium py-2 ${
                  isActive("/about") ? "text-[hsl(var(--hero-bg))]" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`font-medium py-2 ${
                  isActive("/services") ? "text-[hsl(var(--hero-bg))]" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className={`font-medium py-2 ${
                  isActive("/projects") ? "text-[hsl(var(--hero-bg))]" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/gallery"
                className={`font-medium py-2 ${
                  isActive("/gallery") ? "text-[hsl(var(--hero-bg))]" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/blog"
                className={`font-medium py-2 ${
                  isActive("/blog") ? "text-[hsl(var(--hero-bg))]" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className={`font-medium py-2 ${
                  isActive("/faq") ? "text-[hsl(var(--hero-bg))]" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-[hsl(var(--nav-accent))] hover:bg-[hsl(145,63%,38%)] text-white">
                  Contact
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
