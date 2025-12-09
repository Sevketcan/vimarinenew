import Link from "next/link";
import { Facebook, Instagram, Linkedin, Ship, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Ship className="h-6 w-6 text-marine-blue" />
                            <span className="text-lg font-bold font-heading">Vimarine</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Empowering Your Marine Electrical & Electronic Systems with reliable and innovative solutions.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 font-heading">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-muted-foreground hover:text-marine-blue transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-marine-blue transition-colors">Services</Link></li>
                            <li><Link href="/references" className="text-muted-foreground hover:text-marine-blue transition-colors">References</Link></li>
                            <li><Link href="/blog" className="text-muted-foreground hover:text-marine-blue transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 font-heading">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center space-x-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>Istanbul, Turkey</span>
                            </li>
                            <li className="flex items-center space-x-2 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>+90 555 123 45 67</span>
                            </li>
                            <li className="flex items-center space-x-2 text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <span>info@vimarine.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 font-heading">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-marine-blue transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-marine-blue transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-marine-blue transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                            Follow us on social media to stay updated with our latest projects!
                        </p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Vimarine. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
