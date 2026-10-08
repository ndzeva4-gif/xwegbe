import { useMemo, useState } from 'react';
import { Head } from '@inertiajs/react';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';
import { CreatorCard, type Creator } from '@/components/festival/creator-card';

type Props = {
    entries: Creator[];
};

export default function Createurs({ entries }: Props) {
    const [search, setSearch] = useState('');

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
            : entries;

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
                    <div className="mx-auto max-w-6xl">
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

                        <p className="mt-10 border-t border-cream/10 pt-6 text-center font-mono text-[11px] text-cream/20">
                            Données collectées le 7 octobre 2026. Consultez les profils officiels pour les chiffres à jour.
                        </p>
                    </div>
                </main>

                <footer className="px-6 py-6 text-center font-mono text-xs text-cream/25 sm:px-10">
                    <a href="/" className="hover:text-cream/50 transition-colors">← Xwégbé</a>
                </footer>
            </div>
        </>
    );
}
