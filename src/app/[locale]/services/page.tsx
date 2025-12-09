import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Wrench, Zap, Plug2, Cpu, LayoutGrid, Lightbulb, Radio, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

export default async function ServicesPage() {
    const t = await getTranslations('ServicesPage');

    const services = [
        {
            id: "repair",
            title: t('Services.repair.title'),
            description: t('Services.repair.description'),
            icon: Wrench,
        },
        {
            id: "installation",
            title: t('Services.installation.title'),
            description: t('Services.installation.description'),
            icon: Zap,
        },
        {
            id: "cabling",
            title: t('Services.cabling.title'),
            description: t('Services.cabling.description'),
            icon: Plug2,
        },
        {
            id: "automation",
            title: t('Services.automation.title'),
            description: t('Services.automation.description'),
            icon: Cpu,
        },
        {
            id: "panel",
            title: t('Services.panel.title'),
            description: t('Services.panel.description'),
            icon: LayoutGrid,
        },
        {
            id: "lighting",
            title: t('Services.lighting.title'),
            description: t('Services.lighting.description'),
            icon: Lightbulb,
        },
        {
            id: "communication",
            title: t('Services.communication.title'),
            description: t('Services.communication.description'),
            icon: Radio,
        },
        {
            id: "energy",
            title: t('Services.energy.title'),
            description: t('Services.energy.description'),
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
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">{t('Hero.title')}</h1>
                        <p className="text-xl text-gray-300">
                            {t('Hero.subtitle')}
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
                                        <Button variant="outline" className="w-full">{t('Common.requestQuote')}</Button>
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
                            <h2 className="text-3xl font-bold font-heading mb-6">{t('Feature.title')}</h2>
                            <p className="text-muted-foreground mb-6">
                                {t('Feature.description')}
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-muted-foreground">
                                    <span className="w-2 h-2 bg-marine-blue rounded-full mr-3" />
                                    {t('Feature.list.switchboards')}
                                </li>
                                <li className="flex items-center text-muted-foreground">
                                    <span className="w-2 h-2 bg-marine-blue rounded-full mr-3" />
                                    {t('Feature.list.mcc')}
                                </li>
                                <li className="flex items-center text-muted-foreground">
                                    <span className="w-2 h-2 bg-marine-blue rounded-full mr-3" />
                                    {t('Feature.list.distribution')}
                                </li>
                            </ul>
                            <Link href="/contact">
                                <Button className="bg-marine-blue hover:bg-marine-blue/90 text-white">
                                    {t('Feature.cta')}
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
