import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Calendar, Check, CheckSquare } from "lucide-react";
import residentialHero from "@/assets/residential-hero.png";
import interiorPainting from "@/assets/interior-painting.png";
import localCompany from "@/assets/local-company.png";
import googleGIcon from "@/assets/google-g-icon.png";
import starIcon from "@/assets/star-icon.png";
import verifiedIcon from "@/assets/verified-icon.png";
import qualityImage from "@/assets/quality-work.jpg";

const Residential = () => {
  const services = [
    "Walls and ceilings (any height)",
    "Doors and windows",
    "Mantels and bookshelves",
    "Baseboards and crown molding",
    "Chair rail molding",
    "Cabinets and wood shelves",
    "Custom color consultations",
  ];

  const communities = [
    "Altadena",
    "La Mirada",
    "Long Beach",
    "Lakewood",
    "Pasadena",
    "Fountain Valley",
    "Huntington Beach",
    "La Habra",
    "La Palma",
    "Los Alamitos",
  ];

  const testimonials = [
    {
      name: "Tori Durnian",
      date: "2 months ago",
      text: "Hi I wanted to share my experience about Laguna Painting. I reached out to a friend who is a home Contractor in Newport Beach...",
      avatar: null,
      avatarColor: "bg-rose-500",
    },
    {
      name: "Tyler Martina",
      date: "3 months ago",
      text: "They did a good job at a good price. Work was done quickly and everything looks great",
      avatar: "T",
      avatarColor: "bg-blue-500",
    },
    {
      name: "Jacqueline Whisnant",
      date: "3 months ago",
      text: "Laguna Painting and Omar are the best painters out there!!",
      avatar: "J",
      avatarColor: "bg-purple-500",
    },
    {
      name: "Jacqueline Aguilar",
      date: "6 months ago",
      text: "Each member of his team was courteous, efficient, and clearly took pride in their work. They were punctual, kept everything clean and organized, and the...",
      avatar: "J",
      avatarColor: "bg-teal-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Split Layout */}
        <section className="grid md:grid-cols-2 min-h-[500px]">
          <div className="relative">
            <img
              src={residentialHero}
              alt="Residential painting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-secondary flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Los Angeles Residential Painting & Construction Company
              </h1>
              <p className="text-white/80 mb-6">
                Our top-quality residential painting & coating work is top-notch.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-white">Follow us:</span>
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-secondary hover:bg-white/90">
                    <span className="text-sm font-bold">f</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-secondary hover:bg-white/90">
                    <span className="text-sm font-bold">in</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    Request a quote
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

        {/* Interior Painting Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src={interiorPainting}
                  alt="Interior painting project"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                  BEAUTIFY THE INTERIOR OF YOUR HOME OR OFFICE
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Interior Painting
                </h2>
                <p className="text-text-medium mb-4 leading-relaxed">
                  Beautify the interior of your home or office with help from Los Angeles' best painting contractor. At NVJ Painting, our experienced painters love to create a warm, welcoming space for people to live and work. We believe that choosing the right paint color combinations and delivering a neat and clean paint job can turn any drab room into an indoor oasis.
                </p>
                <p className="text-text-medium mb-6 leading-relaxed">
                  At NVJ Painting, we provide a full suite of painting services to customers in Los Angeles County and surrounding areas. Our highly trained painters pride themselves on their punctuality, work ethic, and cleanliness when completing a project.
                </p>
                <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
                  SERVICES WE OFFER
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-text-medium text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Painting Company Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                  BEAUTIFY THE INTERIOR OF YOUR HOME OR OFFICE
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Local Painting Company
                </h2>
                <p className="text-text-medium mb-6 leading-relaxed">
                  Hire a local painting company that you can trust: NVJ Painting! Since 2001, our boutique painting business has served the local community by delivering high-quality, long-lasting interior and exterior paint jobs for residential and commercial properties.
                </p>
                <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
                  COMPLETED PROJECTS FOR FOLLOWING COMMUNITIES
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {communities.map((community, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-text-medium text-sm">{community}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={localCompany}
                  alt="Los Angeles skyline"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Don't Just Take Our Word For It
              </h2>
              <p className="text-text-medium max-w-3xl mx-auto">
                Five-star painting reviews, our commitment to excellence shines through every project. Join the ranks of satisfied customers who trust Southern California's most recommended painting services. Read More Reviews.
              </p>
            </div>

            <p className="text-center text-text-medium font-medium mb-8">
              What customers are saying about us
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-border shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-semibold`}>
                        {testimonial.avatar || (
                          <img src={qualityImage} alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <img src={verifiedIcon} alt="verified" className="h-4 w-4" />
                        </div>
                        <p className="text-text-lighter text-xs">{testimonial.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={starIcon} alt="star" className="h-4 w-4" />
                      ))}
                    </div>
                    <p className="text-text-medium text-sm leading-relaxed">
                      {testimonial.text}
                    </p>
                    <button className="text-text-lighter text-sm hover:text-text-medium mt-2">
                      Read more
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Carousel dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-secondary' : 'bg-border'}`} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${residentialHero})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
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
                  {[
                    "Free Consultation",
                    "Detailed proposal",
                    "Upfront pricing",
                    "Exceptional communication"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 bg-secondary/80 rounded-lg px-4 py-3">
                      <CheckSquare className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {/* Rating Badges */}
                <div className="flex gap-4">
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
              </div>
              
              {/* Right Form */}
              <div className="bg-white rounded-xl p-8 shadow-2xl border-2 border-emerald-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold text-secondary">
                    Call or text us at <a href="tel:6612744297" className="text-primary hover:underline">(661) 274-4297</a> or fill out the form below
                  </p>
                </div>
                
                <form className="space-y-4">
                  <Input 
                    placeholder="Full Name" 
                    className="border-gray-200 focus:border-primary"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      placeholder="Email Address" 
                      type="email"
                      className="border-gray-200 focus:border-primary"
                    />
                    <Input 
                      placeholder="Mobile Number" 
                      type="tel"
                      className="border-gray-200 focus:border-primary"
                    />
                  </div>
                  <select className="w-full h-10 px-3 rounded-md border border-gray-200 text-gray-500 focus:border-primary focus:outline-none">
                    <option value="">-- Select A Service --</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="cabinet">Cabinet Refinishing</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="concrete">Concrete Coatings</option>
                  </select>
                  <Input 
                    placeholder="Your City (optional)" 
                    className="border-gray-200 focus:border-primary"
                  />
                  <Textarea 
                    placeholder="Tell us more about your project idea here"
                    className="border-gray-200 focus:border-primary min-h-[100px]"
                  />
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-6 text-lg">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Residential;
