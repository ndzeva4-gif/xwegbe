import { Link } from '@inertiajs/react';
import type { AuthLayoutProps } from '@/types';
import { home } from '@/routes';
import { BrandMark } from '@/components/festival/brand-mark';

export default function AuthSplitLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="grid min-h-svh bg-cream text-night lg:min-h-screen lg:grid-cols-[0.88fr_1.12fr]">
            <aside className="relative isolate min-h-[23rem] overflow-hidden bg-night text-cream lg:min-h-screen">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/df/Ganvi%C3%A9_Benin.jpg"
                    alt="Vue du village lacustre de Ganvié"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-night/35 via-night/25 to-night/95"
                />
                <div className="relative flex min-h-[23rem] flex-col justify-between gap-10 p-6 sm:p-10 lg:min-h-screen lg:p-12">
                    <Link
                        href={home()}
                        className="w-fit rounded-sm text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pagne-gold"
                    >
                        <BrandMark size="large" />
                    </Link>

                    <div className="max-w-xl">
                        <p className="font-mono text-xs text-pagne-gold">CHEZ NOUS</p>
                        <h2 className="mt-3 font-display text-4xl leading-tight font-extrabold sm:text-6xl">
                            Le Bénin,
                            <br />
                            aujourd’hui.
                        </h2>
                        <p className="mt-4 max-w-sm text-base text-cream/85 sm:text-lg">
                            Une porte ouverte sur le pays et ses voix.
                        </p>
                    </div>

                    <p className="max-w-md text-xs leading-relaxed text-cream/90">
                        « Ganvié Benin » par{' '}
                        <a
                            href="https://commons.wikimedia.org/wiki/File:Ganvi%C3%A9_Benin.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="underline decoration-cream/60 underline-offset-2 hover:decoration-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pagne-gold"
                        >
                            Cyriac Gbogou, Wikimedia Commons
                        </a>
                        {' · '}
                        <a
                            href="https://creativecommons.org/licenses/by-sa/4.0/"
                            target="_blank"
                            rel="noreferrer"
                            className="underline decoration-cream/60 underline-offset-2 hover:decoration-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pagne-gold"
                        >
                            CC BY-SA 4.0
                        </a>
                        {' · photo recadrée à l’écran'}
                    </p>
                </div>
                <div
                    aria-hidden="true"
                    className="pattern-weave absolute right-0 bottom-0 left-0 z-10 h-3 border-t border-pagne-gold/70 lg:top-0 lg:right-0 lg:bottom-0 lg:left-auto lg:h-auto lg:w-3 lg:border-t-0 lg:border-l"
                />
            </aside>

            <main className="auth-login-panel flex min-h-[38rem] items-center justify-center bg-cream px-6 py-12 text-night sm:px-10 lg:min-h-screen lg:px-16">
                <div className="w-full max-w-md">
                    <header className="mb-9 space-y-2">
                        <p className="font-display text-xl font-semibold italic text-pagne-red">
                            Bon retour,
                        </p>
                        <h1 className="font-display text-4xl leading-tight font-extrabold uppercase sm:text-5xl">
                            {title}
                        </h1>
                        <p className="text-muted-foreground text-sm text-balance sm:text-base">
                            {description}
                        </p>
                    </header>
                    {children}
                    <Link
                        href={home()}
                        className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pagne-gold"
                    >
                        <span aria-hidden="true">←</span>
                        Retour à l’accueil
                    </Link>
                </div>
            </main>
        </div>
    );
}
