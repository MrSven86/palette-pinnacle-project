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
          
          {/* Center - Secondary Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/contact" className="text-white hover:text-white/80 transition-colors">CONTACT</Link>
            <Link to="/blog" className="text-white hover:text-white/80 transition-colors">BLOG</Link>
            <Link to="/service-areas" className="text-white hover:text-white/80 transition-colors">SERVICE AREAS</Link>
            <Link to="/careers" className="text-white hover:text-white/80 transition-colors">CAREERS</Link>
            <div className="flex items-center gap-1 text-white hover:text-white/80 transition-colors cursor-pointer">
              ABOUT
              <ChevronDown className="h-4 w-4" />
            </div>
          </nav>
          
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

        {/* Red Service Areas Bar */}
        <div className="bg-primary py-2.5">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Left - Service Areas */}
            <Link to="/service-areas" className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/90 transition-colors">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold uppercase tracking-wide">Service Areas</span>
            </Link>
            
            {/* Right - Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </a>
              <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.72 3.99a1.2 1.2 0 0 0-.89.41 1.27 1.27 0 0 0-.38.92c0 .36.13.68.38.93.26.25.56.38.9.38s.65-.13.9-.38c.25-.25.38-.57.38-.93a1.23 1.23 0 0 0-.38-.92 1.22 1.22 0 0 0-.91-.41zM12.75.98c-.67 0-1.35.02-1.95.07a22.02 22.02 0 0 0-2.44.35c-.7.13-1.3.35-1.8.62-.55.3-1.03.68-1.43 1.13-.4.45-.7.97-.87 1.55-.17.6-.3 1.16-.34 1.98-.05.82-.07 1.09-.07 3.18v2.28c0 2.09.02 2.36.07 3.18.05.82.18 1.38.35 1.98.18.58.47 1.1.87 1.55.4.45.88.83 1.43 1.13.5.27 1.1.49 1.8.62.62.12 1.42.23 2.44.35.6.05 1.28.07 1.95.07h2.5c.67 0 1.35-.02 1.95-.07a22.02 22.02 0 0 0 2.44-.35c.7-.13 1.3-.35 1.8-.62.55-.3 1.03-.68 1.43-1.13.4-.45.7-.97.87-1.55.17-.6.3-1.16.34-1.98.05-.82.07-1.09.07-3.18v-2.28c0-2.09-.02-2.36-.07-3.18a5.03 5.03 0 0 0-.35-1.98c-.18-.58-.47-1.1-.87-1.55a3.8 3.8 0 0 0-1.43-1.13c-.5-.27-1.1-.49-1.8-.62a22.02 22.02 0 0 0-2.44-.35c-.6-.05-1.28-.07-1.95-.07h-2.5zm.63 2.16c.6 0 1.09.01 1.58.05.95.08 1.64.23 2.05.39.55.2.95.45 1.35.85.4.4.65.8.85 1.35.16.4.31 1.1.39 2.05.04.49.05.98.05 1.58v2.18c0 .6-.01 1.09-.05 1.58-.08.95-.23 1.65-.39 2.05-.2.55-.45.95-.85 1.35-.4.4-.8.65-1.35.85-.41.16-1.1.31-2.05.39-.49.04-.98.05-1.58.05h-2.26c-.6 0-1.09-.01-1.58-.05-.95-.08-1.64-.23-2.05-.39-.55-.2-.95-.45-1.35-.85-.4-.4-.65-.8-.85-1.35-.16-.4-.31-1.1-.39-2.05-.04-.49-.05-.98-.05-1.58v-2.18c0-.6.01-1.09.05-1.58.08-.95.23-1.65.39-2.05.2-.55.45-.95.85-1.35.4-.4.8-.65 1.35-.85.41-.16 1.1-.31 2.05-.39.49-.04.98-.05 1.58-.05h2.26zm1.12 3.9a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm0 1.92a2.33 2.33 0 1 1 0 4.66 2.33 2.33 0 0 1 0-4.66z"/></svg>
              </a>
            </div>
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
