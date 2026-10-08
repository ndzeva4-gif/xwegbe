/* Porte du Non-Retour — paths exacts extraits du logo officiel Xwégbé */

export function GateSvg({ size = 80 }: { size?: number }) {
    const h = Math.round(size * 120 / 90);
    return (
        <svg viewBox="0 8 90 122" width={size} height={h} fill="none" aria-hidden="true">
            <g fill="var(--color-pagne-red)">
                {/* Traverse + créneaux */}
                <path fillRule="evenodd" d="M2,18 h84 v20 h-84 z M18,22 h7 v12 h-7 z M40,22 h7 v12 h-7 z M62,22 h7 v12 h-7 z" />
                {/* Pilier gauche */}
                <path d="M8,38 h18 v88 h-18 z" />
                {/* Pilier droit */}
                <path d="M62,38 h18 v88 h-18 z" />
            </g>
            {/* Médaillon doré */}
            <circle cx="44" cy="90" r="16" fill="var(--color-pagne-gold)" />
        </svg>
    );
}

/* Anneau de chargement — 4 diamants qui tournent autour de la porte */
export function GateSpinner({ size = 100 }: { size?: number }) {
    return (
        <svg
            viewBox="0 0 100 100"
            width={size}
            height={size}
            fill="none"
            aria-hidden="true"
            style={{ animation: 'pagne-spin-dots 2s linear infinite' }}
        >
            <path d="M50 2  L54 6  L50 10 L46 6  Z" fill="var(--color-pagne-gold)"    />
            <path d="M92 46 L96 50 L92 54 L88 50 Z" fill="var(--color-pagne-orange)"  />
            <path d="M50 90 L54 94 L50 98 L46 94 Z" fill="var(--color-pagne-gold)"    />
            <path d="M8  46 L12 50 L8  54 L4  50 Z" fill="var(--color-pagne-orange)"  />
        </svg>
    );
}
