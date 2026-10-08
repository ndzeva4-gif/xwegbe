import { useEffect, useState } from 'react';
import { BeadedArc } from '@/components/festival/beaded-arc';
import { GateSvg } from '@/components/festival/gate-svg';

const WORD = 'Xwégbé';
const LETTER_COLORS = ['text-pagne-orange', 'text-pagne-magenta', 'text-pagne-gold'];
const STORAGE_KEY = 'xwegbe-intro-seen';

const PAGNE_URL = "url('/images/flat-african-pattern-design/6925962.jpg')";

export function IntroSplash() {
    const [mounted,   setMounted]   = useState(false);
    const [gateOpen,  setGateOpen]  = useState(false);
    const [showText,  setShowText]  = useState(false);
    const [fadingOut, setFadingOut] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        requestAnimationFrame(() => window.scrollTo(0, 0));

        let alreadySeen = false;
        try { alreadySeen = sessionStorage.getItem(STORAGE_KEY) === '1'; }
        catch { alreadySeen = false; }

        if (alreadySeen) return;

        setMounted(true);

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion) {
            setGateOpen(true);
            setShowText(true);
            const fadeTimer  = setTimeout(() => setFadingOut(true), 2600);
            const killTimer  = setTimeout(() => {
                setMounted(false);
                try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch {}
            }, 3200);
            return () => { clearTimeout(fadeTimer); clearTimeout(killTimer); };
        }

        /* ---- Séquence animée ---- */
        // 0–700ms  : porte visible, immobile
        // 700ms    : portes s'ouvrent (transition 800ms)
        // 1500ms   : texte apparaît
        // 3600ms   : fade out
        // 4200ms   : démonté

        const openTimer  = setTimeout(() => setGateOpen(true),  700);
        const textTimer  = setTimeout(() => setShowText(true),  1500);
        const fadeTimer  = setTimeout(() => setFadingOut(true), 3600);
        const killTimer  = setTimeout(() => {
            setMounted(false);
            try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch {}
        }, 4200);

        return () => {
            clearTimeout(openTimer);
            clearTimeout(textTimer);
            clearTimeout(fadeTimer);
            clearTimeout(killTimer);
        };
    }, []);

    if (!mounted) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-[600ms] ease-out ${
                fadingOut ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
            style={{
                backgroundImage: PAGNE_URL,
                backgroundSize: '200px auto',
                backgroundRepeat: 'repeat',
            }}
            aria-hidden="true"
        >
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-night/90" />

            {/* Arcs décoratifs */}
            <BeadedArc className="pointer-events-none absolute top-0 right-0 w-[240px] opacity-40 sm:w-[320px]" />
            <BeadedArc className="pointer-events-none absolute bottom-0 left-0 w-[240px] rotate-180 opacity-40 sm:w-[320px]" />

            <div className="relative flex flex-col items-center text-center">

                {/* =================== PORTE =================== */}
                {/* Container : overflow visible pour que les panneaux sortent */}
                <div className="relative mb-10" style={{ width: 100, height: 133 }}>

                    {/* Panneau GAUCHE — glisse à gauche quand gateOpen */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            clipPath: 'inset(0 50% 0 0)',
                            transform: gateOpen ? 'translateX(-120px)' : 'translateX(0)',
                            transition: 'transform 800ms cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        <GateSvg size={100} />
                    </div>

                    {/* Panneau DROIT — glisse à droite quand gateOpen */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            clipPath: 'inset(0 0 0 50%)',
                            transform: gateOpen ? 'translateX(120px)' : 'translateX(0)',
                            transition: 'transform 800ms cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        <GateSvg size={100} />
                    </div>
                </div>

                {/* =================== TEXTE =================== */}
                <div
                    style={{
                        opacity:    showText ? 1 : 0,
                        transform:  showText ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'opacity 600ms ease-out, transform 600ms ease-out',
                    }}
                >
                    <span className="block font-sans text-sm tracking-[0.3em] text-cream/60 uppercase">
                        Bienvenue sur
                    </span>

                    <h1 className="mt-3 flex font-display text-5xl font-extrabold uppercase sm:text-7xl">
                        {WORD.split('').map((letter, i) => (
                            <span
                                key={i}
                                className={`inline-block ${LETTER_COLORS[i % LETTER_COLORS.length]}`}
                                style={{
                                    opacity: 0,
                                    animation: showText
                                        ? `intro-letter 500ms ease-out ${i * 80}ms forwards`
                                        : undefined,
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </h1>

                    <span
                        className="mt-4 block font-sans text-sm tracking-[0.3em] text-cream/60 uppercase"
                        style={{
                            opacity: 0,
                            animation: showText
                                ? `intro-fade 500ms ease-out ${WORD.length * 80 + 200}ms forwards`
                                : undefined,
                        }}
                    >
                        Le Bénin d'aujourd'hui
                    </span>
                </div>
            </div>

            <style>{`
                @keyframes intro-fade {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes intro-letter {
                    from { opacity: 0; transform: translateY(14px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
