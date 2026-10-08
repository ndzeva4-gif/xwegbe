const PAGNE = "url('/images/flat-african-pattern-design/6925962.jpg')";

/* ── Bouton Accueil animé pagne ── */
export function PagneHomeButton() {
    return (
        <a
            href="/"
            aria-label="Retour à l'accueil Xwégbé"
            className="group relative overflow-hidden rounded-full border border-pagne-gold/40 px-4 py-2 text-sm text-cream transition-colors hover:border-pagne-gold"
        >
            <div
                className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-35"
                style={{ backgroundImage: PAGNE, backgroundSize: '50px auto', backgroundRepeat: 'repeat', animation: 'pagne-drift 8s linear infinite' }}
                aria-hidden="true"
            />
            <span className="relative z-10 flex items-center gap-2 font-mono tracking-widest uppercase">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-pagne-gold" aria-hidden="true">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Accueil
            </span>
        </a>
    );
}

