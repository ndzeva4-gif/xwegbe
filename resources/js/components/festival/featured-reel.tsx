import { Play } from 'lucide-react';
import { BeadedArc } from '@/components/festival/beaded-arc';

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
            className="relative isolate overflow-hidden border-b border-cream/10 bg-night px-5 py-10 text-cream sm:px-8 sm:py-14 lg:px-10 lg:py-16"
        >
            <div
                aria-hidden="true"
                className="pattern-weave absolute inset-x-0 top-0 h-2"
            />
            <BeadedArc className="pointer-events-none absolute -top-12 -right-24 hidden w-[360px] opacity-45 lg:block" />

            <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-pagne-gold">
                            À LA UNE
                        </span>
                        <span
                            aria-hidden="true"
                            className="h-px w-10 bg-pagne-red"
                        />
                        <span className="font-mono text-xs text-cream/55">
                            BÉNIN
                        </span>
                    </div>

                    <Heading
                        id="featured-reel-heading"
                        className="mt-6 font-display text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-6xl"
                    >
                        <span className="block text-pagne-orange">Vaudou,</span>
                        <span className="block">islam et</span>
                        <span className="block text-pagne-magenta">
                            christianisme
                        </span>
                    </Heading>
                    <p className="mt-5 font-display text-xl font-semibold text-pagne-gold sm:text-2xl">
                        Bienvenue au Bénin.
                    </p>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">
                        Une vidéo choisie pour mettre le Bénin à la une.
                    </p>

                    <p className="mt-8 font-mono text-xs text-cream/45">
                        VIDÉO FOURNIE PAR XWÉGBÉ
                    </p>
                </div>

                <div className="relative mx-auto w-full">
                    <div
                        aria-hidden="true"
                        className="pattern-weave absolute -inset-2 rotate-2 opacity-75"
                    />
                    <div className="relative overflow-hidden border border-pagne-gold/40 bg-night p-1 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                        <video
                            className="pattern-weave block aspect-[9/16] w-full bg-night object-contain lg:aspect-video"
                            controls
                            playsInline
                            preload="metadata"
                            aria-label="Vidéo à la une : Vaudou, islam et christianisme au Bénin"
                        >
                            <source src={FEATURED_VIDEO} type="video/mp4" />
                            Votre navigateur ne peut pas lire cette vidéo.
                        </video>
                    </div>
                    <p className="mt-3 text-center font-mono text-[11px] text-cream/50">
                        <Play
                            aria-hidden="true"
                            className="mr-1 inline size-3 text-pagne-magenta"
                        />
                        Lecture directement sur Xwégbé
                    </p>
                </div>
            </div>
        </section>
    );
}
