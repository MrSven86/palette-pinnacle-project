import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, Shield, Award, Star, PaintBucket } from "lucide-react";
import heroImage from "@/assets/hero-painting.jpg";
import qualityImage from "@/assets/quality-work.jpg";
import consultationImage from "@/assets/consultation.jpg";

const Index = () => {
  const services = [
    {
      title: "Interior Painting",
      description: "Professional interior painting for homes and businesses. Transform your space with expert color consultation and flawless finishes.",
      features: ["Color Consultation", "Premium Paints", "Clean Work Areas", "Quick Turnaround"]
    },
    {
      title: "Exterior Painting",
      description: "Protect and beautify your property's exterior with weather-resistant paints and professional application techniques.",
      features: ["Weather Protection", "Surface Preparation", "Premium Materials", "Long-lasting Results"]
    },
    {
      title: "Commercial Painting",
      description: "Minimize downtime with efficient commercial painting services. Licensed for all commercial projects in Los Angeles.",
      features: ["Flexible Scheduling", "Minimal Disruption", "Large Projects", "Licensed C-33"]
    }
  ];

  const trustBadges = [
    { icon: Shield, text: "Licensed & Bonded" },
    { icon: Award, text: "BuildZoom Score 92" },
    { icon: Star, text: "Proven Track Record" },
    { icon: Check, text: "Free Estimates" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-muted to-background py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  Professional Painting Services in{" "}
                  <span className="text-primary">Los Angeles</span>
                </h1>
                <p className="text-lg md:text-xl text-text-medium mb-8 leading-relaxed">
                  Licensed C-33 contractor with BuildZoom score of 92. Transform your property with expert painting services backed by proven credentials.
                </p>
                
                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {trustBadges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <badge.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground w-full sm:w-auto text-lg px-8">
                      Get Free Estimate
                    </Button>
                  </Link>
                  <a href="tel:3235921043">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
                      <Phone className="mr-2 h-5 w-5" />
                      (323) 592-1043
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Professional painting services in Los Angeles" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
                  <div className="text-3xl font-bold">92</div>
                  <div className="text-sm">BuildZoom Score</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg text-text-medium max-w-2xl mx-auto">
                Comprehensive painting solutions for residential and commercial properties in Los Angeles
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <PaintBucket className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-text-medium mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src={qualityImage} 
                  alt="Quality painting work" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Why Choose <span className="text-primary">NVJ Painting</span>
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-1">Licensed & Bonded</h3>
                      <p className="text-text-medium">California C-33 license #1121976 with full bonding for your protection</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-1">Proven Quality</h3>
                      <p className="text-text-medium">BuildZoom score of 92 reflects our commitment to excellence</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-1">Professional Service</h3>
                      <p className="text-text-medium">Experienced team dedicated to delivering exceptional results</p>
                    </div>
                  </div>
                </div>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free, no-obligation estimate from Los Angeles' trusted painting contractor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
                  Request Free Estimate
                </Button>
              </Link>
              <a href="tel:3235921043">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (323) 592-1043
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

export default Index;
