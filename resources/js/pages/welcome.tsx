import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { BeadedArc } from '@/components/festival/beaded-arc';
import { BrandMark } from '@/components/festival/brand-mark';
import {
    CultureSection,
    EventsSection,
    FutureProjectsSection,
    ModernBeninSection,
    TouristSitesSection,
} from '@/components/festival/benin-sections';
import { FeaturedVideo } from '@/components/festival/featured-video';
import { HomeNav } from '@/components/festival/home-nav';
import { HeroSlideshow } from '@/components/festival/hero-slideshow';
import { IntroSplash } from '@/components/festival/intro-splash';
import { Reveal } from '@/components/festival/reveal';

/* Bande séparatrice pagne animée — remplace pattern-weave */
function PagneDivider() {
    return (
        <div
            style={{
                height: 22,
                backgroundImage: "url('/images/flat-african-pattern-design/6925962.jpg')",
                backgroundSize: '160px auto',
                backgroundRepeat: 'repeat',
                borderTop: '1px solid rgba(244,183,64,0.40)',
                borderBottom: '1px solid rgba(244,183,64,0.40)',
                animation: 'pagne-drift 14s linear infinite',
            }}
            aria-hidden="true"
        />
    );
}

/* Diamants SVG qui lévitent — motifs issus du tissu pagne */
function PagneOrnaments() {
    return (
        <>
            {/* Grand diamant or */}
            <div
                className="pointer-events-none absolute top-[14%] right-[7%] hidden lg:block"
                style={{ zIndex: 3, animation: 'pagne-float 8s ease-in-out infinite' }}
                aria-hidden="true"
            >
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path d="M21 0 L42 21 L21 42 L0 21 Z" fill="var(--color-pagne-gold)" opacity="0.50" />
                    <path d="M21 8 L34 21 L21 34 L8 21 Z" fill="none" stroke="var(--color-pagne-gold)" strokeWidth="1" opacity="0.40" />
                </svg>
            </div>

            {/* Diamant orange moyen */}
            <div
                className="pointer-events-none absolute top-[48%] right-[2%] hidden lg:block"
                style={{ zIndex: 3, animation: 'pagne-float 11s ease-in-out 2.4s infinite' }}
                aria-hidden="true"
            >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M13 0 L26 13 L13 26 L0 13 Z" fill="var(--color-pagne-orange)" opacity="0.40" />
                </svg>
            </div>

            {/* Petit diamant rouge */}
            <div
                className="pointer-events-none absolute bottom-[18%] right-[11%] hidden lg:block"
                style={{ zIndex: 3, animation: 'pagne-float 14s ease-in-out 1s infinite' }}
                aria-hidden="true"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 0 L16 8 L8 16 L0 8 Z" fill="var(--color-pagne-red)" opacity="0.35" />
                </svg>
            </div>

            {/* Nœud papillon — motif bowtie du pagne */}
            <div
                className="pointer-events-none absolute top-[30%] right-[16%] hidden lg:block"
                style={{ zIndex: 3, animation: 'pagne-float 10s ease-in-out 5s infinite' }}
                aria-hidden="true"
            >
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                    <path d="M0 0 L14 8 L0 16 Z"  fill="var(--color-pagne-magenta)" opacity="0.35" />
                    <path d="M28 0 L14 8 L28 16 Z" fill="var(--color-pagne-magenta)" opacity="0.35" />
                </svg>
            </div>
        </>
    );
}

