import { Head } from '@inertiajs/react';
import { FeaturedVideo } from '@/components/festival/featured-video';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';

const PAGNE = "url('/images/flat-african-pattern-design/6925962.jpg')";

type Accent = 'orange' | 'gold' | 'magenta' | 'teal' | 'green';


type Article = {
    id: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    source: string;
    sourceUrl: string;
    accent: Accent;
    imageUrl?: string;
};

const FEATURED: Article = {
    id: 'match-argentine-benin',
    category: 'Sport',
    date: '6 octobre 2026',
    title: 'Messi dit au revoir à l\'Argentine face au Bénin',
    excerpt: `Le 6 octobre 2026, à Buenos Aires, l'Argentine joue son match d'adieu avec Lionel Messi. En face, le Bénin. Avant le coup d'envoi, le capitaine béninois Sessi d'Almeida remet à Messi une réplique miniature de la statue de l'Amazone, guerrière du royaume du Dahomey. La délégation arbore le slogan « Bénin, Un Monde de Splendeurs ».`,
    source: 'lanouvelletribune.info',
    sourceUrl: 'https://lanouvelletribune.info/',
    accent: 'gold',
    imageUrl: '/images/benin/hero-foule.jpg',
};

const ARTICLES: Article[] = [
    {
        id: 'statuette-amazone-messi',
        category: 'Sport',
        date: '6 octobre 2026',
        title: 'Une Amazone pour la famille Messi',
        excerpt: `Avant le coup d'envoi, le capitaine béninois Sessi d'Almeida remet à Lionel Messi une petite statue de l'Amazone, guerrière du royaume du Dahomey — un cadeau symbolique qui parle du patrimoine et de l'histoire du Bénin.`,
        source: 'seneweb.com',
        sourceUrl: 'https://www.seneweb.com/',
        accent: 'teal',
        imageUrl: '/images/benin/moderne-statue.jpg',
    },
    {
        id: 'vodun-days-2026',
        category: 'Culture',
        date: 'Janvier 2026',
        title: 'Les Vodun Days d\'Ouidah : une 3e édition et des centaines de milliers de visiteurs',
        excerpt: `Du 8 au 10 janvier 2026, Ouidah a accueilli la 3e édition des Vodun Days, festival international dédié à la culture vodun. Lancé en 2024 avec 97 000 visiteurs, l'événement avait déjà rassemblé plus de 435 000 participants lors de sa 2e édition en 2025. Cérémonies rituelles, parades, concerts et village artisanal : les Vodun Days s'affirment comme l'un des grands rendez-vous culturels d'Afrique de l'Ouest.`,
        source: 'gouv.bj',
        sourceUrl: 'https://www.gouv.bj/article/3397/vodun-days-2026-ouidah-embellit-accueillir-evenement-dans-ferveur-populaire/',
        accent: 'orange',
    },
    {
        id: 'plan-tourisme',
        category: 'Économie',
        date: 'Juin 2025',
        title: 'Tourisme : le Bénin engage 797 milliards FCFA pour devenir une grande destination',
        excerpt: `Le Conseil des ministres a adopté un plan stratégique 2025-2029 doté de 797 milliards FCFA (~1,4 milliard USD), visant 2 millions de touristes par an et 13 % du PIB touristique à l'horizon 2030. Parmi les projets phares : un réseau de musées modernes dont le Musée de la Mémoire de l'esclavage à Ouidah et le Musée international du Vodun à Porto-Novo.`,
        source: 'beninwebtv.bj',
        sourceUrl: 'https://beninwebtv.bj/benin-600-milliards-fcfa-prevus-pour-le-tourisme-en-2027-cap-sur-13-du-pib-en-2030/',
        accent: 'gold',
    },
    {
        id: 'ihsane-karate',
        category: 'Sport',
        date: 'Septembre 2026',
        title: 'Karaté : à 16 ans, Ihsane Adjanonhoun enchaîne les titres',
        excerpt: `Numéro 1 africain et numéro 2 mondial junior (+76 kg), le Béninois Ihsane Adjanonhoun a décroché l'or à la Youth League de Guadalajara (sept. 2026) après son titre de champion d'Afrique à Alger. Il représente le Bénin aux Mondiaux cadets et juniors à Bielsko-Biała (Pologne), du 14 au 18 octobre 2026.`,
        source: 'lanouvelletribune.info',
        sourceUrl: 'https://lanouvelletribune.info/2026/09/karate-le-beninois-ihsane-adjanonhoun-decroche-lor-au-mexique/',
        accent: 'green',
    },
    {
        id: 'dahomey-film',
        category: 'Culture',
        date: 'Février 2024',
        title: '"Dahomey" de Mati Diop primé à la Berlinale — l\'Ours d\'or',
        excerpt: `Le documentaire de Mati Diop retrace le rapatriement des 26 trésors royaux du Danxomè pillés lors de la colonisation française et restitués en novembre 2021. Le film, porté par le gouvernement béninois, a remporté l'Ours d'or à la Berlinale 2024 — consécration internationale pour le patrimoine béninois.`,
        source: 'gouv.bj',
        sourceUrl: 'https://www.gouv.bj/article/2556/recompense-supreme-berlin-dahomey-benin-mise-histoire-restitution-tresors-royaux/',
        accent: 'magenta',
    },
    {
        id: 'afar-destination',
        category: 'Tourisme',
        date: 'Novembre 2024',
        title: 'Le Bénin dans le top des destinations 2025 selon AFAR et Lonely Planet',
        excerpt: `Le magazine américain AFAR a inscrit le Bénin dans sa sélection "Where to Go in 2025", après une présence remarquée dans la liste Lonely Planet. Une double reconnaissance internationale qui confirme l'attractivité croissante du pays auprès des voyageurs du monde entier.`,
        source: 'gouv.bj',
        sourceUrl: 'https://www.gouv.bj/article/2872/le-benin-classe-parmi-meilleures-destinations-decouvrir-2025-selon-prestigieux-media-afar/',
        accent: 'teal',
    },
    {
        id: 'senat-session',
        category: 'Institutions',
        date: 'Octobre 2026',
        title: 'Le Sénat béninois tient sa première session ordinaire',
        excerpt: `Instauré par la réforme constitutionnelle de 2024, le Sénat du Bénin a ouvert sa première session ordinaire le 7 octobre 2026. Cette chambre haute marque une évolution majeure de l'architecture institutionnelle du pays et un nouveau chapitre dans la vie parlementaire béninoise.`,
        source: 'lematinal.bj',
        sourceUrl: 'https://lematinal.bj/',
        accent: 'gold',
    },
    {
        id: 'wadagni-investiture',
        category: 'Politique',
        date: 'Mai 2026',
        title: 'Romuald Wadagni investi président de la République du Bénin',
        excerpt: `Élu le 12 avril 2026 avec plus de 94 % des suffrages, Romuald Wadagni a été officiellement investi président de la République du Bénin le 24 mai 2026. Ancien ministre des Finances, il succède à Patrice Talon et place le développement d'une économie diversifiée parmi les priorités de son mandat de sept ans.`,
        source: 'fr.apanews.net',
        sourceUrl: 'https://fr.apanews.net/tv/benin-romuald-wadagni-dauphin-de-talon-pour-2026-2/',
        accent: 'orange',
    },
];

