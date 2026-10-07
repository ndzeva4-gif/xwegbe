import { ArrowUpRight, MapPin } from 'lucide-react';

type Restaurant = {
    slug: string;
    title: string;
    summary: string;
    location: string | null;
    maps_url: string | null;
    source_url: string | null;
};

export function RestaurantShowcase({
    restaurants,
}: {
    restaurants: Restaurant[];
}) {
    if (restaurants.length === 0) return null;

    return (
        <section
            id="horizon-restaurants"
            aria-labelledby="restaurant-heading"
            className="scroll-mt-24 border-y border-cream/10 bg-night px-5 py-14 text-cream sm:px-8 sm:py-18 lg:px-10"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-5 border-b border-cream/15 pb-7 sm:grid-cols-[minmax(0,1fr)_minmax(15rem,0.8fr)] sm:items-end sm:gap-10">
                    <div>
                        <p className="font-mono text-xs text-pagne-orange">
                            ADRESSES REPÉRÉES
                        </p>
                        <h2
                            id="restaurant-heading"
                            className="mt-3 font-display text-3xl font-extrabold sm:text-4xl"
                        >
                            Où goûter
                            <span className="text-pagne-gold"> le Bénin</span>
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed text-cream/60 sm:text-base">
                        Une sélection de lieux qui mettent en avant des plats
                        béninois. Vérifie les horaires et la disponibilité auprès
                        de chaque établissement.
                    </p>
                </div>

                <ol className="divide-y divide-cream/10">
                    {restaurants.map((restaurant, index) => (
                        <li
                            key={restaurant.slug}
                            className="grid gap-3 py-6 sm:grid-cols-[2.5rem_minmax(0,0.8fr)_minmax(0,1.2fr)_auto] sm:items-center sm:gap-5 sm:py-7"
                        >
                            <span className="font-mono text-xs text-pagne-magenta">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="font-display text-lg font-semibold sm:text-xl">
                                {restaurant.title}
                            </h3>
                            <div className="min-w-0">
                                <p className="text-sm leading-relaxed text-cream/70">
                                    {restaurant.summary}
                                </p>
                                {restaurant.location && (
                                    <p className="mt-2 inline-flex items-start gap-2 text-xs text-cream/50 sm:text-sm">
                                        <MapPin
                                            aria-hidden="true"
                                            className="mt-0.5 size-3.5 shrink-0 text-pagne-teal"
                                        />
                                        {restaurant.location}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
                                {restaurant.maps_url && (
                                    <a
                                        href={restaurant.maps_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-10 items-center gap-1 border-b border-pagne-teal/50 text-xs font-semibold text-pagne-teal hover:text-pagne-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pagne-gold"
                                    >
                                        Google Maps
                                        <ArrowUpRight aria-hidden="true" className="size-3.5" />
                                    </a>
                                )}
                                {restaurant.source_url && (
                                    <a
                                        href={restaurant.source_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-10 items-center gap-1 border-b border-pagne-gold/50 text-xs font-semibold text-pagne-gold hover:text-pagne-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pagne-gold"
                                    >
                                        Source
                                        <ArrowUpRight aria-hidden="true" className="size-3.5" />
                                    </a>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}