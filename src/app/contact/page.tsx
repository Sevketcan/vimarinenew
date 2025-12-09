"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Get in Touch</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Ready to upgrade your marine systems? Contact us for a quote or consultation.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <h2 className="text-2xl font-bold font-heading mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone (Optional)</Label>
                                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                                </div>

                                <Button className="w-full bg-marine-blue hover:bg-marine-blue/90 text-white text-lg py-6">
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="border-none shadow-sm">
                                    <CardContent className="pt-6 flex flex-col items-center text-center">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                            <Phone className="h-6 w-6 text-marine-blue" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Phone</h3>
                                        <p className="text-muted-foreground text-sm">+90 555 123 45 67</p>
                                        <p className="text-muted-foreground text-sm">+90 216 123 45 67</p>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-sm">
                                    <CardContent className="pt-6 flex flex-col items-center text-center">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                            <Mail className="h-6 w-6 text-marine-blue" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Email</h3>
                                        <p className="text-muted-foreground text-sm">info@vimarine.com</p>
                                        <p className="text-muted-foreground text-sm">support@vimarine.com</p>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-sm">
                                    <CardContent className="pt-6 flex flex-col items-center text-center">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                            <MapPin className="h-6 w-6 text-marine-blue" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Location</h3>
                                        <p className="text-muted-foreground text-sm">Tuzla Shipyard Zone</p>
                                        <p className="text-muted-foreground text-sm">Istanbul, Turkey</p>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-sm">
                                    <CardContent className="pt-6 flex flex-col items-center text-center">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                            <Clock className="h-6 w-6 text-marine-blue" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Working Hours</h3>
                                        <p className="text-muted-foreground text-sm">Mon - Fri: 08:00 - 18:00</p>
                                        <p className="text-muted-foreground text-sm">24/7 Emergency Support</p>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Map Image Placeholder */}
                            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-md bg-slate-200">
                                <Image
                                    src="/images/contact-map.png"
                                    alt="Location Map"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
