export type PagneAccent = 'orange' | 'magenta' | 'gold' | 'teal' | 'green' | 'red';

const ACCENT_BG: Record<PagneAccent, string> = {
    orange: 'bg-pagne-orange',
    magenta: 'bg-pagne-magenta',
    gold: 'bg-pagne-gold',
    teal: 'bg-pagne-teal',
    green: 'bg-pagne-green',
    red: 'bg-pagne-red',
};

const ACCENT_SHADOW: Record<PagneAccent, string> = {
    orange: 'group-hover:shadow-[0_0_50px_-5px_var(--color-pagne-orange)]',
    magenta: 'group-hover:shadow-[0_0_50px_-5px_var(--color-pagne-magenta)]',
    gold: 'group-hover:shadow-[0_0_50px_-5px_var(--color-pagne-gold)]',
    teal: 'group-hover:shadow-[0_0_50px_-5px_var(--color-pagne-teal)]',
    green: 'group-hover:shadow-[0_0_50px_-5px_var(--color-pagne-green)]',
    red: 'group-hover:shadow-[0_0_50px_-5px_var(--color-pagne-red)]',
};

export const ACCENT_TEXT: Record<PagneAccent, string> = {
    orange: 'text-pagne-orange',
    magenta: 'text-pagne-magenta',
    gold: 'text-pagne-gold',
    teal: 'text-pagne-teal',
    green: 'text-pagne-green',
    red: 'text-pagne-red',
};

type PhotoSlotProps = {
    label: string;
    src?: string;
    alt?: string;
    accent?: PagneAccent;
    className?: string;
};

export function PhotoSlot({ label, src, alt, accent = 'gold', className = '' }: PhotoSlotProps) {
    if (src) {
        return (
            <div
                className={`group relative h-full w-full overflow-hidden transition-shadow duration-500 ${ACCENT_SHADOW[accent]} ${className}`}
            >
                <img
                    src={src}
                    alt={alt ?? label}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                    className={`pointer-events-none absolute inset-0 opacity-0 mix-blend-color transition-opacity duration-500 ease-out group-hover:opacity-70 ${ACCENT_BG[accent]}`}
                />
            </div>
        );
    }

    return (
        <div
            className={`flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-cream/15 bg-night-elevated p-4 text-center ${className}`}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-6 w-6 text-cream/25"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.086a1.5 1.5 0 0 0 1.06-.44l1.208-1.207A1.5 1.5 0 0 1 9.914 5h4.172a1.5 1.5 0 0 1 1.06.44l1.208 1.213a1.5 1.5 0 0 0 1.06.44H19.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-9Z"
                />
                <circle cx="12" cy="13" r="3.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs text-cream/40">Photo à venir — {label}</span>
        </div>
    );
}
