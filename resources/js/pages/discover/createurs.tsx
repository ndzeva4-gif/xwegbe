import { useMemo, useState } from 'react';
import { Head } from '@inertiajs/react';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';
import { CreatorCard, formatFollowers, maxFollowers, type Creator } from '@/components/festival/creator-card';

const PAGNE = "url('/images/flat-african-pattern-design/6925962.jpg')";
const FEATURED_SLUG = 'creator_035';

type Props = {
    entries: Creator[];
};

const KIDJO_IMG = '/images/createur/Angelique%20KIDJO%20X%20Hat_%20%40ashakagivens%20Black%20fluffy%20top_%20%40molmauni%20Brown%20sparkly%20skirt_%20%40jevonterance.jpg';

function FeaturedCreator({ creator }: { creator: Creator }) {
    const meta = creator.metadata;
    const followers = maxFollowers(meta);
    const followersLabel = formatFollowers(followers);

    return (
        <article className="overflow-hidden rounded-2xl border border-cream/10 bg-night-elevated">
            <div className="flex flex-col lg:flex-row">
                {/* Photo */}
                <div className="relative shrink-0 overflow-hidden lg:w-80 xl:w-96" style={{ aspectRatio: '4/3' }}>
                    <img
                        src={KIDJO_IMG}
                        alt="Angélique Kidjo"
                        className="h-full w-full object-cover object-top"
                    />
                    <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(12,6,4,0.75) 0%, rgba(12,6,4,0.10) 55%, transparent 100%)' }}
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-cream/55">Icône mondiale</p>
                        {followersLabel && (
                            <p className="mt-1 font-mono text-xs text-pagne-gold">
                                {followersLabel} abonnés Instagram
                            </p>
                        )}
                    </div>
                </div>

                {/* Contenu */}
                <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10">
                    <div>
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                            <span className="rounded-full border border-pagne-gold/30 bg-pagne-gold/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-pagne-gold">
                                {meta.category}
                            </span>
                            {meta.city && (
                                <span className="font-mono text-xs text-cream/40">
                                    {meta.city}, {meta.country}
                                </span>
                            )}
                        </div>

                        <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl xl:text-5xl">
                            {creator.title}
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/65">
                            Chanteuse béninoise de renommée mondiale, Angélique Kidjo est l'une des voix les plus célébrées d'Afrique. Quatre fois lauréate du Grammy Award, elle mêle rythmes fon, yoruba, carioca et pop internationale dans une œuvre qui traverse les frontières. Née à Ouidah, elle porte le Bénin sur les plus grandes scènes mondiales depuis plus de trois décennies.
                        </p>
                    </div>

                    {meta.platforms.instagram && (
                        <a
                            href={`https://www.instagram.com/${meta.platforms.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 font-mono text-sm text-cream/70 transition-opacity hover:opacity-70"
                        >
                            Instagram {meta.platforms.instagram} ↗
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function Createurs({ entries }: Props) {
    const [search, setSearch] = useState('');

    const featured = entries.find((c) => c.slug === FEATURED_SLUG) ?? null;
    const isSearching = search.trim().length > 0;

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        const list = q
            ? entries.filter((c) => {
                  const m = c.metadata;
                  return (
                      c.title.toLowerCase().includes(q) ||
                      (m.username?.toLowerCase().includes(q) ?? false) ||
                      (m.city?.toLowerCase().includes(q) ?? false) ||
                      (m.category?.toLowerCase().includes(q) ?? false)
                  );
              })
            : entries.filter((c) => c.slug !== FEATURED_SLUG);

        return [...list].sort((a, b) => a.title.localeCompare(b.title, 'fr'));
    }, [entries, search]);

    return (
        <>
            <Head title="Créateurs béninois — Xwégbé" />

            <div className="min-h-screen bg-night text-cream">
                <header className="sticky top-0 z-30 flex items-center justify-between border-b border-cream/10 bg-night/90 px-6 py-4 backdrop-blur-sm sm:px-10">
                    <PagneHomeButton />
                </header>

                <div className="px-6 pt-10 pb-6 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-pagne-red">05</p>
                        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">
                            Créateurs
                        </h1>
                        <p className="mt-3 text-sm text-cream/50">
                            {entries.length} créateurs béninois répertoriés.
                        </p>

                        {/* Recherche */}
                        <div className="mt-6 max-w-sm">
                            <label htmlFor="creator-search" className="sr-only">
                                Rechercher un créateur
                            </label>
                            <div className="relative">
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
                                    placeholder="Nom, ville, catégorie…"
                                    className="h-10 w-full rounded-lg border border-cream/15 bg-night-elevated pl-9 pr-3 text-sm text-cream placeholder-cream/30 outline-none focus:border-cream/40"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <main className="px-6 pb-16 sm:px-10">
                    <div className="mx-auto max-w-6xl space-y-10">

                        {/* Carte vedette Angélique Kidjo — masquée en mode recherche */}
                        {!isSearching && featured && (
                            <>
                                <FeaturedCreator creator={featured} />

                                {/* Séparateur pagne */}
                                <div
                                    style={{ height: 2, backgroundImage: PAGNE, backgroundSize: '60px auto', backgroundRepeat: 'repeat', opacity: 0.15 }}
                                    aria-hidden="true"
                                />
                            </>
                        )}

                        {/* Grille */}
                        {filtered.length > 0 ? (
                            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {filtered.map((creator) => (
                                    <li key={creator.slug}>
                                        <CreatorCard creator={creator} />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="py-16 text-center text-sm text-cream/40">
                                Aucun créateur trouvé pour « {search} ».
                            </p>
                        )}

                        <p className="border-t border-cream/10 pt-6 text-center font-mono text-[11px] text-cream/20">
                            Données collectées le 7 octobre 2026. Consultez les profils officiels pour les chiffres à jour.
                        </p>
                    </div>
                </main>

                <footer className="px-6 py-6 text-center font-mono text-xs text-cream/25 sm:px-10">
                    <a href="/" className="transition-colors hover:text-cream/50">← Xwégbé</a>
                </footer>
            </div>
        </>
    );
}
