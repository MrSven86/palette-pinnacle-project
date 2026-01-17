import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, Mail, CheckSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import residentialHero from "@/assets/residential-hero.png";
import googleGIcon from "@/assets/google-g-icon.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Request Received!",
      description: "We'll contact you within 2-3 hours on business days.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
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

  const benefits = [
    "Free Consultation",
    "Detailed proposal",
    "Upfront pricing",
    "Exceptional communication"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Split Layout */}
        <section className="grid md:grid-cols-2 min-h-[400px]">
          <div className="relative">
            <img
              src={residentialHero}
              alt="Contact NVJ Painting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-secondary flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg">
              <p className="text-primary font-semibold italic mb-2">Get In Touch</p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Contact Us Today
              </h1>
              <p className="text-white/80 mb-6">
                Get your free estimate. Licensed C-33 contractor ready to serve Los Angeles.
              </p>
              <div className="flex items-center gap-4">
                <a href="tel:6612744297" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(661) 274-4297</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${residentialHero})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="text-white">
                <p className="text-primary font-semibold italic mb-2">Contact NVJ Painting</p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Ready to discuss your project?
                </h2>
                <p className="text-white/80 mb-8 text-lg">
                  Fill out the form and we'll get back to you within <strong>2-3 hours (on business days)</strong>.
                </p>
                
                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 bg-secondary/80 rounded-lg px-4 py-3">
                      <CheckSquare className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {/* Rating Badges */}
                <div className="flex gap-4 mb-8">
                  <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-3">
                    <div className="text-red-500 font-bold text-xl">★</div>
                    <div>
                      <p className="text-xs text-gray-500">Yelp Rating</p>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-800">4.6</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-red-500 text-sm">★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-400">Based on 19 reviews</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-3">
                    <img src={googleGIcon} alt="Google" className="w-6 h-6" />
                    <div>
                      <p className="text-xs text-gray-500">Google Rating</p>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-800">5.0</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-amber-400 text-sm">★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-400">Based on 7 reviews</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                    <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <a href="tel:6612744297" className="text-primary hover:underline">(661) 274-4297</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                    <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Address</h3>
                      <p className="text-white/80">332 West 76th Street, Los Angeles, CA 90003</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                    <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Response Time</h3>
                      <p className="text-white/80">Within 2-3 hours on business days</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Form */}
              <div className="bg-white rounded-xl p-8 shadow-2xl border-2 border-emerald-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold text-secondary">
                    Call or text us at <a href="tel:6612744297" className="text-primary hover:underline">(661) 274-4297</a>
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="mt-1 border-gray-200 focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
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
                        className="mt-1 border-gray-200 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Mobile Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(323) 555-0123"
                        className="mt-1 border-gray-200 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1 w-full h-10 px-3 rounded-md border border-gray-200 text-gray-500 focus:border-primary focus:outline-none bg-background"
                    >
                      <option value="">-- Select a service --</option>
                      <option value="interior">Interior Painting</option>
                      <option value="exterior">Exterior Painting</option>
                      <option value="cabinet">Cabinet Refinishing</option>
                      <option value="commercial">Commercial Painting</option>
                      <option value="concrete">Concrete Coatings</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="city">Your City (optional)</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Los Angeles"
                      className="mt-1 border-gray-200 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your project idea here"
                      className="mt-1 min-h-[100px] border-gray-200 focus:border-primary"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-6 text-lg"
                  >
                    Submit Request
                  </Button>
                </form>

                {/* Credentials Box */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-heading text-sm font-bold mb-2 text-secondary">Licensed & Bonded</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-medium">
                    <span><strong>CA License:</strong> #1121976</span>
                    <span><strong>Classification:</strong> C-33</span>
                    <span><strong>BuildZoom:</strong> 92</span>
                  </div>
                </div>
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