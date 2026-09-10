import { useEffect, useState } from 'react';
import { BeadedArc } from '@/components/festival/beaded-arc';

const WORD = 'Xwégbé';
const LETTER_COLORS = ['text-pagne-orange', 'text-pagne-magenta', 'text-pagne-gold'];
const STORAGE_KEY = 'xwegbe-intro-seen';

export function IntroSplash() {
    const [mounted, setMounted] = useState(false);
    const [fadingOut, setFadingOut] = useState(false);

    useEffect(() => {
        // Force the page to start at the very top (hero slideshow), even if the
        // URL carries a leftover #section hash from a previous visit.
        window.scrollTo(0, 0);
        requestAnimationFrame(() => window.scrollTo(0, 0));

        let alreadySeen = false;
        try {
            alreadySeen = sessionStorage.getItem(STORAGE_KEY) === '1';
        } catch {
            alreadySeen = false;
        }

        if (alreadySeen) return;

        setMounted(true);

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const holdDelay = reduceMotion ? 300 : 3400;
        const fadeDuration = 600;

        const fadeTimer = setTimeout(() => setFadingOut(true), holdDelay);
        const removeTimer = setTimeout(() => {
            setMounted(false);
            try {
                sessionStorage.setItem(STORAGE_KEY, '1');
            } catch {
                /* ignore */
            }
        }, holdDelay + fadeDuration);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!mounted) return null;

    return (
        <div
            className={`pattern-weave fixed inset-0 z-[100] flex items-center justify-center bg-night transition-opacity duration-[600ms] ease-out ${
                fadingOut ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
            aria-hidden="true"
        >
            <div className="absolute inset-0 bg-night/85" />

            <BeadedArc className="pointer-events-none absolute top-0 right-0 w-[240px] opacity-60 sm:w-[320px]" />
            <BeadedArc className="pointer-events-none absolute bottom-0 left-0 w-[240px] rotate-180 opacity-60 sm:w-[320px]" />

            <div className="relative flex flex-col items-center text-center">
                <span
                    className="font-sans text-sm tracking-[0.3em] text-cream/60 uppercase opacity-0"
                    style={{ animation: 'intro-fade 500ms ease-out 0ms forwards' }}
                >
                    Bienvenue sur
                </span>

                <h1 className="mt-3 flex font-display text-5xl font-extrabold uppercase sm:text-7xl">
                    {WORD.split('').map((letter, i) => (
                        <span
                            key={i}
                            className={`inline-block opacity-0 ${LETTER_COLORS[i % LETTER_COLORS.length]}`}
                            style={{
                                animation: `intro-letter 500ms ease-out ${300 + i * 90}ms forwards`,
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>

                <span
                    className="mt-4 font-sans text-sm tracking-[0.3em] text-cream/60 uppercase opacity-0"
                    style={{
                        animation: `intro-fade 500ms ease-out ${300 + WORD.length * 90 + 200}ms forwards`,
                    }}
                >
                    Le Bénin d'aujourd'hui
                </span>
            </div>

            <style>{`
                @keyframes intro-fade {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes intro-letter {
                    from { opacity: 0; transform: translateY(16px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
