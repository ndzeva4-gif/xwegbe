import { useEffect, useRef, useState } from 'react';

export function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        video.play().catch(() => {});
    }, []);

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = !video.muted;
        setMuted(video.muted);
    };

    return (
        <div className="absolute inset-0 overflow-hidden bg-night">
            {/* Vidéo plein fond */}
            <video
                ref={videoRef}
                src="/images/benin/WhatsApp%20Video%202026-10-06%20at%2014.02.48.mp4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
            />

            {/* Dégradé pour la lisibilité du texte */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(10,9,8,0.15) 0%, rgba(10,9,8,0.30) 45%, rgba(10,9,8,0.88) 100%)',
                }}
            />

            {/* Badge vidéo — discret, coin supérieur droit */}
            <div
                className="absolute top-5 right-5 z-10 flex items-center gap-1.5 rounded-full border border-cream/15 bg-night/50 px-3 py-1 font-mono text-[10px] tracking-widest text-cream/50 backdrop-blur-sm uppercase"
                aria-hidden="true"
            >
                <span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-pagne-gold"
                    style={{ animation: 'pagne-pulse-soft 2s ease-in-out infinite' }}
                />
                Vidéo
            </div>

            {/* Bouton son — bas droit */}
            <button
                onClick={toggleMute}
                className="absolute bottom-6 right-6 z-20 flex items-center gap-2 rounded-full border border-cream/20 bg-night/60 px-4 py-2 text-xs text-cream/60 backdrop-blur-sm transition-all hover:border-pagne-gold/40 hover:text-cream"
                aria-label={muted ? 'Activer le son' : 'Couper le son'}
            >
                {muted ? (
                    <>
                        <SoundOffIcon />
                        <span>Son coupé</span>
                    </>
                ) : (
                    <>
                        <SoundOnIcon />
                        <span>Son activé</span>
                    </>
                )}
            </button>
        </div>
    );
}

function SoundOffIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
    );
}

function SoundOnIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
    );
}
