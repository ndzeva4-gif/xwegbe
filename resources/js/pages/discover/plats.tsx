import { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';

const PAGNE = "url('/images/flat-african-pattern-design/6925962.jpg')";

type Accent = 'orange' | 'gold' | 'magenta' | 'teal' | 'green';



type Plat = {
    id: string;
    nom: string;
    autresNoms?: string[];
    region: string;
    moment: string;
    description: string;
    ingredients: string[];
    accompagnements: string[];
    contexte: string;
    accent: Accent;
    wikisource?: string;
    photo?: string;
};

const PLAT_VEDETTE: Plat = {
    id: 'amiwo',
    nom: 'Amiwo',
    autresNoms: ['Djèwô', 'Djèwɔ̌', 'pâte rouge'],
    region: 'Sud du Bénin — surtout Cotonou, Abomey, Porto-Novo',
    moment: 'Repas du midi ou du soir, plat du quotidien',
    photo: '/images/plats%20beninois/Amiwo%20With%20Grilled%20Chicken.jpg',
    description: `L'amiwo est l'une des spécialités les plus emblématiques de la cuisine béninoise du Sud. Son nom vient du fon et signifie littéralement « pâte rouge ». C'est une pâte de maïs cuite dans une sauce tomate relevée à l'huile de palme, qui lui confère sa couleur caractéristique. Sa préparation exige de la patience : il faut remuer continuellement pendant vingt à quarante minutes pour éviter les grumeaux et obtenir la texture ferme et homogène traditionnelle.`,
    ingredients: ['Farine de maïs', 'Tomates', 'Huile de palme rouge', 'Oignons', 'Ail', 'Piment', 'Sel', 'Parfois : crevettes séchées'],
    accompagnements: ['Poulet grillé', 'Poisson grillé ou fumé', 'Sauce tomate fraîche', 'Légumes sautés'],
    contexte: `Plat de référence dans les foyers fon du sud du Bénin, l'amiwo est servi lors des repas familiaux mais aussi dans de nombreux maquis et restaurants de rue. Sa couleur vive et son parfum d'huile de palme le rendent reconnaissable parmi tous les plats béninois.`,
    accent: 'orange',
    wikisource: 'https://fr.wikipedia.org/wiki/Amiw%C3%B4',
};

const PLATS: Plat[] = [
    {
        id: 'akassa',
        nom: 'Akassa',
        autresNoms: ['Gui (en fon)'],
        region: 'Sud du Bénin — côte et zones lacustres',
        moment: 'Repas principal, souvent le soir',
        photo: '/images/plats%20beninois/AKASSA.jpg',
        description: `L'akassa est une pâte de maïs fermentée, à la texture douce et légèrement acidulée. Elle est préparée à partir de maïs trempé et fermenté pendant un à trois jours, puis cuit à la vapeur, souvent enveloppé dans des feuilles de bananier qui lui confèrent une légère note végétale. Servie coupée en portions rondes, elle accompagne les grandes sauces béninoises.`,
        ingredients: ['Maïs fermenté', 'Eau', 'Feuilles de bananier (pour l\'enveloppe)'],
        accompagnements: ['Sauce graine (à base de noix de palme)', 'Poisson fumé', 'Crabe ou crevettes', 'Légumes'],
        contexte: `Plat ancré dans la tradition côtière et lacustre du Bénin, l'akassa est particulièrement associé aux communautés de pêcheurs. Sa fermentation lui donne des propriétés nutritives importantes. Il est vendu dans les marchés du Sud, souvent emballé dans ses feuilles caractéristiques.`,
        accent: 'gold',
        wikisource: 'https://en.wikipedia.org/wiki/Cuisine_of_Benin',
    },
    {
        id: 'watche',
        nom: 'Watché',
        autresNoms: ['Atassi (Sud)', 'Riz-haricots'],
        region: 'Tout le Bénin — Nord comme Sud',
        moment: 'Déjeuner (plat consistant, digestion longue)',
        photo: '/images/plats%20beninois/ATASSI.jpg',
        description: `Le watché est un plat de riz et de haricots cuits ensemble, omniprésent dans toutes les régions du Bénin. Dans le Sud, il porte le nom d'atassi et s'accompagne d'une sauce tomate frite. Dans le Nord, il est servi avec un piment assaisonné. C'est un plat énergétique, rassasiant, que les marchandes de rue proposent chaque matin dans leurs cantines.`,
        ingredients: ['Riz', 'Haricots rouges ou niébé', 'Huile de palme', 'Oignons', 'Sel', 'Épices'],
        accompagnements: ['Sauce tomate frite', 'Wagashi (fromage peul) grillé', 'Viande ou poisson selon le Nord/Sud', 'Piment frais'],
        contexte: `Plat populaire par excellence, le watché/atassi est l'une des premières recettes que les femmes béninoises apprennent à cuisiner. Sa polyvalence — il accepte de nombreux accompagnements — en fait un repas complet et accessible. Les cantines de rue le servent généralement accompagné d'un petit extra au choix.`,
        accent: 'magenta',
        wikisource: 'https://en.wikipedia.org/wiki/Cuisine_of_Benin',
    },
    {
        id: 'igname-pilee',
        nom: 'Igname pilée',
        autresNoms: ['Tchoukou', 'Agoué (Centre)', 'Tchokourou (Nord)'],
        region: 'Centre et Nord du Bénin — Abomey, Parakou, Savalou',
        moment: 'Plat des réjouissances, cérémonies, dimanches en famille',
        photo: '/images/plats%20beninois/IGNAMEPILE.jpg',
        description: `L'igname pilée est préparée à partir d'ignames bouillies puis pilées dans un grand mortier en bois, dans un effort collectif qui rassemble souvent plusieurs personnes. La pâte obtenue est élastique et dense. Elle exige une technique précise : les coups de pilon alternés, le geste maîtrisé pour ne pas laisser de grumeaux, font de sa préparation un art transmis de génération en génération.`,
        ingredients: ['Ignames fraîches', 'Eau'],
        accompagnements: ['Sauce graine (noix de palme)', 'Sauce arachide', 'Sauce de légumes', 'Poisson ou viande'],
        contexte: `À Savalou, l'igname pilée est le « plat des réjouissances ». Dans le Nord, les familles la préparent les dimanches et lors des cérémonies. Sa préparation est un moment communautaire fort, souvent sonore — le bruit des pilons rythme les quartiers le matin des fêtes. Au Centre, on l'appelle agoué ; au Nord, tchokourou.`,
        accent: 'teal',
        wikisource: 'https://www.afrik.com/l-igname-pilee-mets-beninois-par-excellence',
    },
    {
        id: 'aloko',
        nom: 'Aloko',
        autresNoms: ['Dodo (Yoruba)', 'Alloco (Côte d\'Ivoire)', 'Plantain frit'],
        region: 'Tout le Bénin — Sud en particulier',
        moment: 'En-cas, accompagnement, vente de rue',
        photo: '/images/plats%20beninois/ALOCO.jpg',
        description: `L'aloko est simplement du plantain frit — des tranches de banane plantain mûre, plongées dans l'huile chaude jusqu'à obtenir une texture dorée et légèrement caramélisée. Simple dans sa préparation, il est universel dans sa consommation : vendu en bord de route, en accompagnement d'un plat principal, ou simplement grignoté en rentrant du marché. Sa douceur naturelle contraste souvent avec un piment servi à côté.`,
        ingredients: ['Banane plantain mûre', 'Huile végétale', 'Sel (optionnel)'],
        accompagnements: ['Piment frais', 'Poisson frit ou grillé', 'Œuf à la poêle', 'Haricots frits'],
        contexte: `Présent dans toute l'Afrique de l'Ouest, l'aloko est au Bénin (où on dit aussi "dodo") un snack du quotidien. Les vendeuses ambulantes l'emballent dans du papier journal ou des sacs en plastique. C'est souvent l'un des premiers plats africains que découvrent les visiteurs étrangers.`,
        accent: 'orange',
        wikisource: 'https://en.wikipedia.org/wiki/Fried_plantain',
    },
    {
        id: 'wagashi',
        nom: 'Wagashi',
        autresNoms: ['Wagasi', 'Gassirè', 'Amo (Fon)', 'Wara (Nagot/Yoruba)', 'Gasaru (Bariba)'],
        region: 'Nord du Bénin — Parakou, Borgou, Atacora',
        moment: 'Ingrédient polyvalent — dans les plats ou grillé à part',
        photo: '/images/plats%20beninois/WAGASHI%20FROMAGE.jpg',
        description: `Le wagashi est un fromage frais à pâte molle fabriqué à partir de lait de vache entier, traditionnel des éleveurs peuls (Fulani) du Nord du Bénin. Le lait est chauffé puis coagulé grâce à l'extrait d'une plante locale (généralement Calotropis procera), puis le caillé est égoutté et pressé en petites meules rondes. Le résultat est un fromage blanc et doux, légèrement acide, qui peut être consommé frais ou grillé.`,
        ingredients: ['Lait de vache entier', 'Coagulant végétal (Calotropis procera)'],
        accompagnements: ['Watché/Atassi', 'Légumes sautés', 'Sauce tomate', 'En accompagnement de tout plat principal'],
        contexte: `Le wagashi est le produit laitier le plus consommé au Bénin. Produit surtout dans le Nord où l'élevage bovin est plus développé, il est ensuite commercialisé dans tout le pays. Les marchands le transportent sur des plateaux en équilibre sur la tête dans les marchés. Une indication géographique "Wagashi Gassirè" est en cours d'établissement, avec l'appui du GRET et du CIRAD (depuis 2023).`,
        accent: 'gold',
        wikisource: 'https://en.wikipedia.org/wiki/Wagasi',
    },
    {
        id: 'poulet-bicyclette',
        nom: 'Poulet bicyclette',
        autresNoms: ['Poulet local', 'Poulet de race locale'],
        region: 'Tout le Bénin',
        moment: 'Repas des fêtes, cérémonies, plat de prestige',
        photo: '/images/plats%20beninois/POULETBICYCLETTE.jpg',
        description: `Le « poulet bicyclette » est le nom populaire donné au poulet local béninois, élevé en liberté dans les villages, nourri de grains et de restes de cuisine. À croissance naturellement lente, sa viande est ferme, dense et particulièrement savoureuse — très différente du poulet de chair industriel. Les Béninois lui préfèrent nettement les qualités gustatives pour les repas importants. Il se prépare grillé, en sauce tomate, en sauce arachide ou accompagné d'igname pilée.`,
        ingredients: ['Poulet local', 'Piment', 'Tomates', 'Oignons', 'Ail', 'Gingembre', 'Épices locales'],
        accompagnements: ['Igname pilée', 'Amiwo', 'Riz blanc', 'Pain béninois'],
        contexte: `L'élevage du poulet bicyclette est surtout pratiqué par les femmes dans les zones rurales. Le gouvernement béninois a annoncé en 2024 l'arrêt des importations de poulets congelés pour soutenir cette filière locale. Son nom viendrait du fait que les marchands le transportaient à bicyclette pour le vendre dans les villages voisins.`,
        accent: 'magenta',
        wikisource: 'https://en.wikipedia.org/wiki/Cuisine_of_Benin',
    },
];

/* ── Composant image (photo réelle ou pagne) ── */
function PlatImage({ accent, photo, alt }: { accent: Accent; photo?: string; alt?: string }) {
    if (photo) {
        return <img src={photo} alt={alt ?? ''} className="h-full w-full object-cover" />;
    }
    const colors: Record<Accent, string> = {
        orange: '#ff6b1a', gold: '#f4b740', magenta: '#e8137c', teal: '#14a8a3', green: '#7a9a3c',
    };
    return (
        <div className="h-full w-full" style={{ backgroundImage: PAGNE, backgroundSize: '50px auto', backgroundRepeat: 'repeat' }} aria-hidden="true">
            <div className="h-full w-full" style={{ background: `linear-gradient(145deg, ${colors[accent]}30 0%, #120a0875 100%)` }} />
        </div>
    );
}

/* ── Tag pill ── */
function TagPill({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block rounded-full border border-cream/10 bg-cream/5 px-2.5 py-0.5 font-mono text-xs text-cream/55">
            {children}
        </span>
    );
}

/* ── Modal de détail ── */
function PlatModal({ plat, onClose }: { plat: Plat; onClose: () => void }) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
            style={{ background: 'rgba(12,6,4,0.88)', backdropFilter: 'blur(10px)' }}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={plat.nom}
        >
            {/* Panneau */}
            <div
                className="relative w-full overflow-y-auto rounded-t-2xl bg-night-elevated sm:max-w-2xl sm:rounded-2xl"
                style={{ maxHeight: '92svh', border: '1px solid rgba(253,251,249,0.10)' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image plein-cadre */}
                <div className="relative aspect-video w-full overflow-hidden sm:rounded-t-2xl">
                    <PlatImage accent={plat.accent} photo={plat.photo} alt={plat.nom} />
                    {!plat.photo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-mono text-xs uppercase tracking-widest text-cream/20">Image à venir</span>
                        </div>
                    )}
                    {/* Fermer */}
                    <button
                        onClick={onClose}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 bg-night/70 text-cream backdrop-blur-sm transition-colors hover:border-cream/50"
                        aria-label="Fermer"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    </button>
                    {/* Fondu bas */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16" style={{ background: 'linear-gradient(to top, var(--color-night-elevated), transparent)' }} aria-hidden="true" />
                </div>

                {/* Corps */}
                <div className="flex flex-col gap-5 px-6 pb-8 pt-4 sm:px-8">
                    {/* En-tête */}
                    <div>
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs uppercase tracking-wider text-cream/45">{plat.region}</span>
                        </div>
                        <h2 className="font-display text-3xl font-extrabold">{plat.nom}</h2>
                        {plat.autresNoms && (
                            <p className="mt-1 font-mono text-xs text-cream/40">{plat.autresNoms.join(' · ')}</p>
                        )}
                        <p className="mt-1 font-mono text-xs text-cream/30">{plat.moment}</p>
                    </div>

                    {/* Séparateur pagne */}
                    <div style={{ height: 2, backgroundImage: PAGNE, backgroundSize: '50px auto', backgroundRepeat: 'repeat', opacity: 0.12 }} aria-hidden="true" />

                    {/* Description */}
                    <p className="text-base leading-relaxed text-cream/75">{plat.description}</p>

                    {/* Ingrédients + Accompagnements */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-cream/45">Ingrédients</p>
                            <div className="flex flex-wrap gap-1.5">
                                {plat.ingredients.map((i) => <TagPill key={i}>{i}</TagPill>)}
                            </div>
                        </div>
                        <div>
                            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-cream/45">Accompagnements</p>
                            <div className="flex flex-wrap gap-1.5">
                                {plat.accompagnements.map((a) => <TagPill key={a}>{a}</TagPill>)}
                            </div>
                        </div>
                    </div>

                    {/* Contexte */}
                    <p className="text-sm italic leading-relaxed text-cream/50">{plat.contexte}</p>

                    {/* Lien source */}
                    {plat.wikisource && (
                        <a
                            href={plat.wikisource}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 font-mono text-sm text-cream/65 transition-opacity hover:opacity-70"
                        >
                            En savoir plus — Wikipédia ↗
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ── Page principale ── */
export default function PlatsBeninois() {
    const [selectedPlat, setSelectedPlat] = useState<Plat | null>(null);

    return (
        <>
            <Head title="Plats béninois — Xwégbé" />

            <div className="min-h-screen bg-night text-cream">
                {/* Header */}
                <header className="sticky top-0 z-30 flex items-center justify-between border-b border-cream/10 bg-night/90 px-6 py-4 backdrop-blur-sm sm:px-10">
                    <PagneHomeButton />
                </header>

                {/* Page intro */}
                <div className="px-6 pb-4 pt-10 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-pagne-gold">02</p>
                        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Plats béninois</h1>
                        <p className="mt-4 max-w-xl text-base text-cream/55">
                            Découvrez les saveurs du Bénin — du Nord au Sud, des plats du quotidien aux mets des grandes cérémonies.
                            <span className="ml-1 font-mono text-xs text-cream/30">Appuie sur un plat pour en savoir plus.</span>
                        </p>
                    </div>
                </div>

                {/* Plat vedette */}
                <div className="px-6 py-8 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <button
                            type="button"
                            onClick={() => setSelectedPlat(PLAT_VEDETTE)}
                            className="group w-full overflow-hidden rounded-2xl border border-cream/10 bg-night-elevated text-left transition-colors hover:border-cream/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream/30"
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Image */}
                                <div className="relative overflow-hidden lg:h-auto lg:w-80 xl:w-96" style={{ aspectRatio: '16/9' }}>
                                    <PlatImage accent={PLAT_VEDETTE.accent} photo={PLAT_VEDETTE.photo} alt={PLAT_VEDETTE.nom} />
                                    <div className="absolute inset-0 bg-night/0 transition-colors group-hover:bg-night/10" aria-hidden="true" />
                                </div>

                                {/* Contenu */}
                                <div className="flex flex-col gap-5 p-6 sm:p-8 lg:p-10">
                                    <div>
                                        <div className="mb-3 flex flex-wrap items-center gap-2">
                                            <span className="rounded-full border border-cream/20 px-3 py-1 font-mono text-xs uppercase tracking-wider text-cream/55">Plat vedette</span>
                                            <span className="font-mono text-xs text-cream/35">{PLAT_VEDETTE.region}</span>
                                        </div>
                                        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{PLAT_VEDETTE.nom}</h2>
                                        {PLAT_VEDETTE.autresNoms && (
                                            <p className="mt-1 font-mono text-xs text-cream/40">Aussi connu comme : {PLAT_VEDETTE.autresNoms.join(', ')}</p>
                                        )}
                                    </div>
                                    <p className="max-w-2xl text-base leading-relaxed text-cream/70">{PLAT_VEDETTE.description}</p>
                                    <p className="font-mono text-xs text-cream/40 transition-opacity group-hover:text-cream/70">
                                        Voir tous les détails →
                                    </p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Séparateur pagne */}
                <div className="mx-auto max-w-6xl px-6 sm:px-10">
                    <div style={{ height: 2, backgroundImage: PAGNE, backgroundSize: '60px auto', backgroundRepeat: 'repeat', opacity: 0.15 }} aria-hidden="true" />
                </div>

                {/* Grille des plats */}
                <div className="px-6 py-8 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {PLATS.map((plat) => (
                                <button
                                    key={plat.id}
                                    type="button"
                                    onClick={() => setSelectedPlat(plat)}
                                    className="group flex flex-col overflow-hidden rounded-xl border border-cream/10 text-left transition-colors hover:border-cream/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pagne-gold"
                                >
                                    {/* Image — hauteur généreuse */}
                                    <div className="relative h-52 overflow-hidden">
                                        <PlatImage accent={plat.accent} photo={plat.photo} alt={plat.nom} />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-night/0 transition-colors group-hover:bg-night/30" aria-hidden="true" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                            <span className="rounded-full border border-cream/40 bg-night/60 px-4 py-2 font-mono text-xs text-cream backdrop-blur-sm">
                                                Voir le plat
                                            </span>
                                        </div>
                                        {!plat.photo && (
                                            <div className="absolute inset-0 flex items-end p-3">
                                                <span className="font-mono text-xs uppercase tracking-widest text-cream/20">Image à venir</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Contenu */}
                                    <div className="flex flex-1 flex-col gap-3 p-5">
                                        <div>
                                            <h3 className="font-display text-xl font-extrabold">{plat.nom}</h3>
                                            {plat.autresNoms && (
                                                <p className="mt-0.5 font-mono text-xs text-cream/35">{plat.autresNoms.slice(0, 2).join(' · ')}</p>
                                            )}
                                            <p className="mt-1 font-mono text-xs text-cream/40">{plat.region}</p>
                                        </div>
                                        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-cream/60">{plat.description}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {plat.ingredients.slice(0, 3).map((i) => (
                                                <span key={i} className="inline-block rounded-full border border-cream/10 bg-cream/5 px-2 py-0.5 font-mono text-xs text-cream/45">{i}</span>
                                            ))}
                                            {plat.ingredients.length > 3 && (
                                                <span className="inline-block rounded-full border border-cream/10 bg-cream/5 px-2 py-0.5 font-mono text-xs text-cream/45">+{plat.ingredients.length - 3}</span>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Note éditoriale */}
                        <div className="mt-12 rounded-xl border border-cream/8 bg-cream/3 p-6 text-center">
                            <p className="font-mono text-xs uppercase tracking-widest text-cream/30">Guide de découverte</p>
                            <p className="mt-2 text-sm text-cream/45">
                                Cette sélection présente les plats les plus représentatifs de la gastronomie béninoise.
                                La cuisine béninoise est vaste — chaque région, chaque communauté a ses spécialités.
                                Elle sera enrichie progressivement.
                            </p>
                        </div>
                    </div>
                </div>

                <footer className="px-6 py-8 text-center font-mono text-xs text-cream/25 sm:px-10">
                    <a href="/" className="transition-colors hover:text-cream/50">← Xwégbé</a>
                </footer>
            </div>

            {/* Modal */}
            {selectedPlat && <PlatModal plat={selectedPlat} onClose={() => setSelectedPlat(null)} />}
        </>
    );
}
