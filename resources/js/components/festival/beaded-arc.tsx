export function BeadedArc({ className = '' }: { className?: string }) {
    const path = 'M 470 30 C 640 120, 600 360, 440 470 C 350 530, 200 550, 110 480';

    return (
        <svg
            viewBox="0 0 640 620"
            fill="none"
            aria-hidden="true"
            className={className}
        >
            <g style={{ transformOrigin: '320px 310px', animation: 'bead-spin 4s linear infinite' } as React.CSSProperties}>
                <path
                    d={path}
                    stroke="var(--color-pagne-gold)"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeDasharray="0 30"
                />
                <path
                    d={path}
                    stroke="var(--color-pagne-orange)"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray="0 30"
                    strokeDashoffset="15"
                />
            </g>

            <style>{`
                @keyframes bead-spin {
                    0%   { transform: rotate(0deg); }
                    75%  { transform: rotate(360deg); }
                    100% { transform: rotate(360deg); }
                }
                @media (prefers-reduced-motion: reduce) {
                    g[style] { animation: none !important; }
                }
            `}</style>
        </svg>
    );
}
