import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Home, DollarSign, Phone, Mail, Clock } from "lucide-react"
import { PropertyCard } from "@/components/property-card"
import { AgentCard } from "@/components/agent-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=600&width=1920"
            alt="Modern home exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl">Find Your Dream Home</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the perfect property with our expert guidance and extensive listings.
          </p>

          <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by location, property type, or features"
                  className="pl-10 w-full"
                />
              </div>
              <Button size="lg" className="whitespace-nowrap">
                Search Properties
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Explore our handpicked selection of premium properties</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Properties
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              image="/placeholder.svg?height=300&width=400"
              title="Modern Lakefront Villa"
              location="123 Lakeview Dr, Seattle, WA"
              price="1,250,000"
              beds={4}
              baths={3}
              sqft={2800}
              featured={true}
            />
            <PropertyCard
              image="/placeholder.svg?height=300&width=400"
              title="Downtown Luxury Condo"
              location="456 Urban Ave, Seattle, WA"
              price="850,000"
              beds={2}
              baths={2}
              sqft={1500}
              featured={false}
            />
            <PropertyCard
              image="/placeholder.svg?height=300&width=400"
              title="Suburban Family Home"
              location="789 Maple St, Bellevue, WA"
              price="975,000"
              beds={5}
              baths={3.5}
              sqft={3200}
              featured={false}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Extensive Listings</h3>
              <p className="text-muted-foreground">
                Access thousands of properties across all neighborhoods and price ranges.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
              <p className="text-muted-foreground">We offer the most competitive commission rates in the industry.</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our team is available around the clock to address your questions and concerns.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">
                Our agents have deep knowledge of local markets and neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Agents */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Meet Our Agents</h2>
              <p className="text-muted-foreground">Expert professionals ready to help you find your perfect home</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Agents
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AgentCard
              image="/placeholder.svg?height=300&width=300"
              name="Sarah Johnson"
              title="Senior Real Estate Agent"
              phone="(555) 123-4567"
              email="sarah@example.com"
              listings={24}
            />
            <AgentCard
              image="/placeholder.svg?height=300&width=300"
              name="Michael Chen"
              title="Luxury Property Specialist"
              phone="(555) 987-6543"
              email="michael@example.com"
              listings={18}
            />
            <AgentCard
              image="/placeholder.svg?height=300&width=300"
              name="Jessica Rodriguez"
              title="Commercial Property Expert"
              phone="(555) 456-7890"
              email="jessica@example.com"
              listings={31}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with this agency was the best decision we made. They found us our dream home within our budget!"
              author="Robert & Emma Wilson"
              location="Seattle, WA"
              rating={5}
            />
            <TestimonialCard
              quote="The entire process was smooth and stress-free. Our agent was knowledgeable and responsive throughout."
              author="David Thompson"
              location="Bellevue, WA"
              rating={5}
            />
            <TestimonialCard
              quote="As first-time homebuyers, we had many questions. Our agent guided us every step of the way with patience."
              author="Jennifer & Mark Davis"
              location="Kirkland, WA"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg mb-8">
                Have questions about buying or selling a property? Our team is here to help you every step of the way.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Office Location</h3>
                    <p className="text-muted-foreground">1234 Real Estate Blvd, Seattle, WA 98101</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone Number</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email Address</h3>
                    <p className="text-muted-foreground">info@realestate.example.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

