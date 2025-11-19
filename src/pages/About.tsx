import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import consultationImage from "@/assets/consultation.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
              About <span className="text-primary">NVJ Painting Inc</span>
            </h1>
            <p className="text-lg text-text-medium text-center max-w-3xl mx-auto">
              Licensed painting contractor serving Los Angeles with professional service and proven credentials
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Professional Painting Services Since Licensing
                </h2>
                <p className="text-lg text-text-medium mb-4">
                  NVJ Painting Inc operates as a licensed C-33 painting contractor in Los Angeles, California. We obtained our California contractor's license #1121976 and maintain bonding as required by state regulations.
                </p>
                <p className="text-lg text-text-medium mb-4">
                  Our BuildZoom score of 92 reflects the verifiable work history and compliance record we've established. We serve residential and commercial clients throughout Los Angeles, providing painting services with proper licensing and insurance.
                </p>
                <p className="text-lg text-text-medium">
                  We focus on delivering quality workmanship while maintaining the professional standards expected of licensed contractors in California.
                </p>
              </div>
              <div>
                <img 
                  src={consultationImage} 
                  alt="Professional consultation" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Licensed & Bonded</h3>
                  <p className="text-text-medium">
                    CA License #1121976. Fully bonded for your protection.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">BuildZoom Score 92</h3>
                  <p className="text-text-medium">
                    Proven track record of quality and compliance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Professional Team</h3>
                  <p className="text-text-medium">
                    Experienced painters dedicated to quality work.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Quality Focus</h3>
                  <p className="text-text-medium">
                    Commitment to delivering excellent results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Our <span className="text-primary">Credentials</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-background rounded-lg shadow-lg p-8 mb-6">
                <h3 className="font-heading text-2xl font-bold mb-4">California Contractor License</h3>
                <div className="space-y-2 text-lg">
                  <p><strong>License Number:</strong> 1121976</p>
                  <p><strong>Classification:</strong> C-33 (Painting and Decorating)</p>
                  <p><strong>Status:</strong> Active and in good standing</p>
                  <p><strong>Bonding:</strong> Fully bonded as required</p>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">BuildZoom Rating</h3>
                <div className="space-y-2 text-lg">
                  <p><strong>Score:</strong> 92 out of 100</p>
                  <p><strong>Ranking:</strong> Top-tier contractor rating</p>
                  <p className="text-text-medium">
                    BuildZoom analyzes license history, insurance status, and project completion data to provide an objective contractor rating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center">
              Serving <span className="text-primary">Los Angeles</span>
            </h2>
            <p className="text-lg text-text-medium text-center max-w-3xl mx-auto mb-12">
              Based at 332 West 76th Street, Los Angeles, CA 90003, we provide professional painting services throughout the Los Angeles area.
            </p>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  Get Your Free Estimate
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
