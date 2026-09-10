import { ACCENT_TEXT, type PagneAccent } from '@/components/festival/photo-slot';
import { Reveal } from '@/components/festival/reveal';

export function SectionHeading({
    eyebrow,
    title,
    lead,
    accent = 'gold',
}: {
    eyebrow: string;
    title: string;
    lead?: string;
    accent?: PagneAccent;
}) {
    return (
        <div className="max-w-2xl">
            <Reveal>
                <p className={`font-sans text-sm tracking-[0.3em] uppercase ${ACCENT_TEXT[accent]}`}>
                    {eyebrow}
                </p>
            </Reveal>
            <Reveal delay={80}>
                <h2 className="mt-3 font-display text-4xl leading-[0.95] font-extrabold uppercase sm:text-5xl">
                    {title}
                </h2>
            </Reveal>
            {lead && (
                <Reveal delay={160}>
                    <p className="mt-4 text-cream/70">{lead}</p>
                </Reveal>
            )}
        </div>
    );
}
