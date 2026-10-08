const FEATURED_VIDEO =
    '/images/benin/WhatsApp%20Video%202026-10-06%20at%2014.02.48.mp4';

export function FeaturedReel({
    headingLevel = 'h1',
}: {
    headingLevel?: 'h1' | 'h2';
}) {
    const Heading = headingLevel;

    return (
        <section
            id="a-la-une"
            aria-labelledby="featured-reel-heading"
            className="relative isolate overflow-hidden"
            style={{ minHeight: '72vh' }}
        >
            {/* Vidéo fond */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
            >
                <source src={FEATURED_VIDEO} type="video/mp4" />
            </video>

            {/* Calque sombre */}
            <div className="absolute inset-0 bg-night/65" aria-hidden="true" />

            {/* Dégradé bas */}
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
                style={{ background: 'linear-gradient(to top, var(--color-night), transparent)' }}
                aria-hidden="true"
            />

            {/* Titre centré */}
            <div className="relative z-10 flex min-h-[72vh] flex-col items-center justify-center px-6 py-24 text-center">
                <p className="font-mono text-xs tracking-widest text-pagne-gold uppercase">
                    À LA UNE · BÉNIN
                </p>
                <Heading
                    id="featured-reel-heading"
                    className="mt-6 font-display text-4xl leading-[1.08] font-extrabold uppercase text-cream sm:text-5xl lg:text-6xl"
                >
                    <span className="block text-pagne-orange">Vaudou,</span>
                    <span className="block">islam et</span>
                    <span className="block text-pagne-magenta">christianisme</span>
                </Heading>
                <p className="mt-8 font-display text-xl font-semibold text-pagne-gold sm:text-2xl">
                    Bienvenue au Bénin.
                </p>
                <p className="mt-3 font-mono text-xs text-cream/40">
                    VIDÉO FOURNIE PAR XWÉGBÉ
                </p>
            </div>
        </section>
    );
}
