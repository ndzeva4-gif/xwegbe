import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';

const PAGNE = "url('/images/flat-african-pattern-design/6925962.jpg')";

type Restaurant = {
    id: string;
    name: string;
    cuisines: string[];
    quartier: string;
    description: string;
    image?: string;
    website?: string;
    websiteLabel?: string;
};

const VEDETTE: Restaurant = {
    id: 'face-a-la-mer',
    name: 'Face À La Mer',
    cuisines: ['Italienne', 'Française', 'Fruits de mer'],
    quartier: 'Haie Vive, Cotonou',
    description:
        "L'une des adresses les plus emblématiques de Cotonou. Terrasse face à l'Atlantique, menu ancré dans les saveurs italiennes et françaises avec une belle sélection de poissons et fruits de mer. Ambiance soignée, vue sur l'océan — une table de référence pour les sorties importantes.",
    image: '/images/restaurants/facealamer.jpg',
    website: 'https://www.facebook.com/FaceALaMerCotonou/',
    websiteLabel: 'facebook.com',
};

const RESTAURANTS: Restaurant[] = [
    {
        id: 'cabane-pecheur',
        name: 'La Cabane du Pêcheur',
        cuisines: ['Française', 'Africaine', 'Poisson frais'],
        quartier: 'Bord de mer, Cotonou',
        description:
            "Restaurant de plage au toit de chaume, spécialisé dans les poissons frais et le barbecue. Un coin authentique qui mêle influences françaises et cuisine africaine. La table préférée des familles pour les déjeuners du dimanche en bord de mer.",
        image: '/images/restaurants/tartare-de-thon.jpg',
    },
    {
        id: 'jaaba',
        name: 'Jaaba — Grill & Bar',
        cuisines: ['Africaine', 'Internationale', 'Grillades'],
        quartier: 'Cotonou',
        description:
            "Restaurant-bar de nouvelle génération, esprit panafricain. Viandes grillées, cocktails créatifs, ambiance animée en soirée. Jaaba incarne la scène gastronomique contemporaine de Cotonou — entre héritage local et influences modernes.",
        image: '/images/restaurants/jaaba.jpg',
    },
    {
        id: 'livingstone',
        name: 'Livingstone',
        cuisines: ['Bar', 'Pizza', 'Burgers'],
        quartier: 'Cotonou',
        description:
            "Lieu de rendez-vous historique de la communauté internationale à Cotonou. Terrasse ombragée, pizzas, burgers et bières bien fraîches. L'adresse de référence pour une soirée décontractée en ville.",
        image: '/images/restaurants/livingstone.jpg',
    },
    {
        id: 'imprevu',
        name: "L'Imprévu",
        cuisines: ['Française', 'Italienne'],
        quartier: 'Cotonou',
        description:
            "Bistrot discret et régulier, plébiscité par les expatriés et les habitués. Cuisine française classique, pâtes maison, service attentif. L'une de ces tables où l'on revient sans se tromper.",
        image: '/images/restaurants/imprevu.jpg',
    },
    {
        id: 'maquis-du-port',
        name: 'Maquis du Port',
        cuisines: ['Africaine', 'Cuisine locale'],
        quartier: 'Zone portuaire, Cotonou',
        description:
            "Maquis traditionnel ancré dans le quotidien du port. Poissons grillés, riz au gras, sauces locales — des assiettes généreuses à prix doux. Le genre d'endroit simple, sans chichi, où la cuisine parle pour elle-même.",
        image: '/images/restaurants/maquisduport.jpg',
    },
    {
        id: 'bangkok-terrasse',
        name: 'Bangkok Terrasse',
        cuisines: ['Thaïe', 'Asiatique'],
        quartier: 'Cotonou',
        description:
            "L'une des rares tables thaïes de Cotonou. Pad thaï, currys parfumés, soupes de nouilles — une parenthèse asiatique en plein cœur de la ville. Terrasse agréable le soir pour dîner en plein air.",
        image: '/images/restaurants/Bangkokterasse.jpg',
    },
    {
        id: 'shamiana',
        name: 'Shamiana',
        cuisines: ['Indienne', 'Végétarienne'],
        quartier: 'Cotonou',
        description:
            "La référence indienne de Cotonou. Currys, tandoori, biryanis et pains naan — une carte généreuse fidèle aux grandes saveurs du sous-continent. Fréquenté par la communauté sud-asiatique et les amateurs d'épices.",
        image: '/images/restaurants/Shamania.jpg',
    },
    {
        id: 'wasabi',
        name: 'Wasabi Sushi Bar',
        cuisines: ['Japonaise', 'Sushis'],
        quartier: 'Cotonou',
        description:
            "Bar à sushis moderne au cœur de Cotonou. Rolls au saumon, tatakis, spécialités japonaises dans une ambiance épurée. Représentatif de la diversité culinaire internationale qui s'est développée dans la ville.",
        image: '/images/restaurants/Wasabisushibar.jpg',
    },
    {
        id: 'rousski-dom',
        name: 'Rousski Dom',
        cuisines: ['Russe', 'Européenne'],
        quartier: 'Cotonou',
        description:
            "Une anomalie bienvenue en Afrique de l'Ouest : un restaurant russe et européen. Borsch, pelmeni et plats du continent dans un décor dépaysant. Une curiosité gastronomique que les Cotonois connaisseurs gardent précieusement.",
        image: '/images/restaurants/RousskiDom.jpg',
    },
];

