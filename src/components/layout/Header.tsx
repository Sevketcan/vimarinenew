"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Globe, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    const menuItems = [
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/references", label: "References" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Ship className="h-8 w-8 text-marine-blue" />
                    <span className="text-xl font-bold tracking-tight text-foreground font-heading">Vimarine</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {menuItems.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon">
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Language</span>
                        </Button>
                        <Link href="/contact">
                            <Button className="bg-marine-blue hover:bg-marine-blue/90 text-white">
                                Get a Quote
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col space-y-4 mt-8">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-lg font-medium hover:text-marine-blue transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-marine-blue hover:bg-marine-blue/90 text-white mt-4">
                                        Get a Quote
                                    </Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
