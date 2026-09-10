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
import { HeroSlideshow } from '@/components/festival/hero-slideshow';
import { IntroSplash } from '@/components/festival/intro-splash';
import { Reveal } from '@/components/festival/reveal';
import { SidebarNav } from '@/components/festival/sidebar-nav';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Xwégbé — Le Bénin d'aujourd'hui" />

            <IntroSplash />

            <div className="min-h-screen bg-night text-cream">
                <header className="sticky top-0 z-40 flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-cream/10 bg-night/90 px-6 py-4 backdrop-blur-sm sm:px-10">
                    <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3">
                    <BrandMark />
                    <nav className="flex items-center gap-3 text-sm sm:gap-4">
                        <SidebarNav />
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
                                    className="text-cream/70 whitespace-nowrap transition-colors hover:text-cream"
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
                    </div>
                </header>

                <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:px-10 sm:pt-24">
                    <HeroSlideshow />
                    <Reveal delay={200} className="pointer-events-none absolute top-0 right-0 z-[5] w-[280px] sm:w-[380px] lg:w-[440px]">
                        <BeadedArc className="w-full opacity-80" />
                    </Reveal>
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

                <div className="pattern-weave h-3 border-y border-cream/10" aria-hidden="true" />

                <EventsSection />
                <CultureSection />
                <TouristSitesSection />
                <ModernBeninSection />
                <FutureProjectsSection />

                <div className="pattern-weave h-3 border-y border-cream/10" aria-hidden="true" />

                <footer className="mx-auto w-full max-w-6xl px-6 py-10 text-center text-xs text-cream/40 sm:px-10">
                    Xwégbé — projet d'entraînement, dédié au Bénin d'aujourd'hui.
                </footer>
            </div>
        </>
    );
}
