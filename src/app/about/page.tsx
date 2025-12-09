import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
    const team = [
        {
            name: "Engin Yılmaz",
            role: "Chief Engineer",
            image: "/images/team-1.png",
            bio: "Over 20 years of experience in marine electrical systems and automation.",
        },
        {
            name: "Ayşe Demir",
            role: "Technical Manager",
            image: "/images/team-2.png",
            bio: "Expert in project management and marine safety regulations.",
        },
        {
            name: "Mehmet Kaya",
            role: "Senior Superintendent",
            image: "/images/team-3.png",
            bio: "Specialist in high-voltage systems and troubleshooting.",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Our Story</h1>
                        <p className="text-xl text-muted-foreground">
                            Founded with a passion for maritime excellence, Vimarine has grown into a trusted partner for shipowners and operators worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story & Vision Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/about-team.png"
                                alt="Vimarine Team at Work"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold font-heading mb-4">A Legacy of Excellence</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Since our inception, we have been dedicated to providing top-tier electrical and electronic services to the marine industry. Our team of certified engineers and technicians brings decades of combined experience to every project, ensuring that your vessels operate safely and efficiently.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold font-heading mb-4">Values & Vision</h2>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-marine-blue pl-4">
                                        <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                                        <p className="text-muted-foreground">
                                            To be a trusted name in marine electrical and electronic services, providing innovative solutions that ensure smooth operations for vessels worldwide.
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-gray-300 pl-4">
                                        <h3 className="font-semibold text-lg mb-2">Our Values</h3>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                            <li>Reliability & Integrity</li>
                                            <li>Innovation & Excellence</li>
                                            <li>Safety First</li>
                                            <li>Customer Satisfaction</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Meet Our Team</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The experts behind our success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                                <div className="relative h-80 w-full">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="text-center pt-6 pb-8">
                                    <h3 className="text-xl font-bold font-heading mb-1">{member.name}</h3>
                                    <div className="text-marine-blue font-medium mb-4">{member.role}</div>
                                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
