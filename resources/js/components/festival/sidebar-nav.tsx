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
                ← Retour
            </span>
        </a>
    );
}

