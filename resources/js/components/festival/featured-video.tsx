import { useEffect, useRef } from 'react';

export function FeaturedVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current?.play().catch(() => {});
    }, []);

    return (
        <section className="relative w-full overflow-hidden">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 z-10"
                style={{ height: '22%', background: 'linear-gradient(to bottom, #120a08 0%, transparent 100%)' }}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
                style={{ height: '28%', background: 'linear-gradient(to top, #120a08 0%, transparent 100%)' }}
                aria-hidden="true"
            />

            <div className="relative mx-auto" style={{ maxWidth: '90%', aspectRatio: '16/9' }}>
                <video
                    ref={videoRef}
                    src="/images/benin/WhatsApp%20Video%202026-10-06%20at%2014.02.48.mp4"
                    className="h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                />
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
                <div className="absolute inset-x-0 bottom-4 z-20 px-5">
                    <span className="rounded-full border border-pagne-gold/30 bg-night/60 px-3 py-1 font-mono text-[10px] tracking-widest text-pagne-gold/80 backdrop-blur-sm uppercase">
                        À la une
                    </span>
                </div>
            </div>
        </section>
    );
}
