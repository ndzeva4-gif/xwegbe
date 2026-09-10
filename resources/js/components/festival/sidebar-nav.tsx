import { useEffect, useState } from 'react';
import { ACCENT_TEXT, type PagneAccent } from '@/components/festival/photo-slot';

const LINKS: { href: string; label: string; index: string; accent: PagneAccent }[] = [
    { href: '#evenements', label: 'Événements', index: '01', accent: 'orange' },
    { href: '#culture', label: 'Culture & héritage', index: '02', accent: 'magenta' },
    { href: '#sites', label: 'Sites touristiques', index: '03', accent: 'teal' },
    { href: '#moderne', label: 'Bénin moderne', index: '04', accent: 'green' },
    { href: '#avenir', label: "Projets d'avenir", index: '05', accent: 'gold' },
];

export function SidebarNav() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('keydown', onKeyDown);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                aria-label="Ouvrir le menu de navigation"
                className="flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-sm text-cream transition-colors hover:border-cream/40"
            >
                <span className="flex h-3 w-4 flex-col justify-between">
                    <span className="h-px w-full bg-current" />
                    <span className="h-px w-full bg-current" />
                    <span className="h-px w-full bg-current" />
                </span>
                Explorer
            </button>

            <div
                className={`fixed inset-0 z-50 bg-night/70 backdrop-blur-sm transition-opacity duration-300 ${
                    open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                }`}
                onClick={() => setOpen(false)}
                aria-hidden={!open}
            />

            <aside
                className={`pattern-weave fixed inset-y-0 right-0 z-50 w-[85vw] max-w-sm p-2 shadow-2xl transition-transform duration-500 ease-out sm:p-3 ${
                    open ? 'translate-x-0' : 'translate-x-full'
                }`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation"
            >
                <div className="flex h-full flex-col bg-night-elevated text-cream">
                    <div className="flex items-center justify-between border-b border-cream/10 px-6 py-6">
                        <span className="font-display text-base tracking-wide uppercase">
                            Explorer
                        </span>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Fermer le menu"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-cream/40"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-1 flex-col justify-center gap-1 px-6 py-8">
                        {LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="group flex items-baseline gap-4 border-b border-cream/10 py-4 transition-colors last:border-b-0"
                            >
                                <span className={`font-mono text-xs ${ACCENT_TEXT[link.accent]}`}>
                                    {link.index}
                                </span>
                                <span className="font-display text-2xl uppercase transition-colors group-hover:text-pagne-gold">
                                    {link.label}
                                </span>
                            </a>
                        ))}
                    </nav>

                    <p className="border-t border-cream/10 px-6 py-5 text-xs text-cream/40">
                        Xwégbé — Cotonou, Bénin
                    </p>
                </div>
            </aside>
        </>
    );
}
