import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Phone, Shield, Award, Star, PaintBucket, Paintbrush, Home, Building, Warehouse, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/hero-painting.jpg";
import qualityImage from "@/assets/quality-work.jpg";
import consultationImage from "@/assets/consultation.jpg";
import googleIcon from "@/assets/google-icon.png";
import googleGIcon from "@/assets/google-g-icon.png";
import starIcon from "@/assets/star-icon.png";
import verifiedIcon from "@/assets/verified-icon.png";

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
      name: "A Kee To Paradise LLC",
      date: "2025-04-08",
      text: "Justin and his crew freshened our exterior and painted the pool deck. The professionalism and expertise",
      avatar: null,
      avatarColor: "bg-emerald-600",
      avatarImage: true
    },
    {
      name: "Dennis Sullivan",
      date: "2025-03-24",
      text: "The team did a fantastic job with the drywall repair at our home. Very good quality, customer service",
      avatar: "D",
      avatarColor: "bg-orange-600",
      avatarImage: false
    },
    {
      name: "May Then",
      date: "2025-03-24",
      text: "Job completed in a timely manner as promised. Excellent results. Professional polite workers with",
      avatar: "M",
      avatarColor: "bg-purple-600",
      avatarImage: false
    },
    {
      name: "Chris Cap",
      date: "2025-03-22",
      text: "Highly recommend Vegas painting. Front the first call to the last conversation with Justin it was such",
      avatar: "B",
      avatarColor: "bg-amber-700",
      avatarImage: false
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
          
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-center text-center py-20">
            {/* White Tagline */}
            <p className="text-white font-bold text-xl md:text-2xl italic mb-4">
              Affordable, friendly and ready to paint!
            </p>
            
            {/* Main Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-white leading-tight max-w-5xl">
              Los Angeles' Award-Winning<br />
              Painting & Coating<br />
              Team
            </h1>
            
            {/* Google Rating */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white font-semibold">4.9 Stars</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/80">1249 reviews on</span>
              <img src={googleIcon} alt="Google" className="h-6 object-contain" />
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
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 font-bold uppercase tracking-wide bg-transparent">
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
              <p className="text-green-600 font-semibold uppercase tracking-wider text-sm mb-2 italic">OUR REVIEWS</p>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
                TRUSTED BY HOMEOWNERS OF PORT ST LUCIE
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-gray-200 shadow-sm rounded-lg">
                  <CardContent className="p-5">
                    {/* Header with avatar, name, date, and Google icon */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-semibold`}>
                          {testimonial.avatarImage ? (
                            <img src={qualityImage} alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
                          ) : (
                            testimonial.avatar
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-gray-400 text-xs">{testimonial.date}</p>
                        </div>
                      </div>
                      <img src={googleGIcon} alt="Google" className="h-5 w-5" />
                    </div>
                    
                    {/* Stars with verified badge */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={starIcon} alt="star" className="h-4 w-4" />
                      ))}
                      <img src={verifiedIcon} alt="verified" className="h-4 w-4 ml-1" />
                    </div>
                    
                    {/* Review text */}
                    <p className="text-text-medium text-sm leading-relaxed mb-3">
                      {testimonial.text}
                    </p>
                    
                    {/* Read more link */}
                    <button className="text-gray-500 text-sm hover:text-gray-700">
                      Read more
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-end gap-2 mt-8">
              <button className="w-10 h-10 border-2 border-green-600 rounded flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 border-2 border-green-600 rounded flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
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

        {/* CTA / Consultation Section */}
        <section 
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${consultationImage})` }}
        >
          {/* Blue overlay */}
          <div className="absolute inset-0 bg-secondary/80" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left: Form Card */}
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
                <h2 className="text-secondary font-heading text-2xl md:text-3xl font-medium mb-8 text-center">
                  Schedule a Consultation
                </h2>
                
                <form className="space-y-5">
                  {/* Name */}
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Name" className="border border-gray-300 bg-white" />
                  </div>
                  
                  {/* Email and Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-2 block">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input placeholder="Email" type="email" className="border border-gray-300 bg-white" />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input placeholder="Phone Number" type="tel" className="border border-gray-300 bg-white" />
                    </div>
                  </div>
                  
                  {/* City, State */}
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      City, State <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="City, State" className="border border-gray-300 bg-white" />
                  </div>
                  
                  {/* Interested in checkboxes */}
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-3 block">
                      Interested in...
                    </Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="apartment" />
                        <label htmlFor="apartment" className="text-sm text-foreground cursor-pointer">
                          Apartment painting
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interior" />
                        <label htmlFor="interior" className="text-sm text-foreground cursor-pointer">
                          House painting (interior)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exterior" />
                        <label htmlFor="exterior" className="text-sm text-foreground cursor-pointer">
                          Exterior painting
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="other" />
                        <label htmlFor="other" className="text-sm text-foreground cursor-pointer">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white py-3"
                  >
                    Send
                  </Button>
                </form>
              </div>
              
              {/* Right: Contact Info */}
              <div className="text-white">
                <p className="font-semibold text-sm mb-4">Contact NVJ Painting Inc.</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight italic">
                  Leave a Lasting<br />
                  First Impression
                </h2>
                <p className="text-white/90 leading-relaxed mb-8 max-w-md">
                  No matter whether you're just moving into a new home and want to personalize it, or are starting to see cracks in your home's current paint jobs, NVJ Painting, Inc. is proud to offer advice on color schemes and applications.
                </p>
                
                <div className="space-y-4">
                  <a href="tel:3235921043" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                    <Phone className="h-5 w-5" />
                    <span>(323) 592-1043</span>
                  </a>
                  <div className="flex items-center gap-3 text-white">
                    <MapPin className="h-5 w-5" />
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright footer */}
          <div className="absolute bottom-0 left-0 right-0 py-4 text-white/60 text-sm">
            <div className="container mx-auto px-4">
              © NVJ Painting, Inc. All Rights Reserved. 2024.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
