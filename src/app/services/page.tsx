import Image from "next/image";
import Link from "next/link";
import { Wrench, Zap, Plug2, Cpu, LayoutGrid, Lightbulb, Radio, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
    const services = [
        {
            id: "repair",
            title: "Fault Detection & Repair",
            description: "We utilize advanced diagnostic tools to identify and rectify electrical faults efficiently, minimizing vessel downtime.",
            icon: Wrench,
        },
        {
            id: "installation",
            title: "Electrical System Installation",
            description: "From main switchboards to distribution panels, we handle complete electrical system installations for new builds and retrofits.",
            icon: Zap,
        },
        {
            id: "cabling",
            title: "Cabling",
            description: "Professional marine cabling services, ensuring safety and compliance with international maritime standards.",
            icon: Plug2,
        },
        {
            id: "automation",
            title: "Automation & System Modifications",
            description: "Upgrading and modifying alarm monitoring systems, power management systems, and engine control systems.",
            icon: Cpu,
        },
        {
            id: "panel",
            title: "Panel Manufacturing & Installation",
            description: "Custom design and manufacturing of main switchboards, starter panels, and distribution boards.",
            icon: LayoutGrid,
        },
        {
            id: "lighting",
            title: "Lighting & Ex-proof Solutions",
            description: "Installation and maintenance of navigation lights, deck lighting, and explosion-proof equipment for hazardous areas.",
            icon: Lightbulb,
        },
        {
            id: "communication",
            title: "Communication Systems",
            description: "Setup and maintenance of internal communication systems, PA systems, and network infrastructure.",
            icon: Radio,
        },
        {
            id: "energy",
            title: "Energy Consumption Analysis",
            description: "Installation of kWh meters and analysis of power consumption to optimize energy efficiency.",
            icon: BarChart3,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/service-schematic.png"
                        alt="Schematic Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Services</h1>
                        <p className="text-xl text-gray-300">
                            Delivering comprehensive electrical and electronic solutions for the modern maritime industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.id} id={service.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                        <service.icon className="h-6 w-6 text-marine-blue" />
                                    </div>
                                    <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col flex-1">
                                    <p className="text-muted-foreground mb-6">{service.description}</p>
                                    <Link href="/contact" className="mt-auto">
                                        <Button variant="outline" className="w-full">Request Quote</Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold font-heading mb-6">Advanced Panel Manufacturing</h2>
                            <p className="text-muted-foreground mb-6">
                                Our state-of-the-art facility allows us to design and manufacture custom electrical panels that meet the specific needs of your vessel. We ensure all our products comply with class society regulations and international standards.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-muted-foreground">
                                    <span className="w-2 h-2 bg-marine-blue rounded-full mr-3" />
                                    Custom Main Switchboards
                                </li>
                                <li className="flex items-center text-muted-foreground">
                                    <span className="w-2 h-2 bg-marine-blue rounded-full mr-3" />
                                    Motor Control Centers (MCC)
                                </li>
                                <li className="flex items-center text-muted-foreground">
                                    <span className="w-2 h-2 bg-marine-blue rounded-full mr-3" />
                                    Distribution Boards
                                </li>
                            </ul>
                            <Link href="/contact">
                                <Button className="bg-marine-blue hover:bg-marine-blue/90 text-white">
                                    Contact Engineering Team
                                </Button>
                            </Link>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
                            <Image
                                src="/images/service-switchboard.png"
                                alt="Marine Switchboard"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
