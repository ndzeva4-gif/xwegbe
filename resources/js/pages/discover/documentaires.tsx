import { Head } from '@inertiajs/react';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';

type Documentary = {
    title: string;
    director: string;
    year: number;
    description: string;
    award?: string;
    sourceUrl: string;
    source: string;
};

const DOCUMENTARIES: Documentary[] = [
    {
        title: 'Dahomey',
        director: 'Mati Diop',
        year: 2024,
        description:
            "Le retour de 26 trésors royaux du Danxomè — pillés lors de la colonisation française et restitués au Bénin en novembre 2021. Mati Diop filme leur voyage, leur arrivée et la question de leur sens pour les Béninois d'aujourd'hui.",
        award: "Ours d'or, Berlinale 2024",
        sourceUrl:
            'https://www.gouv.bj/article/2556/recompense-supreme-berlin-dahomey-benin-mise-histoire-restitution-tresors-royaux/',
        source: 'gouv.bj',
    },
];

export default function Documentaires() {
    return (
        <>
            <Head title="Documentaires — Xwégbé" />

            <div className="min-h-screen bg-night text-cream">
                <header className="sticky top-0 z-30 flex items-center justify-between border-b border-cream/10 bg-night/90 px-6 py-4 backdrop-blur-sm sm:px-10">
                    <PagneHomeButton />
                </header>

                <div className="px-6 pb-4 pt-10 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-pagne-magenta">06</p>
                        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Documentaires</h1>
                        <p className="mt-4 max-w-xl text-base text-cream/55">
                            Films et documentaires consacrés au Bénin — histoire, culture, société et nature.
                        </p>
                    </div>
                </div>

                <div className="px-6 py-10 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <ol className="divide-y divide-cream/8">
                            {DOCUMENTARIES.map((doc, i) => (
                                <li key={doc.title} className="py-8">
                                    <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-5">
                                        <span className="font-mono text-xs text-cream/30 pt-1">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div className="min-w-0">
                                            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                                                {doc.title}
                                            </h2>
                                            <p className="mt-1 font-mono text-xs text-cream/40 uppercase tracking-wide">
                                                {doc.director} · {doc.year}
                                            </p>
                                            {doc.award && (
                                                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-pagne-gold/30 bg-pagne-gold/10 px-3 py-0.5 font-mono text-[11px] text-pagne-gold">
                                                    ★ {doc.award}
                                                </p>
                                            )}
                                            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/65">
                                                {doc.description}
                                            </p>
                                            <a
                                                href={doc.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-cream/40 transition-opacity hover:opacity-70"
                                            >
                                                {doc.source} ↗
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <p className="mt-8 border-t border-cream/10 pt-6 font-mono text-[11px] text-cream/20">
                            Sélection Xwégbé · D'autres titres seront ajoutés prochainement.
                        </p>
                    </div>
                </div>

                <footer className="px-6 py-8 text-center font-mono text-xs text-cream/25 sm:px-10">
                    <a href="/" className="transition-colors hover:text-cream/50">← Xwégbé</a>
                </footer>
            </div>
        </>
    );
}
