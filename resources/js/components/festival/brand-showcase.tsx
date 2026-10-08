type Profile = {
    slug: string;
    category: string;
    title: string;
    summary: string;
    content: string | null;
    source_url: string | null;
    logo_path: string | null;
    gallery: { path: string; alt: string }[] | null;
};

function publicImage(path: string): string {
    return `/${path.split('/').map(encodeURIComponent).join('/')}`;
}

function brandSurface(slug: string): string {
    if (slug === 'ayobeen') return 'bg-cream';
    if (slug === 'oqp-tribe' || slug === 'hypewear-bj') return 'bg-[#090a0b]';

    return 'bg-night-elevated';
}

export function BrandShowcase({
    brands,
    creators,
}: {
    brands: Profile[];
    creators: Profile[];
}) {
    const featuredCreator = creators.find(
        (creator) => creator.slug === 'ng-thecreator',
    );

    if (brands.length === 0 && !featuredCreator) return null;

    return (
        <section
            aria-label="Marques béninoises et créateurs"
            className="border-y border-cream/10 bg-night px-5 py-14 text-cream sm:px-8 sm:py-18 lg:px-10"
        >
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)] lg:gap-16">
                <div
                    id="horizon-marques"
                    className="scroll-mt-20 min-w-0"
                    aria-labelledby="brand-heading"
                >
                    <p className="font-mono text-xs text-pagne-gold">
                        FAIT AU BÉNIN, OU À CONFIRMER
                    </p>
                    <h2
                        id="brand-heading"
                        className="mt-3 font-display text-3xl font-extrabold sm:text-4xl"
                    >
                        Marques
                        <span className="text-pagne-orange"> à découvrir</span>
                    </h2>
                    <a
                        href="/decouvrir/marques"
                        className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-pagne-gold opacity-70 transition-opacity hover:opacity-100"
                    >
                        Voir la page Marques →
                    </a>

                    <ol className="mt-7 divide-y divide-cream/10">
                        {brands.map((brand, index) => (
                            <li
                                key={brand.slug}
                                id={brand.slug === 'oqp-tribe' ? 'brand-oqp-tribe' : undefined}
                                className="group relative grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 gap-y-3 py-6 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-x-5 sm:py-7"
                            >
                                {/* Lien étiré — rend toute la carte cliquable */}
                                {brand.source_url && (
                                    <a
                                        href={brand.source_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Voir ${brand.title}`}
                                        className="absolute inset-0 z-[1]"
                                    />
                                )}
                                <div
                                    className={`relative z-[2] flex size-[4.5rem] items-center justify-center overflow-hidden rounded-full border border-cream/15 sm:size-20 ${brandSurface(brand.slug)}`}
                                >
                                    {brand.logo_path ? (
                                        <img
                                            src={publicImage(brand.logo_path)}
                                            alt={`Logo ${brand.title}`}
                                            className="size-full rounded-full object-cover"
                                            style={{ clipPath: 'circle(32% at 50% 50%)' }}
                                        />
                                    ) : (
                                        <span className="px-2 text-center font-display text-[10px] leading-tight font-bold text-pagne-gold sm:text-xs">
                                            {brand.title}
                                        </span>
                                    )}
                                </div>
                                <div className="relative z-[2] min-w-0 self-center">
                                    <p className="font-mono text-[11px] text-pagne-magenta">
                                        {String(index + 1).padStart(2, '0')}
                                    </p>
                                    <h3 className="mt-1 font-display text-lg font-semibold transition-colors group-hover:text-pagne-gold sm:text-xl">
                                        {brand.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-cream/75">
                                        {brand.summary}
                                    </p>
                                </div>
                                <div className="relative z-[2] col-start-2 min-w-0 sm:col-start-2">
                                    {brand.content && (
                                        <p className="text-sm leading-relaxed text-cream/55">
                                            {brand.content}
                                        </p>
                                    )}
                                </div>
                                {brand.gallery && brand.gallery.length > 0 && (
                                    <div className="relative z-[2] col-span-2 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0">
                                        {brand.gallery.map((image) => (
                                            <figure
                                                key={image.path}
                                                className="w-[78%] shrink-0 snap-start sm:w-auto"
                                            >
                                                <img
                                                    src={publicImage(image.path)}
                                                    alt={image.alt}
                                                    loading="lazy"
                                                    className="aspect-[4/3] w-full border border-cream/10 object-cover object-center"
                                                />
                                            </figure>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>

                {featuredCreator && (
                    <aside
                        id="horizon-createurs"
                        aria-labelledby="creator-heading"
                        className="scroll-mt-20 border-t border-cream/10 pt-7 lg:border-t-0 lg:border-l lg:border-cream/10 lg:pt-0 lg:pl-8"
                    >
                        <p className="font-mono text-xs text-pagne-teal">
                            RENCONTRE
                        </p>
                        <div className="flex items-baseline justify-between gap-3">
                            <h2
                                id="creator-heading"
                                className="mt-3 font-display text-2xl font-bold sm:text-3xl"
                            >
                                {featuredCreator.title}
                            </h2>
                            <a
                                href="/decouvrir/createurs"
                                className="mt-3 shrink-0 font-mono text-xs text-pagne-teal opacity-70 transition-opacity hover:opacity-100"
                            >
                                Tous les créateurs →
                            </a>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-cream/75 sm:text-base">
                            {featuredCreator.summary}
                        </p>
                        {featuredCreator.content && (
                            <p className="mt-4 text-sm leading-relaxed text-cream/60">
                                {featuredCreator.content}
                            </p>
                        )}
                        <p className="mt-5 pl-0 text-sm leading-relaxed text-cream/55 italic">
                            OQP Tribe est présentée séparément dans la liste des
                            marques. Aucun lien de fondation n’est affirmé.
                        </p>
                        {featuredCreator.source_url && (
                            <a
                                href={featuredCreator.source_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex min-h-11 items-center border-b border-pagne-teal/60 text-sm font-semibold text-pagne-teal hover:text-pagne-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pagne-gold"
                            >
                                Voir son profil public
                            </a>
                        )}

                        <div className="mt-8">
                            <p className="font-mono text-xs text-pagne-gold mb-4">
                                Tous les créateurs
                            </p>
                            <div className="max-h-[340px] overflow-y-auto pr-2">
                                <ul className="space-y-1">
                                    {creators
                                        .filter((c) => c.slug !== 'ng-thecreator')
                                        .map((creator) => (
                                            <li key={creator.slug}>
                                                <a
                                                    href={creator.source_url ?? undefined}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="
                                                        flex items-center gap-3 border-b border-cream/5
                                                        py-2 last:border-0 hover:bg-cream/5
                                                        rounded-md
                                                    "
                                                >
                                                    <div className="
                                                        flex size-9 shrink-0 items-center
                                                        justify-center rounded-full
                                                        bg-pagne-gold/20
                                                    ">
                                                        {creator.logo_path ? (
                                                            <img
                                                                src={publicImage(creator.logo_path)}
                                                                alt=""
                                                                className="size-full rounded-full object-cover"
                                                            />
                                                        ) : (
                                                            <span className="
                                                                font-display text-xs
                                                                font-bold text-pagne-gold
                                                            ">
                                                                {creator.title.charAt(0)}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-sm text-cream/80">
                                                        {creator.title}
                                                    </span>
                                                    <span className="
                                                        ml-auto font-mono text-[10px]
                                                        text-pagne-magenta/60
                                                    ">
                                                        {creator.category}
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                )}
            </div>
        </section>
    );
}