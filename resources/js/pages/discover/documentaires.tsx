import { Head } from '@inertiajs/react';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';

const PAGNE = "url('/images/flat-african-pattern-design/6925962.jpg')";

type Entry = {
    title: string;
    director: string;
    year: number;
    type: 'Documentaire' | 'Film';
    description: string;
    award?: string;
    sourceUrl: string;
    source: string;
};

const ENTRIES: Entry[] = [
    {
        title: 'Dahomey',
        director: 'Mati Diop',
        year: 2024,
        type: 'Documentaire',
        description:
            "Le retour de 26 trésors royaux du Danxomè — pillés lors de la colonisation française et restitués au Bénin en novembre 2021. Mati Diop filme leur voyage, leur arrivée et la question de leur sens pour les Béninois d'aujourd'hui. Une œuvre qui interroge ce que signifie retrouver ce qui a été pris.",
        award: "Ours d'or · Berlinale 2024",
        sourceUrl:
            'https://www.gouv.bj/article/2556/recompense-supreme-berlin-dahomey-benin-mise-histoire-restitution-tresors-royaux/',
        source: 'gouv.bj',
    },
    {
        title: 'The Woman King',
        director: 'Gina Prince-Bythewood',
        year: 2022,
        type: 'Film',
        description:
            "Film hollywoodien inspiré de l'histoire des Agojie — les guerrières d'élite du royaume du Dahomey au XIXe siècle. Viola Davis incarne la générale Nanisca, qui forme et commande un régiment de femmes soldats. Une fiction ancrée dans une réalité historique souvent méconnue : les Agojie furent l'une des seules armées de femmes combattantes au monde.",
        sourceUrl: 'https://www.allocine.fr/film/fichefilm_gen_cfilm=295006.html',
        source: 'allocine.fr',
    },
    {
        title: 'Restitution — le retour des trésors africains',
        director: 'ARTE Reportage',
        year: 2022,
        type: 'Documentaire',
        description:
            "Dans le sillage de la décision française de restituer 26 œuvres du musée du Quai Branly, ARTE a consacré plusieurs reportages au débat sur la restitution des patrimoines africains, dont les trésors royaux du Dahomey. Ces documents retracent les négociations, les attentes béninoises et les résistances institutionnelles européennes avant le retour historique de novembre 2021.",
        sourceUrl: 'https://www.arte.tv/fr/videos/RC-023757/le-grand-debat-de-la-restitution/',
        source: 'arte.tv',
    },
    {
        title: 'Ganvié — la Venise africaine',
        director: 'Divers réalisateurs',
        year: 2020,
        type: 'Documentaire',
        description:
            "Fondée sur le lac Nokoué au XVIIe siècle pour échapper aux razzias des marchands d'esclaves, Ganvié abrite aujourd'hui 20 000 personnes dans des maisons sur pilotis. Marché flottant, pirogues, vie organisée entièrement sur l'eau : la cité lacustre est l'un des sujets documentaires les plus photographiés et filmés d'Afrique de l'Ouest. ARTE, France 24 et RFI y ont consacré des reportages.",
        sourceUrl: 'https://whc.unesco.org/fr/tentativeslistes/5673/',
        source: 'UNESCO',
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

                {/* Intro */}
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
                            {ENTRIES.map((entry, i) => (
                                <li key={entry.title} className="py-8">
                                    <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-5">
                                        <span className="pt-1 font-mono text-xs text-cream/30">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div className="min-w-0">
                                            {/* Titre + type */}
                                            <div className="flex flex-wrap items-baseline gap-3">
                                                <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                                                    {entry.title}
                                                </h2>
                                                <span className="rounded-full border border-cream/15 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-cream/40">
                                                    {entry.type}
                                                </span>
                                            </div>

                                            {/* Réal · Année */}
                                            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-cream/40">
                                                {entry.director} · {entry.year}
                                            </p>

                                            {/* Prix */}
                                            {entry.award && (
                                                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-pagne-gold/30 bg-pagne-gold/10 px-3 py-0.5 font-mono text-[11px] text-pagne-gold">
                                                    ★ {entry.award}
                                                </p>
                                            )}

                                            {/* Séparateur pagne */}
                                            <div
                                                className="my-4"
                                                style={{ height: 1, backgroundImage: PAGNE, backgroundSize: '50px auto', backgroundRepeat: 'repeat', opacity: 0.10 }}
                                                aria-hidden="true"
                                            />

                                            {/* Description */}
                                            <p className="max-w-2xl text-sm leading-relaxed text-cream/65 sm:text-base">
                                                {entry.description}
                                            </p>

                                            {/* Source */}
                                            <a
                                                href={entry.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-cream/35 transition-opacity hover:opacity-70"
                                            >
                                                {entry.source} ↗
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <p className="mt-8 border-t border-cream/10 pt-6 font-mono text-[11px] text-cream/20">
                            Sélection Xwégbé · D'autres titres seront ajoutés progressivement.
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
