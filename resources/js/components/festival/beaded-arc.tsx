export function BeadedArc({ className = '' }: { className?: string }) {
    const path = 'M 470 30 C 640 120, 600 360, 440 470 C 350 530, 200 550, 110 480';

    return (
        <svg
            viewBox="0 0 640 620"
            fill="none"
            aria-hidden="true"
            className={className}
        >
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
        </svg>
    );
}
