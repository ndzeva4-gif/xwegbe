import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { ArtistMarquee } from '@/components/festival/artist-marquee';
import {
    CultureSection,
    EventsSection,
    FutureProjectsSection,
    ModernBeninSection,
    TouristSitesSection,
} from '@/components/festival/benin-sections';
import { Countdown } from '@/components/festival/countdown';
import { HeroSlideshow } from '@/components/festival/hero-slideshow';
import { Reveal } from '@/components/festival/reveal';

const FESTIVAL_DATE = '2027-04-24T18:00:00+01:00';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Savanna Nova — Festival musique, culture & street art" />

            <div className="min-h-screen bg-night text-cream">
                <header className="mx-auto w-full max-w-6xl px-6 py-6 sm:px-10">
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                        <span className="font-display text-base tracking-wide uppercase sm:text-lg">
                            Savanna Nova
                        </span>
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
                    <nav className="mt-4 flex gap-5 overflow-x-auto text-xs tracking-widest text-cream/60 uppercase [scrollbar-width:none] sm:text-sm [&::-webkit-scrollbar]:hidden">
                        <a href="#evenements" className="whitespace-nowrap transition-colors hover:text-pagne-gold">
                            Événements
                        </a>
                        <a href="#culture" className="whitespace-nowrap transition-colors hover:text-pagne-gold">
                            Culture
                        </a>
                        <a href="#sites" className="whitespace-nowrap transition-colors hover:text-pagne-gold">
                            Sites
                        </a>
                        <a href="#moderne" className="whitespace-nowrap transition-colors hover:text-pagne-gold">
                            Moderne
                        </a>
                        <a href="#avenir" className="whitespace-nowrap transition-colors hover:text-pagne-gold">
                            Avenir
                        </a>
                    </nav>
                </header>

                <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:px-10 sm:pt-24">
                    <HeroSlideshow />
                    <div className="relative z-10 mx-auto max-w-6xl">
                        <Reveal delay={0}>
                            <p className="font-sans text-sm tracking-[0.3em] text-pagne-gold uppercase">
                                Musique · Culture · Street Art
                            </p>
                        </Reveal>

                        <Reveal delay={120}>
                            <h1 className="mt-4 font-display text-[clamp(3.25rem,13vw,9rem)] leading-[0.88] font-extrabold uppercase">
                                <span className="block bg-gradient-to-r from-pagne-orange via-pagne-magenta to-pagne-gold bg-clip-text text-transparent">
                                    Savanna
                                </span>
                                <span className="block">Nova</span>
                            </h1>
                        </Reveal>

                        <Reveal delay={260}>
                            <p className="mt-6 max-w-xl text-lg text-cream/70">
                                Trois nuits où la savane s'illumine. Musique, culture et
                                street art se rencontrent à Cotonou pour une édition
                                inédite, entre héritage et futur.
                            </p>
                        </Reveal>

                        <Reveal delay={340}>
                            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-cream/60 uppercase">
                                <span>24 — 26 avril 2027</span>
                                <span>Cotonou, Bénin</span>
                            </div>
                        </Reveal>

                        <Reveal delay={420}>
                            <div className="mt-10">
                                <Countdown target={FESTIVAL_DATE} />
                            </div>
                        </Reveal>

                        <Reveal delay={500}>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <a
                                    href="#programme"
                                    className="rounded-full bg-gradient-to-r from-pagne-orange via-pagne-magenta to-pagne-gold px-8 py-3 font-sans font-bold text-night transition-transform hover:scale-[1.03]"
                                >
                                    Programme bientôt révélé
                                </a>
                                <a
                                    href="#newsletter"
                                    className="rounded-full border border-cream/20 px-8 py-3 font-sans text-cream transition-colors hover:border-cream/40"
                                >
                                    Être prévenu·e
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <ArtistMarquee />

                <EventsSection />
                <CultureSection />
                <TouristSitesSection />
                <ModernBeninSection />
                <FutureProjectsSection />

                <footer className="mx-auto w-full max-w-6xl px-6 py-10 text-center text-xs text-cream/40 sm:px-10">
                    Savanna Nova — projet d'entraînement, festival fictif.
                </footer>
            </div>
        </>
    );
}
