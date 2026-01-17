import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, PaintBucket, Building2, Home, Brush, Warehouse, Phone, Calendar } from "lucide-react";
import residentialHero from "@/assets/residential-hero.png";
import interiorPainting from "@/assets/interior-painting.png";
import localCompany from "@/assets/local-company.png";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Interior Painting",
      description: "Transform your interior spaces with professional painting services for homes and businesses.",
      image: interiorPainting,
      features: [
        "Complete room painting",
        "Wall and ceiling painting",
        "Trim and door painting",
        "Color consultation available",
        "Premium paint selection",
        "Clean and efficient work",
        "Furniture protection",
        "Quick turnaround times"
      ]
    },
    {
      icon: Building2,
      title: "Exterior Painting",
      description: "Protect and beautify your property's exterior with weather-resistant professional painting.",
      image: residentialHero,
      features: [
        "Full exterior painting",
        "Surface preparation and repair",
        "Weather-resistant paints",
        "Siding and trim work",
        "Stucco painting",
        "Wood protection",
        "Color matching",
        "Long-lasting results"
      ]
    },
    {
      icon: Brush,
      title: "Cabinet Refinishing",
      description: "Give your kitchen or bathroom a fresh look with professional cabinet refinishing and restoration services.",
      image: localCompany,
      features: [
        "Kitchen cabinets",
        "Bathroom vanities",
        "Built-in cabinetry",
        "Color changes",
        "Modern finishes",
        "Hardware updates",
        "Protective coatings",
        "Quick turnaround"
      ]
    },
    {
      icon: Warehouse,
      title: "Concrete Coatings",
      description: "Durable epoxy and polyurea floor coatings that resist stains, chemicals, and heavy traffic for years.",
      image: residentialHero,
      features: [
        "Garage floor coatings",
        "Epoxy flooring",
        "Polyurea coatings",
        "Stain resistance",
        "Chemical resistance",
        "Decorative flakes",
        "Non-slip finishes",
        "Long-term durability"
      ]
    },
    {
      icon: PaintBucket,
      title: "Commercial Painting",
      description: "Professional painting services for commercial properties with minimal business disruption.",
      image: localCompany,
      features: [
        "Office buildings",
        "Retail spaces",
        "Restaurants",
        "Flexible scheduling",
        "Weekend/after-hours work",
        "Licensed C-33 contractor",
        "Large project capability",
        "Professional results"
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Contact Us",
      description: "Call or fill out our form for a free estimate"
    },
    {
      number: "2",
      title: "Site Visit",
      description: "We assess your project and provide a detailed quote"
    },
    {
      number: "3",
      title: "Schedule Work",
      description: "We arrange a convenient time for your project"
    },
    {
      number: "4",
      title: "Complete Project",
      description: "Professional execution with quality results"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Split Layout */}
        <section className="grid md:grid-cols-2 min-h-[500px]">
          <div className="relative">
            <img
              src={interiorPainting}
              alt="Our services"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-secondary flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg">
              <p className="text-primary font-semibold italic mb-2">What We Offer</p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Our Professional Painting Services
              </h1>
              <p className="text-white/80 mb-6">
                Comprehensive painting solutions for residential and commercial properties in Los Angeles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    Get Free Estimate
                  </Button>
                </Link>
                <a href="tel:6612744297">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary px-6">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail Sections */}
        {services.map((service, index) => (
          <section 
            key={index} 
            className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
          >
            <div className="container mx-auto px-4">
              <div className={`grid md:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-primary font-semibold uppercase tracking-wider text-sm">
                      {service.title.toUpperCase()}
                    </p>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-medium mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
                    WHAT'S INCLUDED
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-text-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Process Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold italic mb-2">How It Works</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                Our Simple Process
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${residentialHero})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <p className="text-primary font-semibold italic mb-2">Ready to Get Started?</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's Transform Your Space
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Contact NVJ Painting Inc today for your free estimate. We're ready to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                  Request Free Estimate
                </Button>
              </Link>
              <a href="tel:6612744297">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary px-8">
                  <Phone className="w-4 h-4 mr-2" />
                  (661) 274-4297
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;