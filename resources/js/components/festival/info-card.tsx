import { ACCENT_TEXT, PhotoSlot, type PagneAccent } from '@/components/festival/photo-slot';

export type InfoCardData = {
    title: string;
    tag?: string;
    description: string;
    photoLabel: string;
    photoSrc?: string;
    accent?: PagneAccent;
};

export function InfoCard({ title, tag, description, photoLabel, photoSrc, accent = 'gold' }: InfoCardData) {
    return (
        <div className="overflow-hidden rounded-2xl border border-cream/10 bg-night-elevated">
            <div className="aspect-[4/3]">
                <PhotoSlot label={photoLabel} src={photoSrc} accent={accent} />
            </div>
            <div className="p-6">
                {tag && (
                    <span className={`text-xs font-bold tracking-widest uppercase ${ACCENT_TEXT[accent]}`}>
                        {tag}
                    </span>
                )}
                <h3 className="mt-2 font-display text-xl uppercase">{title}</h3>
                <p className="mt-2 text-sm text-cream/65">{description}</p>
            </div>
        </div>
    );
}
