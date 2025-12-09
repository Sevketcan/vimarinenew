import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, Zap, Cpu, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          <Image
            src="/images/hero-ship.png"
            alt="Modern Cargo Ship"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
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
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                Learn More
              </Button>
            </Link>
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
    </div>
  );
}
