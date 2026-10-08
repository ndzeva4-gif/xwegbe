import { Head } from '@inertiajs/react';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';

type Restaurant = {
    name: string;
    cuisine: string;
};

const RESTAURANTS: Restaurant[] = [
    { name: 'Face A La Mer',        cuisine: 'Italienne, française' },
    { name: 'La Cabane du Pêcheur', cuisine: 'Française, africaine' },
    { name: 'Jaaba – Grill & Bar',  cuisine: 'Africaine, internationale' },
    { name: 'Livingstone',          cuisine: 'Bar, pizza' },
    { name: 'L\'Imprévu',           cuisine: 'Italienne, française' },
    { name: 'Maquis du Port',       cuisine: 'Africaine' },
    { name: 'Bangkok Terrasse',     cuisine: 'Asiatique, thaïe' },
    { name: 'Shamiana',             cuisine: 'Indienne' },
    { name: 'Wasabi Sushi Bar',     cuisine: 'Japonaise, sushi' },
    { name: 'Rousski Dom',          cuisine: 'Européenne, russe' },
];

export default function Restaurants() {
    return (
        <>
            <Head title="Restaurants — Xwégbé" />

            <div className="min-h-screen bg-night text-cream">
                <header className="sticky top-0 z-30 flex items-center justify-between border-b border-cream/10 bg-night/90 px-6 py-4 backdrop-blur-sm sm:px-10">
                    <PagneHomeButton />
                </header>

                <div className="px-6 pb-4 pt-10 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-pagne-magenta">03</p>
                        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Restaurants</h1>
                        <p className="mt-4 max-w-xl text-base text-cream/55">
                            Notre sélection de tables à Cotonou — cuisine africaine, internationale et d'ailleurs.
                        </p>
                    </div>
                </div>

                <div className="px-6 py-10 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <ol className="divide-y divide-cream/8">
                            {RESTAURANTS.map((resto, i) => (
                                <li
                                    key={resto.name}
                                    className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-5 py-6 sm:py-7"
                                >
                                    <span className="font-mono text-xs text-cream/30 pt-1">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <div className="min-w-0">
                                        <h2 className="font-display text-lg font-semibold sm:text-xl">
                                            {resto.name}
                                        </h2>
                                        <p className="mt-1 font-mono text-xs text-cream/40 uppercase tracking-wide">
                                            Cotonou · {resto.cuisine}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <p className="mt-8 border-t border-cream/10 pt-6 font-mono text-[11px] text-cream/20">
                            Sélection Xwégbé · Les liens officiels et photos seront ajoutés prochainement.
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
