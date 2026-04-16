"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/gallery/Angel&Customer.jpg",
  "/gallery/EugeneRodentStation.jpg",
  "/gallery/Fumigation1.jpg",
  "/gallery/Fumigation2.jpg",
  "/gallery/HaroldWoodTreat.jpeg",
  "/gallery/Mayra.jpg",
  "/gallery/MayraBaitStation.jpg",
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="gallery" className="w-full overflow-hidden bg-zinc-500 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Our Recent <span className="text-[var(--color-accent)]">Work</span>
        </h2>
        <p className="mt-4 text-zinc-200 max-w-2xl mx-auto text-lg">
          Swipe through our gallery to see our completed pest control projects.
        </p>
      </div>

      {/* Container is 100vw conceptually via w-full */}
      <div className="relative w-full group">
        <div className="w-full" ref={emblaRef}>
          <div className="flex touch-pan-y cursor-grab active:cursor-grabbing ml-[-1rem]">
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4"
              >
                <div className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-zinc-900 shadow-xl backdrop-blur-sm transition-all hover:bg-white hover:scale-110 z-10 opacity-0 group-hover:opacity-100 md:flex hidden items-center justify-center focus:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-zinc-900 shadow-xl backdrop-blur-sm transition-all hover:bg-white hover:scale-110 z-10 opacity-0 group-hover:opacity-100 md:flex hidden items-center justify-center focus:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