function ArticleImage({ accent, imageUrl, alt }: { accent: Accent; imageUrl?: string; alt: string }) {
    const colors: Record<Accent, string> = {
        orange:  '#ff6b1a',
        gold:    '#f4b740',
        magenta: '#e8137c',
        teal:    '#14a8a3',
        green:   '#7a9a3c',
    };
    if (imageUrl) {
        return (
            <img
                src={imageUrl}
                alt={alt}
                className="h-full w-full object-cover"
            />
        );
    }
    return (
        <div
            className="h-full w-full"
            style={{
                backgroundImage: PAGNE,
                backgroundSize: '60px auto',
                backgroundRepeat: 'repeat',
            }}
            aria-hidden="true"
        >
            <div
                className="h-full w-full"
                style={{ background: `linear-gradient(135deg, ${colors[accent]}22 0%, #120a0855 100%)` }}
            />
        </div>
    );
}

export default function AlaUne() {
    return (
        <>
            <Head title="À la une — Xwégbé" />

            <div className="min-h-screen bg-night text-cream">
                {/* Header */}
                <header className="sticky top-0 z-30 flex items-center justify-between border-b border-cream/10 bg-night/90 px-6 py-4 backdrop-blur-sm sm:px-10">
                    <PagneHomeButton />
                </header>

                {/* Vidéo mise en valeur */}
                <div className="pt-8">
                    <FeaturedVideo />
                </div>

                {/* Page intro */}
                <div className="px-6 pb-4 pt-10 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-pagne-orange">01</p>
                        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">À la une</h1>
                        <p className="mt-4 max-w-xl text-base text-cream/55">
                            Sélection éditoriale — société, culture, sport, économie et initiatives au Bénin.
                        </p>
                    </div>
                </div>

                {/* Featured article */}
                <div className="px-6 py-8 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <article className="overflow-hidden rounded-2xl border border-cream/10 bg-night-elevated">
                            <div className="flex flex-col lg:flex-row">
                                {/* Image */}
                                <div className="relative aspect-video shrink-0 overflow-hidden lg:aspect-auto lg:h-auto lg:w-80 xl:w-96">
                                    <ArticleImage accent={FEATURED.accent} imageUrl={FEATURED.imageUrl} alt={FEATURED.title} />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10">
                                    <div>
                                        <div className="mb-4 flex flex-wrap items-center gap-3">
                                            <span className="rounded-full border border-cream/20 px-3 py-1 font-mono text-xs uppercase tracking-wider text-cream/60">
                                                {FEATURED.category}
                                            </span>
                                            <span className="font-mono text-xs text-cream/35">{FEATURED.date}</span>
                                        </div>
                                        <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl xl:text-4xl">
                                            {FEATURED.title}
                                        </h2>
                                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/65">
                                            {FEATURED.excerpt}
                                        </p>
                                    </div>
                                    <a
                                        href={FEATURED.sourceUrl}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 font-mono text-sm text-cream/70 transition-opacity hover:opacity-70"
                                    >
                                        Lire sur {FEATURED.source}
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Separator */}
                <div className="mx-auto max-w-6xl px-6 sm:px-10">
                    <div
                        className="my-2"
                        style={{ height: 2, backgroundImage: PAGNE, backgroundSize: '60px auto', backgroundRepeat: 'repeat', opacity: 0.15 }}
                        aria-hidden="true"
                    />
                </div>

                {/* Articles grid */}
                <div className="px-6 py-8 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {ARTICLES.map((article) => (
                                <article
                                    key={article.id}
                                    className="flex flex-col overflow-hidden rounded-xl border border-cream/10 transition-colors hover:border-cream/20"
                                >
                                    {/* Image */}
                                    <div className="relative h-36 overflow-hidden">
                                        <ArticleImage accent={article.accent} imageUrl={article.imageUrl} alt={article.title} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col gap-3 p-5">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="font-mono text-xs uppercase tracking-wider text-cream/45">
                                                {article.category}
                                            </span>
                                            <span className="font-mono text-xs text-cream/30">· {article.date}</span>
                                        </div>
                                        <h3 className="font-display text-lg font-extrabold leading-tight">
                                            {article.title}
                                        </h3>
                                        <p className="flex-1 text-sm leading-relaxed text-cream/55">
                                            {article.excerpt}
                                        </p>
                                        <a
                                            href={article.sourceUrl}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="mt-1 inline-flex items-center gap-1 font-mono text-xs text-cream/40 transition-opacity hover:opacity-70"
                                        >
                                            {article.source} ↗
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Attribution note */}
                        <p className="mt-10 text-center font-mono text-xs text-cream/20">
                            Sélection Xwégbé — sources citées pour chaque article. Les résumés sont rédigés par la rédaction ; pour l'article complet, suivre le lien source.
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
