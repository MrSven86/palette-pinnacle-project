import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Phone, Shield, Award, Star, PaintBucket, Paintbrush, Home, Building, Warehouse } from "lucide-react";
import heroImage from "@/assets/hero-painting.jpg";
import qualityImage from "@/assets/quality-work.jpg";
import consultationImage from "@/assets/consultation.jpg";

// Trust badge logos as text representations
const trustBadgesLogos = [
  { name: "Google", stars: 5 },
  { name: "facebook", stars: 5 },
  { name: "yelp", stars: 5 },
  { name: "HomeAdvisor", stars: 5 },
];

const Index = () => {
  const services = [
    {
      title: "Interior Painting",
      description: "Professional interior painting for homes and businesses. Transform your space with expert color consultation and flawless finishes.",
      icon: Home,
    },
    {
      title: "Exterior Painting",
      description: "Protect and beautify your property's exterior with weather-resistant paints and professional application techniques.",
      icon: Paintbrush,
    },
    {
      title: "Garage Floor Coatings",
      description: "Durable epoxy and polyurea floor coatings that resist stains, chemicals, and heavy traffic for years.",
      icon: Warehouse,
    },
    {
      title: "Cabinet Refinishing",
      description: "Give your kitchen or bathroom a fresh look with professional cabinet refinishing and restoration services.",
      icon: Building,
    }
  ];

  const testimonials = [
    {
      name: "Alex G.",
      text: "Hiring NVJ was the best choice we made. The attention to detail was incredible and they finished on time.",
      rating: 5
    },
    {
      name: "Home Dwellers",
      text: "Very easy to work with, clean work, quality results. Would recommend to anyone looking for a painter.",
      rating: 5
    },
    {
      name: "SoiBean C.",
      text: "I was very impressed with their professionalism. The team was punctual, respectful, and delivered fantastic results.",
      rating: 5
    }
  ];

  const trustBadges = [
    { icon: Shield, text: "Licensed & Bonded" },
    { icon: Award, text: "BuildZoom Score 92" },
    { icon: Star, text: "5-Star Reviews" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Centered Layout */}
        <section 
          className="relative min-h-[85vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Instagram icon on right */}
          <a href="#" className="absolute right-6 top-6 z-20 bg-white/20 hover:bg-white/30 p-2 rounded transition-colors">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
          </a>
          
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-center text-center py-20">
            {/* Red Tagline */}
            <p className="text-primary font-bold text-xl md:text-2xl italic mb-4">
              Affordable, friendly and ready to paint!
            </p>
            
            {/* Main Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-white leading-tight max-w-5xl">
              Los Angeles' Award-Winning<br />
              Painting & Coating<br />
              Team
            </h1>
            
            {/* Google Rating */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white font-semibold">4.9 Stars</span>
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-white">1249 reviews on</span>
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
            </div>
            
            {/* Description */}
            <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
              We're a local business with 39+ years of experience and a strong community focus.<br />
              Licensed, insured, in-house experts only!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-10 py-6 font-bold uppercase tracking-wide">
                  Contact Us
                </Button>
              </Link>
              <a href="tel:6612744297">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-6 font-bold uppercase tracking-wide bg-transparent">
                  Call
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Experts Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={qualityImage} 
                  alt="Quality painting work" 
                  className="rounded-lg shadow-lg w-full aspect-square object-cover"
                />
                <img 
                  src={consultationImage} 
                  alt="Consultation" 
                  className="rounded-lg shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
              
              {/* Content */}
              <div>
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">About Us</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  We are Painting <span className="text-primary">Experts</span> For Home or Business
                </h2>
                <p className="text-text-medium mb-8 leading-relaxed">
                  NVJ Painting is a licensed C-33 painting contractor serving the greater Los Angeles area. We specialize in both residential and commercial painting, delivering quality workmanship backed by our BuildZoom score of 92.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-1">Reliability & Service</h3>
                      <p className="text-text-medium text-sm">Consistent quality and dependable service on every project, residential or commercial</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-1">Warranty & Maintenance</h3>
                      <p className="text-text-medium text-sm">We stand behind our work with warranty coverage and ongoing maintenance support</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/services">
                  <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-heading text-lg font-bold">{service.title}</h3>
                  </div>
                  <p className="text-text-medium text-sm mb-4">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Satisfied Customers
              </h2>
              <p className="text-text-medium">What Our Customers Say</p>
            </div>

            {/* Google Rating */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 p-6 bg-muted rounded-lg">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="font-heading font-bold">
                  <span className="text-lg">Excellent on Google</span>
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <a 
                href="#" 
                className="text-primary font-medium text-sm hover:underline"
              >
                Write a Review
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{testimonial.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <div className="flex text-accent">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-text-medium text-sm leading-relaxed">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Read More
              </Button>
            </div>
          </div>
        </section>

        {/* Better Company Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">What Makes Us Different</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  A Better Painting Company
                </h2>
                <p className="text-text-medium mb-6 leading-relaxed">
                  At NVJ Painting, we understand that every client wants quality work at a great price. And that's exactly what we provide, whether you are located in Los Angeles, Glendale County, San Fernando, San Dimas, San Gabriel, or anywhere in between, we'll be there.
                </p>
                <p className="text-text-medium mb-8 leading-relaxed">
                  NVJ Painting provides realistic, professional color consultation to ensure that you know how your property's new paint job will look before we begin. We're dedicated to ensuring and providing top-notch service that exceeds your expectations.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Great Quality</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Great Value</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-secondary" />
                    <span className="font-medium">High Standards</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <img 
                  src={consultationImage} 
                  alt="Quality painting services" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="relative py-20 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-muted rounded-lg h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-text-medium mb-2">Los Angeles Area Map</p>
                  <p className="text-sm text-text-light">Serving LA, Glendale, San Fernando, San Dimas & more</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Coverage</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Service Areas
                </h2>
                <p className="text-text-medium mb-6 leading-relaxed">
                  We proudly serve the greater Los Angeles area including residential and commercial properties throughout the region.
                </p>
                <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-lg">
                  <Shield className="h-6 w-6" />
                  <div>
                    <p className="text-sm opacity-90">Licensed Since</p>
                    <p className="text-2xl font-bold">2001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                GET A FREE QUOTE
              </h2>
              <p className="text-text-medium max-w-2xl mx-auto">
                Ready to transform your space? Fill out the form below and we'll get back to you within 24 hours with a free, no-obligation estimate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="relative">
                <img 
                  src={qualityImage} 
                  alt="Professional painting team" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg">
                  <p className="text-2xl font-bold">20+ years</p>
                  <p className="text-sm opacity-90">of Experience!</p>
                </div>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Name" className="bg-muted border-0" />
                  <Input placeholder="Email" type="email" className="bg-muted border-0" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Phone" type="tel" className="bg-muted border-0" />
                  <Input placeholder="Address" className="bg-muted border-0" />
                </div>
                <Textarea placeholder="Message" rows={4} className="bg-muted border-0" />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  Get Your Free Quote →
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free, no-obligation estimate from Los Angeles' trusted painting contractor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:3235921043">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
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
