import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, Zap, Cpu, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroCarousel } from "@/components/hero-carousel";

export default function Home() {
  const services = [
    {
      title: "Fault Detection & Repair",
      description: "Expert diagnosis and repair of marine electrical systems to minimize downtime.",
      icon: Wrench,
      href: "/services#repair",
    },
    {
      title: "Electrical System Installation",
      description: "Complete installation services for new builds and retrofits, ensuring compliance.",
      icon: Zap,
      href: "/services#installation",
    },
    {
      title: "Automation & Maintenance",
      description: "Advanced automation solutions and regular maintenance for optimal performance.",
      icon: Cpu,
      href: "/services#automation",
    },
    {
      title: "Communication Systems",
      description: "Reliable marine communication and network infrastructure setup.",
      icon: Radio,
      href: "/services#communication",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroCarousel
            images={[
              "/images/hero-ship.png",
              "/images/hero-ship-2.png"
            ]}
          />
        </div>

        <div className="container mx-auto relative z-10 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Empowering Your Marine Electrical & Electronic Systems
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Providing reliable, efficient, and innovative solutions for ships worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            <Link href="/contact">
              <Button size="lg" className="bg-marine-blue hover:bg-marine-blue/90 text-white text-lg px-8">
                Get a Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Side */}
            <div className="relative animate-in fade-in slide-in-from-left duration-1000 delay-200">
              <div className="relative rounded-2xl rounded-tr-[100px] overflow-hidden shadow-2xl h-[500px]">
                <Image
                  src="/images/about-engineer.png"
                  alt="Marine Engineer Inspecting Ship"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-marine-blue rounded-full opacity-20 blur-3xl" />
            </div>

            {/* Content Side */}
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right duration-1000 delay-300">
              <div>
                <span className="bg-marine-blue/10 text-marine-blue font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">
                  About Us
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 leading-tight">
                Our company started <br />
                <span className="text-marine-blue">production and sales</span> in the electrical industry in 1977.
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Our group has played an important role in the sector for more than 30 years in the execution of the electrical projects of the ships and the sale of the brands we have dealerships.
              </p>

              <p className="text-slate-600">
                We provide design of ship electrical projects, provision of equipment for new ships, and production of main boards and control panels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                {[
                  "New Ship Construction",
                  "Repair, Maintenance",
                  "Transformation Ships"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-marine-blue text-white p-1 rounded mt-1 shrink-0">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-slate-100 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <div className="text-center">
              <div className="text-5xl font-bold text-marine-blue mb-2 font-heading">1977</div>
              <div className="text-slate-600 font-medium">Established Year</div>
            </div>
            <div className="text-center md:border-l md:border-r border-slate-200">
              <div className="text-5xl font-bold text-marine-blue mb-2 font-heading">ISO</div>
              <div className="text-xl font-bold text-marine-blue mb-2 font-heading">9001 Certified</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-marine-blue mb-2 font-heading">+2000</div>
              <div className="text-slate-600 font-medium">Completed Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical and electronic solutions tailored for the marine industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-marine-blue" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link href={service.href}>
                    <Button variant="link" className="text-marine-blue hover:text-marine-blue/80 p-0 h-auto font-semibold">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground">
              We’ve worked with the best in the industry to deliver excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                {/* Placeholder for Client Logo */}
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                  Logo
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8 italic">
                "Vimarine provided exceptional service during our dry dock period. Their team was professional, efficient, and solved complex electrical issues that others couldn't."
              </blockquote>
              <div className="font-semibold text-marine-blue">Capt. James Anderson</div>
              <div className="text-sm text-muted-foreground">Master, MV Ocean Giant</div>
            </div>
          </div>
        </div>
      </section>

      {/* News and Blogs Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
              News and Blogs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Latest updates, industry insights, and success stories from Vimarine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "The Future of Marine Automation: Trends to Watch in 2025",
                excerpt: "Explore the latest advancements in autonomous shipping, AI-driven diagnostics, and remote monitoring systems.",
                image: "/images/blog-tech.png",
                category: "Technology",
                date: "Oct 15, 2025",
              },
              {
                id: 2,
                title: "Navigating the Green Transition: Electrical Solutions",
                excerpt: "How retrofitting vessels with energy-efficient electrical systems and hybrid power solutions can help meet new environmental regulations.",
                image: "/images/blog-green.png",
                category: "Sustainability",
                date: "Sep 28, 2025",
              },
              {
                id: 3,
                title: "Essential Electrical Maintenance Checklist for Dry Docking",
                excerpt: "A comprehensive guide to preparing your vessel's electrical systems for dry dock inspections and maintenance.",
                image: "/images/blog-safety.png",
                category: "Maintenance",
                date: "Sep 10, 2025",
              },
            ].map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-marine-blue shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold font-heading mb-3 line-clamp-2 group-hover:text-marine-blue transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="link" className="text-marine-blue p-0 h-auto font-semibold px-0 hover:no-underline group/btn">
                      Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" size="lg" className="border-marine-blue text-marine-blue hover:bg-marine-blue hover:text-white">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
