import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, PaintBucket, Building2, Home, Brush } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Interior Painting",
      description: "Transform your interior spaces with professional painting services for homes and businesses.",
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
      title: "Commercial Interior",
      description: "Professional interior painting services for commercial properties with minimal disruption.",
      features: [
        "Office painting",
        "Retail space painting",
        "Restaurant painting",
        "Flexible scheduling",
        "Weekend/after-hours work",
        "Licensed C-33 contractor",
        "Minimal business disruption",
        "Large project capability"
      ]
    },
    {
      icon: PaintBucket,
      title: "Commercial Exterior",
      description: "Commercial exterior painting services that maintain your property's professional appearance.",
      features: [
        "Building exterior painting",
        "Commercial complexes",
        "Strip malls and plazas",
        "Weather protection",
        "Surface preparation",
        "Premium commercial paints",
        "Code compliance",
        "Professional results"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-text-medium text-center max-w-3xl mx-auto">
              Comprehensive painting solutions for residential and commercial properties in Los Angeles
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-medium mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Our <span className="text-primary">Process</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Contact Us</h3>
                <p className="text-text-medium">
                  Call or fill out our form for a free estimate
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Site Visit</h3>
                <p className="text-text-medium">
                  We assess your project and provide a detailed quote
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Schedule Work</h3>
                <p className="text-text-medium">
                  We arrange a convenient time for your project
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Complete Project</h3>
                <p className="text-text-medium">
                  Professional execution with quality results
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact NVJ Painting Inc today for your free estimate
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Request Free Estimate
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
