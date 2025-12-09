import Image from "next/image";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ReferencesPage() {
    const partners = [
        { name: "Blue Wave Shipping", logo: "/images/logo-blue-wave.png" },
        { name: "Global Marine", logo: "/images/logo-global-marine.png" },
        // Using same logos for demo purposes to fill the grid
        { name: "Oceanic Transport", logo: "/images/logo-blue-wave.png" },
        { name: "Pacific Lines", logo: "/images/logo-global-marine.png" },
    ];

    const projects = [
        {
            title: "MV Atlantic Titan - Full Electrical Retrofit",
            description: "Complete overhaul of the main switchboard and power management system during dry dock in Singapore. The project was completed 2 days ahead of schedule.",
            image: "/images/project-retrofit.png",
        },
        {
            title: "LNG Carrier Automation Upgrade",
            description: "Upgraded the cargo monitoring and control system for a fleet of 3 LNG carriers, improving safety and operational efficiency.",
            image: "/images/service-schematic.png", // Reusing schematic image for variety
        },
    ];

    const testimonials = [
        {
            quote: "Vimarine's team demonstrated exceptional technical knowledge and professionalism. They are our go-to partner for all electrical matters.",
            author: "Capt. Michael Chen",
            role: "Fleet Manager, Blue Wave Shipping",
        },
        {
            quote: "Reliable, efficient, and cost-effective. We highly recommend Vimarine for their outstanding service and support.",
            author: "Sarah Johnson",
            role: "Technical Director, Global Marine",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Our Trusted Partners</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We are proud to work with leading shipping companies and shipyards around the globe.
                    </p>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {partners.map((partner, index) => (
                            <div key={index} className="flex justify-center items-center p-4">
                                <div className="relative w-32 h-32">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Featured Projects</h2>
                    <div className="space-y-12">
                        {projects.map((project, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
                                <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="w-full lg:w-1/2 space-y-4">
                                    <h3 className="text-2xl font-bold font-heading text-marine-blue">{project.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-marine-blue text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((item, index) => (
                            <Card key={index} className="bg-white/10 border-none text-white">
                                <CardContent className="pt-8">
                                    <Quote className="h-8 w-8 text-blue-300 mb-4 opacity-50" />
                                    <p className="text-lg mb-6 italic opacity-90">"{item.quote}"</p>
                                    <div>
                                        <div className="font-bold text-lg">{item.author}</div>
                                        <div className="text-blue-200 text-sm">{item.role}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
