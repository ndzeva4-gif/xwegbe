import { Link } from '@inertiajs/react';
import type { AuthLayoutProps } from '@/types';
import { home } from '@/routes';
import { BrandMark } from '@/components/festival/brand-mark';

const PAGNE = "url('/images/flat-african-pattern-design/6925962.jpg')";

export default function AuthSplitLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="grid min-h-svh bg-night text-cream lg:min-h-screen lg:grid-cols-[0.88fr_1.12fr]">

            {/* ── Bande pagne top (mobile uniquement) ── */}
            <div
                className="lg:hidden"
                style={{ height: 4, backgroundImage: PAGNE, backgroundSize: '80px auto', backgroundRepeat: 'repeat', animation: 'pagne-drift 8s linear infinite' }}
                aria-hidden="true"
            />

            {/* ── Panneau gauche — photo + accroche ── */}
            <aside className="relative isolate min-h-[23rem] overflow-hidden bg-night text-cream lg:min-h-screen">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/df/Ganvi%C3%A9_Benin.jpg"
                    alt="Vue du village lacustre de Ganvié"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night/35 via-night/25 to-night/95" />

                <div className="relative flex min-h-[23rem] flex-col justify-between gap-10 p-6 sm:p-10 lg:min-h-screen lg:p-12">
                    <Link href={home()} className="w-fit rounded-sm text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pagne-gold">
                        <BrandMark size="large" />
                    </Link>

                    <div className="max-w-xl">
                        <p className="font-mono text-xs text-pagne-gold uppercase tracking-widest">Chez nous</p>
                        <h2 className="mt-3 font-display text-4xl leading-tight font-extrabold sm:text-6xl">
                            Le Bénin,
                            <br />
                            aujourd'hui.
                        </h2>
                        <p className="mt-4 max-w-sm text-base text-cream/85 sm:text-lg">
                            Une porte ouverte sur le pays et ses voix.
                        </p>
                    </div>

                    <p className="max-w-md text-xs leading-relaxed text-cream/60">
                        « Ganvié Benin » par{' '}
                        <a href="https://commons.wikimedia.org/wiki/File:Ganvi%C3%A9_Benin.jpg" target="_blank" rel="noreferrer" className="underline decoration-cream/40 underline-offset-2 hover:decoration-cream">
                            Cyriac Gbogou, Wikimedia Commons
                        </a>
                        {' · '}
                        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer" className="underline decoration-cream/40 underline-offset-2 hover:decoration-cream">
                            CC BY-SA 4.0
                        </a>
                        {" · photo recadrée à l'écran"}
                    </p>
                </div>

                {/* Séparateur pagne animé — bas (mobile) / droite (desktop) */}
                <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 z-10 lg:top-0 lg:right-0 lg:bottom-0 lg:left-auto lg:w-5"
                    style={{
                        height: 5,
                        backgroundImage: PAGNE,
                        backgroundSize: '80px auto',
                        backgroundRepeat: 'repeat',
                        borderTop: '1px solid rgba(244,183,64,0.35)',
                    }}
                >
                    {/* Version desktop : bande verticale */}
                    <div
                        className="hidden lg:block absolute inset-0"
                        style={{
                            backgroundImage: PAGNE,
                            backgroundSize: '50px auto',
                            backgroundRepeat: 'repeat',
                            animation: 'pagne-drift 12s linear infinite',
                            borderLeft: '1px solid rgba(244,183,64,0.35)',
                        }}
                    />
                </div>
            </aside>

            {/* ── Panneau droit — formulaire ── */}
            <main className="relative flex min-h-[38rem] items-center justify-center overflow-hidden bg-night px-6 py-12 text-cream sm:px-10 lg:min-h-screen lg:px-16">

                {/* Texture pagne très subtile en fond */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{ backgroundImage: PAGNE, backgroundSize: '280px auto', backgroundRepeat: 'repeat', opacity: 0.03 }}
                    aria-hidden="true"
                />

                {/* Ornements flottants desktop */}
                <div className="pointer-events-none absolute top-[8%] right-[6%] hidden lg:block" style={{ animation: 'pagne-float 9s ease-in-out infinite' }} aria-hidden="true">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 0 L36 18 L18 36 L0 18 Z" fill="var(--color-pagne-gold)" opacity="0.25" /></svg>
                </div>
                <div className="pointer-events-none absolute bottom-[12%] left-[4%] hidden lg:block" style={{ animation: 'pagne-float 13s ease-in-out 3s infinite' }} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 0 L20 10 L10 20 L0 10 Z" fill="var(--color-pagne-orange)" opacity="0.30" /></svg>
                </div>
                <div className="pointer-events-none absolute top-[55%] right-[3%] hidden lg:block" style={{ animation: 'pagne-float 11s ease-in-out 6s infinite' }} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 0 L14 7 L7 14 L0 7 Z" fill="var(--color-pagne-magenta)" opacity="0.35" /></svg>
                </div>

                <div className="relative w-full max-w-md">
                    <header className="mb-9 space-y-1">
                        <p className="font-display text-lg font-semibold italic text-pagne-gold">
                            Bon retour,
                        </p>
                        <h1 className="font-display text-4xl leading-tight font-extrabold uppercase sm:text-5xl">
                            {title}
                        </h1>
                        <p className="text-sm text-cream/50 text-balance sm:text-base">
                            {description}
                        </p>
                    </header>
                    {children}
                    <Link
                        href={home()}
                        className="mt-8 inline-flex items-center gap-2 text-sm text-cream/40 transition-colors hover:text-cream/80 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pagne-gold"
                    >
                        <span aria-hidden="true">←</span>
                        Retour à l'accueil
                    </Link>
                </div>
            </main>
        </div>
    );
}