export default function Welcome() {
    const { auth } = usePage().props;
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <Head title="Xwégbé — Le Bénin d'aujourd'hui" />

            <IntroSplash />

            {/* Bande latérale + overlay navigation */}
            <HomeNav auth={auth} open={navOpen} onClose={() => setNavOpen(false)} />

            <div className="min-h-screen bg-night pl-14 text-cream sm:pl-16">

                {/* Bande pagne animée — signature visuelle en haut de page */}
                <div
                    style={{
                        height: 5,
                        backgroundImage: "url('/images/flat-african-pattern-design/6925962.jpg')",
                        backgroundSize: '80px auto',
                        backgroundRepeat: 'repeat',
                        animation: 'pagne-drift 8s linear infinite',
                    }}
                    aria-hidden="true"
                />

                {/* Auth bar — top right */}
                <header className="sticky top-0 z-30 flex items-center justify-between border-b border-cream/10 bg-night/90 px-6 py-3 backdrop-blur-sm sm:px-10">
                    {/* Bouton Explorer — ouvre le menu overlay */}
                    <button
                        type="button"
                        onClick={() => setNavOpen(true)}
                        className="flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-sm text-cream transition-colors hover:border-cream/40"
                    >
                        <span className="flex h-3 w-4 flex-col justify-between" aria-hidden="true">
                            <span className="h-px w-full bg-current" />
                            <span className="h-px w-full bg-current" />
                            <span className="h-px w-full bg-current" />
                        </span>
                        Explorer
                    </button>
                    <nav className="flex items-center gap-3 text-sm sm:gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="rounded-full border border-cream/20 px-5 py-2 transition-colors hover:border-cream/40"
                            >
                                Tableau de bord
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="whitespace-nowrap text-cream/70 transition-colors hover:text-cream"
                                >
                                    Se connecter
                                </Link>
                                <Link
                                    href={register()}
                                    className="rounded-full border border-cream/20 px-5 py-2 transition-colors hover:border-cream/40"
                                >
                                    S'inscrire
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:px-10 sm:pt-24">
                    {/* Slideshow plein fond */}
                    <HeroSlideshow />

                    {/* Panneau pagne animé — côté droit desktop, au-dessus du slideshow */}
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block"
                        style={{
                            clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)',
                            zIndex: 2,
                        }}
                        aria-hidden="true"
                    >
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: "url('/images/flat-african-pattern-design/6925962.jpg')",
                                backgroundSize: '220px auto',
                                backgroundRepeat: 'repeat',
                                animation: 'pagne-drift 22s linear infinite, pagne-pulse-soft 9s ease-in-out infinite',
                            }}
                        />
                        <div
                            className="absolute inset-0"
                            style={{ background: 'linear-gradient(to right, var(--color-night) 0%, transparent 40%)' }}
                        />
                    </div>

                    {/* Ornements géométriques flottants */}
                    <PagneOrnaments />

                    {/* Arc décoratif */}
                    <Reveal delay={200} className="pointer-events-none absolute top-0 right-0 z-[5] w-[280px] sm:w-[380px] lg:w-[440px]">
                        <BeadedArc className="w-full opacity-80" />
                    </Reveal>

                    {/* Texte */}
                    <div className="relative z-10 mx-auto max-w-6xl">
                        <Reveal delay={0}>
                            <p className="font-sans text-sm tracking-[0.3em] text-pagne-gold uppercase">
                                Culture · Patrimoine · Modernité
                            </p>
                        </Reveal>

                        <Reveal delay={120}>
                            <h1 className="mt-4 font-display text-[clamp(3.25rem,13vw,9rem)] leading-[0.88] font-extrabold uppercase">
                                <span className="block bg-gradient-to-r from-pagne-orange via-pagne-magenta to-pagne-gold bg-clip-text text-transparent">
                                    Xwé
                                </span>
                                <span className="block">Gbé</span>
                            </h1>
                        </Reveal>

                        <Reveal delay={260}>
                            <p className="mt-6 max-w-xl text-lg text-cream/70">
                                Le Bénin d'aujourd'hui, dans tout son éclat. Vodun et
                                modernité, palais royaux et cités d'innovation, scènes
                                urbaines et villages lacustres — un seul pays, mille
                                visages.
                            </p>
                        </Reveal>

                        <Reveal delay={340}>
                            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-cream/60 uppercase">
                                <span>Cotonou</span>
                                <span>Ouidah</span>
                                <span>Abomey</span>
                                <span>Ganvié</span>
                            </div>
                        </Reveal>

                        <Reveal delay={420}>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <a
                                    href="#evenements"
                                    className="rounded-full bg-gradient-to-r from-pagne-orange via-pagne-magenta to-pagne-gold px-8 py-3 font-sans font-bold text-night transition-transform hover:scale-[1.03]"
                                >
                                    Voir les événements
                                </a>
                                <a
                                    href="#sites"
                                    className="rounded-full border border-cream/20 px-8 py-3 font-sans text-cream transition-colors hover:border-cream/40"
                                >
                                    Explorer les sites
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <PagneDivider />

                <FeaturedVideo />

                <EventsSection />
                <CultureSection />
                <TouristSitesSection />
                <ModernBeninSection />
                <FutureProjectsSection />

                <PagneDivider />

                <footer className="mx-auto w-full max-w-6xl px-6 py-10 text-center text-xs text-cream/40 sm:px-10">
                    Xwégbé — projet d'entraînement, dédié au Bénin d'aujourd'hui.
                </footer>
            </div>
        </>
    );
}
