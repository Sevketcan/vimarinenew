"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface HeroCarouselProps {
    images: string[]
}

export function HeroCarousel({ images }: HeroCarouselProps) {
    // const plugin = React.useRef(
    //     Autoplay({ delay: 5000, stopOnInteraction: true })
    // )

    return (
        <Carousel
            // plugins={[plugin.current]}
            className="w-full h-full"
            opts={{
                loop: true,
            }}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="h-full ml-0">
                {images.map((src, index) => (
                    <CarouselItem key={index} className="relative h-full pl-0">
                        <Image
                            src={src}
                            alt={`Marine Background ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 z-20 bg-transparent border-white text-white hover:bg-white/20" />
            <CarouselNext className="right-4 z-20 bg-transparent border-white text-white hover:bg-white/20" />
        </Carousel>
    )
}
