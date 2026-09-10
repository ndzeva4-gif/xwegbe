import { useEffect, useState } from 'react';

type Slide = {
    alt: string;
    src?: string;
    accent: string;
};

const SLIDES: Slide[] = [
    {
        alt: 'Pagne et tradition sur le lac',
        accent: 'from-pagne-orange/25',
        src: '/images/benin/hero-lac.jpg',
    },
    {
        alt: 'Danseurs traditionnels en costume',
        accent: 'from-pagne-magenta/25',
        src: '/images/benin/hero-danseurs.jpg',
    },
    {
        alt: 'Foule en fête',
        accent: 'from-pagne-gold/25',
        src: '/images/benin/hero-foule.jpg',
    },
];

export function HeroSlideshow({ slides = SLIDES }: { slides?: Slide[] }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        const id = setInterval(() => {
            setIndex((current) => (current + 1) % slides.length);
        }, 5000);
        return () => clearInterval(id);
    }, [slides.length]);

    return (
        <div className="absolute inset-0 overflow-hidden bg-night">
            {slides.map((slide, i) => (
                <div
                    key={slide.alt}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        i === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {slide.src ? (
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div
                            className={`flex h-full w-full items-end justify-start bg-gradient-to-br ${slide.accent} via-night to-night p-6`}
                        >
                            <span className="rounded-full border border-cream/15 bg-night/60 px-3 py-1 text-xs text-cream/40">
                                Photo à venir — {slide.alt}
                            </span>
                        </div>
                    )}
                </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-night/50 via-night/75 to-night" />
        </div>
    );
}
