const TOPICS = [
    {
        id: 'horizon-plats',
        number: '01',
        title: 'Plats béninois',
        description: 'L’atassi en tête de notre sélection éditoriale.',
        accent: 'text-pagne-orange',
    },
    {
        id: 'horizon-restaurants',
        number: '02',
        title: 'Restaurants 100 % béninois',
        description: 'Des adresses présentées après vérification.',
        accent: 'text-pagne-magenta',
    },
    {
        id: 'horizon-marques',
        number: '03',
        title: 'Marques Made in Bénin',
        description: 'Des marques locales et leurs liens officiels.',
        accent: 'text-pagne-gold',
    },
    {
        id: 'horizon-createurs',
        number: '04',
        title: 'Créateurs et pages Instagram',
        description: 'Des portraits écrits pour Xwégbé, sans reprendre leurs photos.',
        accent: 'text-pagne-teal',
    },
    {
        id: 'horizon-documentaires',
        number: '05',
        title: 'Documentaires',
        description: 'Des œuvres à voir chez leurs diffuseurs officiels.',
        accent: 'text-pagne-green',
    },
    {
        id: 'horizon-actualites',
        number: '06',
        title: 'Actualités',
        description: 'Un titre et un lien vers la source, jamais un article recopié.',
        accent: 'text-pagne-red',
    },
    {
        id: 'horizon-infos',
        number: '07',
        title: 'Infos pratiques',
        description: 'Des repères sourcés pour préparer une découverte du Bénin.',
        accent: 'text-pagne-orange',
    },
    {
        id: 'horizon-evenements',
        number: '08',
        title: 'Événements',
        description: 'Des rendez-vous présentés avec leurs dates et sources vérifiées.',
        accent: 'text-pagne-magenta',
    },
    {
        id: 'horizon-culture',
        number: '09',
        title: 'Culture & héritage',
        description: 'Des récits et pratiques abordés avec respect et précision.',
        accent: 'text-pagne-teal',
    },
    {
        id: 'horizon-sites',
        number: '10',
        title: 'Sites à visiter',
        description: 'Des lieux accompagnés d’informations vérifiées.',
        accent: 'text-pagne-green',
    },
    {
        id: 'horizon-moderne',
        number: '11',
        title: 'Bénin moderne',
        description: 'Des initiatives présentées à partir de leurs sources.',
        accent: 'text-pagne-gold',
    },
    {
        id: 'horizon-avenir',
        number: '12',
        title: 'Projets d’avenir',
        description: 'Des projets reliés à des informations officielles.',
        accent: 'text-pagne-red',
    },
];

export function DiscoverIndex() {
    return (
        <section
            id="decouvrir"
            aria-labelledby="discover-heading"
            className="scroll-mt-24 bg-night-elevated px-5 py-16 text-cream sm:px-8 sm:py-20"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-8 border-b border-cream/15 pb-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
                    <div>
                        <p className="font-mono text-xs text-pagne-gold">
                            NOS PISTES
                        </p>
                        <h2
                            id="discover-heading"
                            className="mt-3 font-display text-4xl leading-tight font-extrabold sm:text-5xl"
                        >
                            Découvrir
                            <span className="block text-pagne-orange">
                                le Bénin
                            </span>
                        </h2>
                    </div>
                    <p className="max-w-xl self-end text-base leading-relaxed text-cream/65 sm:text-lg">
                        Des saveurs aux idées, des adresses aux récits : une
                        sélection éditoriale à parcourir, toujours reliée à ses
                        sources.
                    </p>
                </div>

                <ol className="divide-y divide-cream/10">
                    {TOPICS.map((topic) => (
                        <li
                            key={topic.number}
                            id={
                                topic.id === 'horizon-marques' ||
                                topic.id === 'horizon-createurs'
                                    ? undefined
                                    : topic.id
                            }
                            className="scroll-mt-20 grid gap-2 py-5 sm:grid-cols-[3.5rem_minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-baseline sm:gap-5 sm:py-6"
                        >
                            <span
                                className={`font-mono text-xs ${topic.accent}`}
                            >
                                {topic.number}
                            </span>
                            <h3 className="font-display text-lg font-semibold sm:text-xl">
                                {topic.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-cream/60 sm:text-base">
                                {topic.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}