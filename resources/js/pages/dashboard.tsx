import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowUpRight, Bookmark, Compass } from 'lucide-react';
import { BeadedArc } from '@/components/festival/beaded-arc';
import { BrandShowcase } from '@/components/festival/brand-showcase';
import { DiscoverIndex } from '@/components/festival/discover-index';
import { FeaturedReel } from '@/components/festival/featured-reel';
import { dashboard } from '@/routes';

const BEADS = [
    'bg-pagne-orange',
    'bg-pagne-magenta',
    'bg-pagne-gold',
    'bg-pagne-teal',
    'bg-pagne-green',
    'bg-pagne-red',
    'bg-pagne-gold',
    'bg-pagne-magenta',
    'bg-pagne-teal',
    'bg-pagne-orange',
    'bg-pagne-red',
];

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

export default function Dashboard({
    brands,
    creators,
}: {
    brands: Profile[];
    creators: Profile[];
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Mon espace — Xwégbé" />

            <main className="min-h-full bg-night text-cream">
                <section className="relative isolate overflow-hidden border-b border-cream/10">
                    <div
                        aria-hidden="true"
                        className="pattern-weave absolute inset-x-0 top-0 h-2 opacity-90"
                    />
                    <BeadedArc className="pointer-events-none absolute -top-28 -right-20 hidden h-[420px] w-[440px] opacity-55 lg:block" />

                    <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16 lg:py-20">
                        <div className="mb-10 flex items-center gap-4">
                            <p className="font-mono text-xs text-pagne-gold">
                                XWÉGBÉ
                            </p>
                            <div
                                aria-hidden="true"
                                className="flex shrink-0 items-center gap-1.5"
                            >
                                {BEADS.map((color, index) => (
                                    <span
                                        key={`${color}-${index}`}
                                        className={`size-2 rounded-full shadow-[0_0_12px_currentColor] ${color}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="max-w-3xl">
                            <p className="font-mono text-xs tracking-wider text-pagne-orange uppercase">
                                Ton carnet du Bénin
                            </p>
                            <h1 className="mt-4 font-display text-4xl leading-tight font-extrabold sm:text-6xl">
                                Bienvenue,
                                <span className="mt-1 block text-pagne-gold">
                                    {auth.user.name}
                                </span>
                            </h1>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
                                Garde près de toi les lieux, les plats et les
                                histoires du Bénin qui te parlent.
                            </p>
                            <Link
                                href="#decouvrir"
                                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-pagne-gold px-6 py-3 font-semibold text-night transition-colors hover:bg-pagne-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pagne-gold"
                            >
                                Explorer le Bénin
                                <ArrowUpRight
                                    aria-hidden="true"
                                    className="size-4"
                                />
                            </Link>
                        </div>
                    </div>
                </section>

                <FeaturedReel headingLevel="h2" />
                <DiscoverIndex />
                <BrandShowcase brands={brands} creators={creators} />

                <section
                    aria-labelledby="saved-list-heading"
                    className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16"
                >
                    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-cream/15 pb-5">
                        <div>
                            <p className="font-mono text-xs text-pagne-teal">
                                CE QUE TU AS GARDÉ
                            </p>
                            <h2
                                id="saved-list-heading"
                                className="mt-2 font-display text-3xl font-bold sm:text-4xl"
                            >
                                Ma liste
                            </h2>
                        </div>
                        <span className="font-mono text-xs text-cream/45">
                            TON ESPACE, À TON RYTHME
                        </span>
                    </div>

                    <div className="flex flex-col items-start gap-5 border-b border-cream/15 py-8 sm:flex-row sm:items-center sm:gap-7 sm:py-10">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-pagne-magenta/60 text-pagne-magenta">
                            <Bookmark aria-hidden="true" className="size-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="font-display text-xl font-semibold">
                                Ta liste est encore vide
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/65 sm:text-base">
                                Quand tu enregistres une fiche, tu la retrouves
                                ici. Pas d’agenda à gérer : juste tes découvertes,
                                réunies au même endroit.
                            </p>
                        </div>
                        <Link
                            href="#decouvrir"
                            className="inline-flex min-h-11 items-center gap-2 border-b border-pagne-orange pb-1 text-sm font-semibold text-pagne-orange transition-colors hover:text-pagne-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pagne-gold"
                        >
                            Commencer à explorer
                            <Compass aria-hidden="true" className="size-4" />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Mon espace',
            href: dashboard(),
        },
    ],
};