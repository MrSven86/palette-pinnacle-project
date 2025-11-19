import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend
    toast({
      title: "Request Received!",
      description: "We'll contact you within 24 hours to schedule your free estimate.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-text-medium text-center max-w-3xl mx-auto">
              Get your free estimate today. Licensed C-33 contractor ready to serve Los Angeles.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Request Free Estimate</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(323) 555-0123"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select a service</option>
                      <option value="interior">Interior Painting</option>
                      <option value="exterior">Exterior Painting</option>
                      <option value="commercial-interior">Commercial Interior</option>
                      <option value="commercial-exterior">Commercial Exterior</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="mt-2 min-h-32"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                  >
                    Submit Request
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl font-bold mb-2">Phone</h3>
                          <a 
                            href="tel:3235921043" 
                            className="text-lg text-primary hover:text-primary-hover"
                          >
                            (323) 592-1043
                          </a>
                          <p className="text-sm text-text-medium mt-1">
                            Call for immediate assistance
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl font-bold mb-2">Address</h3>
                          <p className="text-text-medium">
                            332 West 76th Street<br />
                            Los Angeles, CA 90003
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl font-bold mb-2">Response Time</h3>
                          <p className="text-text-medium">
                            We respond to all inquiries within 24 hours during business days
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Credentials Box */}
                <Card className="bg-muted border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-4">Licensed & Bonded</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>CA License:</strong> #1121976</p>
                      <p><strong>Classification:</strong> C-33 Painting</p>
                      <p><strong>BuildZoom Score:</strong> 92</p>
                      <p className="text-text-medium pt-2">
                        Fully licensed, bonded, and committed to professional service
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
