import { useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { BrandMark } from '@/components/festival/brand-mark';
import { ACCENT_TEXT, type PagneAccent } from '@/components/festival/photo-slot';
import { dashboard, login, register } from '@/routes';

const PAGNE = "url('/images/flat-african-pattern-design/6925962.jpg')";

const LINKS: { href: string; label: string; index: string; accent: PagneAccent }[] = [
    { href: '/decouvrir/une',           label: 'À la une',        index: '01', accent: 'orange'  },
    { href: '/decouvrir/plats',         label: 'Plats béninois',  index: '02', accent: 'gold'    },
    { href: '/decouvrir/restaurants',   label: 'Restaurants',     index: '03', accent: 'magenta' },
    { href: '/decouvrir/marques',       label: 'Marques',         index: '04', accent: 'teal'    },
    { href: '/decouvrir/createurs',     label: 'Créateurs',       index: '05', accent: 'orange'  },
    { href: '/decouvrir/documentaires', label: 'Documentaires',   index: '06', accent: 'magenta' },
    { href: '/decouvrir/evenements',    label: 'Événements',      index: '07', accent: 'gold'    },
    { href: '/decouvrir/culture',       label: 'Culture',         index: '08', accent: 'teal'    },
    { href: '/decouvrir/sites',         label: 'Sites à visiter', index: '09', accent: 'orange'  },
    { href: '/decouvrir/moderne',       label: 'Bénin moderne',   index: '10', accent: 'green'   },
];

export function HomeNav({ auth, open, onClose }: { auth: { user: unknown }; open: boolean; onClose: () => void }) {
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    return (
        <>
            {/* ── OVERLAY PLEIN ÉCRAN ── */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Navigation Xwégbé"
                className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
                    open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                }`}
            >
                {/* PANNEAU GAUCHE — rubriques */}
                <div
                    className="relative flex w-full flex-col overflow-hidden bg-night lg:w-[60%]"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 91% 100%, 0 100%)' }}
                >
                    {/* Texture pagne fond */}
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{ backgroundImage: PAGNE, backgroundSize: '140px auto', backgroundRepeat: 'repeat', opacity: 0.04 }}
                        aria-hidden="true"
                    />

                    {/* Bande pagne haut */}
                    <div
                        className="shrink-0"
                        style={{ height: 3, backgroundImage: PAGNE, backgroundSize: '80px auto', backgroundRepeat: 'repeat', animation: 'pagne-drift 8s linear infinite' }}
                        aria-hidden="true"
                    />

                    {/* En-tête — close uniquement */}
                    <div className="relative z-10 flex shrink-0 items-center justify-end px-8 pb-2 pt-4 sm:px-14">
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Fermer le menu"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-pagne-gold hover:text-pagne-gold"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                            </svg>
                        </button>
                    </div>

                    {/* Liens navigation */}
                    <nav className="relative z-10 flex min-h-0 flex-1 flex-col justify-start overflow-y-auto px-8 py-3 sm:px-14">
                        {LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="group flex items-baseline gap-4 border-b border-cream/8 py-1.5 last:border-0"
                            >
                                <span className={`w-6 shrink-0 font-mono text-xs opacity-50 ${ACCENT_TEXT[link.accent]}`}>
                                    {link.index}
                                </span>
                                <span className="font-display text-xl font-extrabold uppercase text-cream transition-colors group-hover:text-pagne-gold sm:text-2xl lg:text-3xl">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Pied panneau gauche */}
                    <div className="relative z-10 shrink-0 px-8 pb-5 sm:px-14">
                        <p className="font-mono text-[10px] text-cream/20">Xwégbé — Cotonou, Bénin</p>
                    </div>
                </div>

                {/* PANNEAU DROIT — featured content (desktop uniquement) */}
                <div className="hidden flex-1 flex-col bg-night-elevated px-8 py-7 lg:flex">
                    <BrandMark className="h-8 w-auto" />

                    <div className="mt-6 flex-1 space-y-4">
                        <div>
                            <p className="font-mono text-[10px] tracking-widest text-cream/25 uppercase">
                                Le Bénin d'aujourd'hui
                            </p>
                            <p className="mt-2 font-display text-lg font-extrabold leading-snug text-cream">
                                Vodun et modernité,<br />
                                palais royaux et villes<br />
                                d'innovation.
                            </p>
                        </div>

                        {/* À la une */}
                        <Link
                            href="/decouvrir/une"
                            onClick={onClose}
                            className="group block rounded-xl border border-cream/10 p-4 transition-colors hover:border-cream/25"
                            style={{ borderLeft: '3px solid var(--color-pagne-orange)' }}
                        >
                            <p className="font-mono text-[10px] uppercase tracking-wider text-pagne-orange">01 · À la une</p>
                            <p className="mt-1.5 font-display text-sm font-extrabold leading-snug text-cream transition-colors group-hover:text-pagne-orange">
                                Romuald Wadagni investi président du Bénin — mai 2026
                            </p>
                        </Link>

                        {/* Plats béninois */}
                        <Link
                            href="/decouvrir/plats"
                            onClick={onClose}
                            className="group block rounded-xl border border-cream/10 p-4 transition-colors hover:border-cream/25"
                            style={{ borderLeft: '3px solid var(--color-pagne-gold)' }}
                        >
                            <p className="font-mono text-[10px] uppercase tracking-wider text-pagne-gold">02 · Plats béninois</p>
                            <p className="mt-1.5 font-display text-sm font-extrabold leading-snug text-cream transition-colors group-hover:text-pagne-gold">
                                Amiwo, Akassa, Watché, Wagashi et bien plus
                            </p>
                        </Link>
                    </div>

                    {/* Auth */}
                    <div className="mt-6 flex flex-col gap-2">
                        {auth?.user ? (
                            <Link
                                href={dashboard()}
                                className="rounded-full border border-cream/20 px-5 py-2.5 text-center text-sm text-cream transition-colors hover:border-cream/40"
                            >
                                Tableau de bord
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={register()}
                                    className="rounded-full bg-gradient-to-r from-pagne-orange to-pagne-gold px-5 py-2.5 text-center text-sm font-bold text-night"
                                >
                                    S'inscrire
                                </Link>
                                <Link
                                    href={login()}
                                    className="rounded-full border border-cream/20 px-5 py-2.5 text-center text-sm text-cream/70 transition-colors hover:border-cream/40"
                                >
                                    Se connecter
                                </Link>
                            </>
                        )}
                    </div>

                    <p className="mt-4 font-mono text-[10px] text-cream/15">
                        Données vérifiées · 8 oct. 2026
                    </p>
                </div>
            </div>
        </>
    );
}