function RestoCard({ resto, index }: { resto: Restaurant; index: number }) {
    const [open, setOpen] = useState(false);
    const PREVIEW_LEN = 100;
    const isLong = resto.description.length > PREVIEW_LEN;
    const preview = isLong ? resto.description.slice(0, PREVIEW_LEN).trimEnd() + '…' : resto.description;

    return (
        <article className="flex flex-col overflow-hidden rounded-xl border border-cream/10 transition-colors hover:border-cream/20">
            {/* Photo */}
            {resto.image ? (
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img src={resto.image} alt={`${resto.name} — ${resto.quartier}`} className="h-full w-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(12,6,4,0.55) 100%)' }} aria-hidden="true" />
                </div>
            ) : (
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9', backgroundImage: PAGNE, backgroundSize: '45px auto', backgroundRepeat: 'repeat', opacity: 0.25 }} aria-hidden="true" />
            )}

            {/* Contenu */}
            <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                    <p className="font-mono text-[10px] text-cream/30">{String(index).padStart(2, '0')} · {resto.quartier}</p>
                    <h2 className="mt-1 font-display text-xl font-extrabold leading-tight">{resto.name}</h2>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {resto.cuisines.map((c) => <CuisineTag key={c} label={c} />)}
                </div>

                <p className="flex-1 text-sm leading-relaxed text-cream/60">
                    {open || !isLong ? resto.description : preview}
                </p>

                {isLong && (
                    <button type="button" onClick={() => setOpen(!open)} className="self-start font-mono text-xs text-cream/40 underline underline-offset-2 hover:text-cream/70">
                        {open ? 'Réduire' : 'Lire la suite'}
                    </button>
                )}

                {resto.website && (
                    <a href={resto.website} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 font-mono text-xs text-cream/35 transition-opacity hover:opacity-70">
                        {resto.websiteLabel ?? 'Voir le site'} ↗
                    </a>
                )}
            </div>
        </article>
    );
}

function CuisineTag({ label }: { label: string }) {
    return (
        <span className="inline-block rounded-full border border-cream/10 bg-cream/5 px-2.5 py-0.5 font-mono text-xs text-cream/50">
            {label}
        </span>
    );
}

export default function Restaurants() {
    return (
        <>
            <Head title="Restaurants — Xwégbé" />

            <div className="min-h-screen bg-night text-cream">
                <header className="sticky top-0 z-30 flex items-center justify-between border-b border-cream/10 bg-night/90 px-6 py-4 backdrop-blur-sm sm:px-10">
                    <PagneHomeButton />
                </header>

                {/* Intro */}
                <div className="px-6 pb-4 pt-10 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-pagne-magenta">03</p>
                        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Restaurants</h1>
                        <p className="mt-4 max-w-xl text-base text-cream/55">
                            Sélection de tables à Cotonou — cuisine africaine, internationale et d'ailleurs.
                        </p>
                    </div>
                </div>

                {/* Restaurant vedette */}
                <div className="px-6 py-8 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <article className="overflow-hidden rounded-2xl border border-cream/10 bg-night-elevated">
                            <div className="flex flex-col lg:flex-row">
                                {/* Visuel vedette */}
                                <div
                                    className="relative shrink-0 overflow-hidden lg:w-72 xl:w-80"
                                    style={{ aspectRatio: '4/3' }}
                                >
                                    {VEDETTE.image ? (
                                        <img
                                            src={VEDETTE.image}
                                            alt={`${VEDETTE.name} — ${VEDETTE.quartier}`}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div
                                            className="h-full w-full"
                                            style={{ backgroundImage: PAGNE, backgroundSize: '55px auto', backgroundRepeat: 'repeat' }}
                                            aria-hidden="true"
                                        />
                                    )}
                                    <div
                                        className="absolute inset-0"
                                        style={{ background: 'linear-gradient(145deg, rgba(232,19,124,0.10) 0%, rgba(12,6,4,0.45) 100%)' }}
                                        aria-hidden="true"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-cream/60">Table vedette</p>
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10">
                                    <div>
                                        <p className="font-mono text-xs text-cream/35">{VEDETTE.quartier}</p>
                                        <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">{VEDETTE.name}</h2>
                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            {VEDETTE.cuisines.map((c) => <CuisineTag key={c} label={c} />)}
                                        </div>
                                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/65">
                                            {VEDETTE.description}
                                        </p>
                                    </div>
                                    {VEDETTE.website && (
                                        <a
                                            href={VEDETTE.website}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 font-mono text-sm text-cream/65 transition-opacity hover:opacity-70"
                                        >
                                            {VEDETTE.websiteLabel ?? VEDETTE.website} ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Séparateur pagne */}
                <div className="mx-auto max-w-6xl px-6 sm:px-10">
                    <div
                        style={{ height: 2, backgroundImage: PAGNE, backgroundSize: '60px auto', backgroundRepeat: 'repeat', opacity: 0.15 }}
                        aria-hidden="true"
                    />
                </div>

                {/* Grille des restaurants */}
                <div className="px-6 py-8 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {RESTAURANTS.map((resto, i) => (
                                <RestoCard key={resto.id} resto={resto} index={i + 2} />
                            ))}
                        </div>

                        <p className="mt-10 text-center font-mono text-xs text-cream/20">
                            Sélection Xwégbé · Cotonou. Les liens et informations pratiques sont ajoutés progressivement.
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
