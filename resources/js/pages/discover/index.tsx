import { useMemo, useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';
import { CreatorCard, type Creator, maxFollowers } from '@/components/festival/creator-card';
import { dashboard, login, register } from '@/routes';
import { index as discoverIndex } from '@/routes/discover';

type Props = {
    pillar: string | null;
    entries: Creator[];
};

const FILTER_CATEGORIES = [
    { id: 'all',                label: 'Tous'             },
    { id: 'Divertissement',     label: 'Divertissement'   },
    { id: 'Humour',             label: 'Humour'           },
    { id: 'Musique',            label: 'Musique'          },
    { id: 'Food',               label: 'Food'             },
    { id: 'Lifestyle',          label: 'Lifestyle'        },
    { id: 'Éducation',          label: 'Éducation'        },
    { id: 'Actualité / Société',label: 'Actualité'        },
    { id: 'Mode / Lifestyle',   label: 'Mode'             },
] as const;

const PLATFORM_FILTERS = [
    { id: 'all',       label: 'Toutes plateformes' },
    { id: 'tiktok',    label: 'TikTok'             },
    { id: 'instagram', label: 'Instagram'           },
] as const;

const SORT_OPTIONS = [
    { id: 'followers',   label: 'Plus suivis'  },
    { id: 'name',        label: 'Nom A → Z'    },
    { id: 'engagement',  label: 'Engagement'   },
] as const;

type SortId = (typeof SORT_OPTIONS)[number]['id'];

function CreateursPage({ creators }: { creators: Creator[] }) {
    const [search,   setSearch  ] = useState('');
    const [category, setCategory] = useState('all');
    const [platform, setPlatform] = useState('all');
    const [sort,     setSort    ] = useState<SortId>('followers');

    const filtered = useMemo(() => {
        return creators
            .filter((c) => {
                const m = c.metadata;
                if (search.trim()) {
                    const q = search.toLowerCase();
                    const hit =
                        c.title.toLowerCase().includes(q) ||
                        (m.username?.toLowerCase().includes(q) ?? false) ||
                        (m.category?.toLowerCase().includes(q) ?? false) ||
                        (m.city?.toLowerCase().includes(q) ?? false) ||
                        m.content_type.some((t) => t.toLowerCase().includes(q));
                    if (!hit) return false;
                }
                if (category !== 'all' && m.category !== category) return false;
                if (platform !== 'all') {
                    const f = m.followers[platform as 'tiktok' | 'instagram'];
                    if (!f || f === 0) return false;
                }
                return true;
            })
            .sort((a, b) => {
                if (sort === 'name')       return a.title.localeCompare(b.title, 'fr');
                if (sort === 'engagement') {
                    return (b.metadata.engagement_rate ?? -1) - (a.metadata.engagement_rate ?? -1);
                }
                return maxFollowers(b.metadata) - maxFollowers(a.metadata);
            });
    }, [creators, search, category, platform, sort]);

    const handleClear = () => {
        setSearch('');
        setCategory('all');
        setPlatform('all');
        setSort('followers');
    };

    const hasFilters = search !== '' || category !== 'all' || platform !== 'all' || sort !== 'followers';

    return (
        <div className="min-h-screen bg-night text-cream">
            {/* Hero */}
            <section className="border-b border-cream/10 px-6 pb-10 pt-12 sm:px-10 sm:pt-16">
                <div className="mx-auto max-w-6xl">
                    <p className="font-mono text-xs text-pagne-teal uppercase tracking-widest">
                        CRÉATEURS BÉNINOIS
                    </p>
                    <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                        Créateurs
                        <span className="block text-pagne-orange">à découvrir</span>
                    </h1>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/60 sm:text-lg">
                        {creators.length} créateurs béninois répertoriés. Les chiffres
                        d'abonnés sont indicatifs et datés — consultez directement leurs
                        profils pour les données à jour.
                    </p>
                </div>
            </section>

            {/* Barre de recherche + filtres */}
            <section
                aria-label="Recherche et filtres"
                className="sticky top-[61px] z-30 border-b border-cream/10 bg-night/95 px-6 py-4 backdrop-blur-sm sm:px-10"
            >
                <div className="mx-auto max-w-6xl space-y-3">
                    {/* Recherche */}
                    <div className="flex gap-3">
                        <label htmlFor="creator-search" className="sr-only">
                            Rechercher un créateur
                        </label>
                        <div className="relative flex-1">
                            <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-cream/35"
                                aria-hidden="true"
                            >
                                <circle cx="8.5" cy="8.5" r="5.5" />
                                <path strokeLinecap="round" d="m13 13 3.5 3.5" />
                            </svg>
                            <input
                                id="creator-search"
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Nom, @username, catégorie, ville…"
                                className="h-10 w-full rounded-lg border border-cream/15 bg-night-elevated pl-9 pr-3 text-sm text-cream placeholder-cream/30 outline-none focus:border-pagne-gold/50 focus:ring-1 focus:ring-pagne-gold/30"
                            />
                        </div>
                        {/* Tri */}
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value as SortId)}
                            aria-label="Trier par"
                            className="h-10 rounded-lg border border-cream/15 bg-night-elevated px-3 text-sm text-cream/80 outline-none focus:border-pagne-gold/50 sm:w-44"
                        >
                            {SORT_OPTIONS.map((o) => (
                                <option key={o.id} value={o.id}>
                                    {o.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Filtres catégorie */}
                    <div
                        role="group"
                        aria-label="Filtrer par catégorie"
                        className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
                    >
                        {FILTER_CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setCategory(cat.id)}
                                aria-pressed={category === cat.id}
                                className={`shrink-0 rounded-full border px-3.5 py-1.5 font-mono text-[11px] transition-colors ${
                                    category === cat.id
                                        ? 'border-pagne-gold bg-pagne-gold/15 text-pagne-gold'
                                        : 'border-cream/15 text-cream/55 hover:border-cream/30 hover:text-cream/80'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Filtres plateforme + compteur + reset */}
                    <div className="flex flex-wrap items-center gap-3">
                        <div
                            role="group"
                            aria-label="Filtrer par plateforme"
                            className="flex gap-2"
                        >
                            {PLATFORM_FILTERS.map((pf) => (
                                <button
                                    key={pf.id}
                                    type="button"
                                    onClick={() => setPlatform(pf.id)}
                                    aria-pressed={platform === pf.id}
                                    className={`rounded-full border px-3 py-1 font-mono text-[10px] transition-colors ${
                                        platform === pf.id
                                            ? 'border-pagne-teal bg-pagne-teal/15 text-pagne-teal'
                                            : 'border-cream/10 text-cream/40 hover:border-cream/25 hover:text-cream/60'
                                    }`}
                                >
                                    {pf.label}
                                </button>
                            ))}
                        </div>

                        <span className="font-mono text-[11px] text-cream/35">
                            {filtered.length} résultat{filtered.length !== 1 ? 's' : ''}
                        </span>

                        {hasFilters && (
                            <button
                                type="button"
                                onClick={handleClear}
                                className="font-mono text-[11px] text-cream/40 underline underline-offset-2 hover:text-cream/70"
                            >
                                Réinitialiser
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Grille */}
            <main className="px-6 py-10 sm:px-10 sm:py-12">
                <div className="mx-auto max-w-6xl">
                    {filtered.length > 0 ? (
                        <ul
                            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                            aria-label="Liste des créateurs"
                        >
                            {filtered.map((creator) => (
                                <li key={creator.slug}>
                                    <CreatorCard creator={creator} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="py-20 text-center">
                            <p className="font-display text-2xl text-cream/40">
                                Aucun créateur trouvé
                            </p>
                            <p className="mt-2 text-sm text-cream/30">
                                Essayez d'élargir vos critères de recherche.
                            </p>
                            <button
                                type="button"
                                onClick={handleClear}
                                className="mt-6 rounded-full border border-cream/20 px-6 py-2.5 text-sm text-cream/60 hover:border-cream/40 hover:text-cream/80"
                            >
                                Voir tous les créateurs
                            </button>
                        </div>
                    )}

                    <p className="mt-10 border-t border-cream/10 pt-6 text-center font-mono text-[11px] text-cream/25">
                        Données vérifiées au 7 octobre 2026. Les abonnés évoluent — consultez les profils officiels.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default function DiscoverIndex({ pillar, entries }: Props) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Créateurs béninois — Xwégbé" />

            <div className="min-h-screen bg-night text-cream">
                {/* Header commun */}
                <header className="sticky top-0 z-30 flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-cream/10 bg-night/90 px-6 py-4 backdrop-blur-sm sm:px-10">
                    <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3">
                        <PagneHomeButton />
                        <nav className="flex items-center gap-3 text-sm sm:gap-4">
                            {auth.user ? (
                                <Link
                                    href={dashboard().url}
                                    className="rounded-full border border-cream/20 px-5 py-2 transition-colors hover:border-cream/40"
                                >
                                    Tableau de bord
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login().url}
                                        className="whitespace-nowrap text-cream/70 transition-colors hover:text-cream"
                                    >
                                        Se connecter
                                    </Link>
                                    <Link
                                        href={register().url}
                                        className="rounded-full border border-cream/20 px-5 py-2 transition-colors hover:border-cream/40"
                                    >
                                        S'inscrire
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {pillar === 'createurs' ? (
                    <CreateursPage creators={entries} />
                ) : (
                    <div className="px-6 py-20 text-center sm:px-10">
                        <p className="font-mono text-xs text-cream/40">
                            {pillar
                                ? `Rubrique « ${pillar} » — en cours de construction`
                                : 'Choisissez une rubrique à explorer'}
                        </p>
                        <Link
                            href={discoverIndex({ pillar: 'createurs' }).url}
                            className="mt-6 inline-flex rounded-full border border-pagne-teal/40 px-6 py-2.5 text-sm text-pagne-teal hover:border-pagne-teal"
                        >
                            Voir les créateurs
                        </Link>
                    </div>
                )}

                <footer className="mx-auto w-full max-w-6xl px-6 py-8 text-center text-xs text-cream/30 sm:px-10">
                    Xwégbé — projet dédié au Bénin d'aujourd'hui.
                </footer>
            </div>
        </>
    );
}
