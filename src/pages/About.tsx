import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Target, Check, Phone, Calendar } from "lucide-react";
import residentialHero from "@/assets/residential-hero.png";
import localCompany from "@/assets/local-company.png";
import interiorPainting from "@/assets/interior-painting.png";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Licensed & Bonded",
      description: "CA License #1121976. Fully bonded for your protection.",
      color: "bg-primary",
    },
    {
      icon: Award,
      title: "BuildZoom Score 92",
      description: "Proven track record of quality and compliance.",
      color: "bg-secondary",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Experienced painters dedicated to quality work.",
      color: "bg-accent",
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "Commitment to delivering excellent results.",
      color: "bg-primary",
    },
  ];

  const credentials = [
    "Licensed C-33 Painting Contractor",
    "Fully Bonded & Insured",
    "BuildZoom Score of 92",
    "39+ Years Combined Experience",
    "Local Los Angeles Business",
    "In-House Expert Painters Only",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Split Layout */}
        <section className="grid md:grid-cols-2 min-h-[500px]">
          <div className="relative">
            <img
              src={localCompany}
              alt="NVJ Painting team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-secondary flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg">
              <p className="text-primary font-semibold italic mb-2">About Us</p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Los Angeles' Trusted Painting Professionals
              </h1>
              <p className="text-white/80 mb-6">
                Licensed, bonded, and committed to excellence since 2001.
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

        {/* Our Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                  OUR STORY
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Professional Painting Services Since 2001
                </h2>
                <p className="text-text-medium mb-4 leading-relaxed">
                  NVJ Painting Inc operates as a licensed C-33 painting contractor in Los Angeles, California. We obtained our California contractor's license #1121976 and maintain bonding as required by state regulations.
                </p>
                <p className="text-text-medium mb-4 leading-relaxed">
                  Our BuildZoom score of 92 reflects the verifiable work history and compliance record we've established. We serve residential and commercial clients throughout Los Angeles, providing painting services with proper licensing and insurance.
                </p>
                <p className="text-text-medium mb-6 leading-relaxed">
                  We focus on delivering quality workmanship while maintaining the professional standards expected of licensed contractors in California.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-text-medium text-sm">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={interiorPainting}
                  alt="Professional painting work"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                WHAT WE STAND FOR
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
                Our Core Values
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-text-medium text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                  VERIFIED CREDENTIALS
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Licensed & Certified
                </h2>
                <div className="bg-muted rounded-lg p-8 mb-6">
                  <h3 className="font-heading text-xl font-bold mb-4">California Contractor License</h3>
                  <div className="space-y-2 text-lg">
                    <p><strong className="text-secondary">License Number:</strong> 1121976</p>
                    <p><strong className="text-secondary">Classification:</strong> C-33 (Painting and Decorating)</p>
                    <p><strong className="text-secondary">Status:</strong> Active and in good standing</p>
                    <p><strong className="text-secondary">Bonding:</strong> Fully bonded as required</p>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-8">
                  <h3 className="font-heading text-xl font-bold mb-4">BuildZoom Rating</h3>
                  <div className="space-y-2 text-lg">
                    <p><strong className="text-secondary">Score:</strong> 92 out of 100</p>
                    <p><strong className="text-secondary">Ranking:</strong> Top-tier contractor rating</p>
                    <p className="text-text-medium pt-2 text-sm">
                      BuildZoom analyzes license history, insurance status, and project completion data to provide an objective contractor rating.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={residentialHero}
                  alt="Quality painting project"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${residentialHero})` }}
        >
          <div className="absolute inset-0 bg-secondary/90" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <p className="text-primary font-semibold italic mb-2">Get Started Today</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Contact NVJ Painting Inc today for your free estimate. We're ready to bring your vision to life with professional painting services.
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

export default About;