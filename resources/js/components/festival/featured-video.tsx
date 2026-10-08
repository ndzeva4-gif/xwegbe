import { useEffect, useRef, useState } from 'react';

export function FeaturedVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        v.play().catch(() => {});
    }, []);

    const toggle = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) { v.play(); setPlaying(true); }
        else           { v.pause(); setPlaying(false); }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        const v = videoRef.current;
        if (!v) return;
        v.muted = !v.muted;
        setMuted(v.muted);
    };

    return (
        <section className="relative w-full overflow-hidden">

            {/* Fondu haut — fondu depuis le fond de page */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 z-10"
                style={{ height: '22%', background: 'linear-gradient(to bottom, #120a08 0%, transparent 100%)' }}
                aria-hidden="true"
            />

            {/* Fondu bas */}
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
                style={{ height: '28%', background: 'linear-gradient(to top, #120a08 0%, transparent 100%)' }}
                aria-hidden="true"
            />

            {/* Vidéo */}
            <div
                className="group relative mx-auto cursor-pointer"
                style={{ maxWidth: '90%', aspectRatio: '16/9' }}
                onClick={toggle}
                role="button"
                aria-label={playing ? 'Mettre en pause' : 'Lire la vidéo'}
            >
                <video
                    ref={videoRef}
                    src="/images/benin/WhatsApp%20Video%202026-10-06%20at%2014.02.48.mp4"
                    className="h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                />

                {/* Ombres latérales pour fondre avec le fond */}
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-[8%]"
                    style={{ background: 'linear-gradient(to right, #120a08 0%, transparent 100%)' }}
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 w-[8%]"
                    style={{ background: 'linear-gradient(to left, #120a08 0%, transparent 100%)' }}
                    aria-hidden="true"
                />

                {/* Bouton play/pause */}
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                    }`}
                >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/30 bg-night/60 backdrop-blur-sm transition-transform duration-200 group-hover:scale-110 sm:h-20 sm:w-20">
                        {playing ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-cream" aria-hidden="true">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-cream" aria-hidden="true">
                                <path d="M8 5.14v14l11-7-11-7z" />
                            </svg>
                        )}
                    </div>
                </div>

                {/* Contrôles bas */}
                <div className="absolute inset-x-0 bottom-4 z-20 flex items-end justify-between px-5">
                    <span className="rounded-full border border-pagne-gold/30 bg-night/60 px-3 py-1 font-mono text-[10px] tracking-widest text-pagne-gold/80 backdrop-blur-sm uppercase">
                        À la une
                    </span>
                    <button
                        onClick={toggleMute}
                        className="flex items-center gap-2 rounded-full border border-cream/20 bg-night/60 px-3 py-1.5 text-xs text-cream/70 backdrop-blur-sm transition-colors hover:text-cream"
                        aria-label={muted ? 'Activer le son' : 'Couper le son'}
                    >
                        {muted ? <SoundOffIcon /> : <SoundOnIcon />}
                        <span>{muted ? 'Activer le son' : 'Son activé'}</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

function SoundOffIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
    );
}

function SoundOnIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
    );
}
