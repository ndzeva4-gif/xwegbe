import { Head, Link, usePage } from '@inertiajs/react';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';
import { CreatorCard, type Creator, formatFollowers, maxFollowers } from '@/components/festival/creator-card';
import { dashboard, login, register } from '@/routes';
import { index as discoverIndex } from '@/routes/discover';

type Props = {
    pillar: string;
    entry: Creator;
    related: Creator[];
};

const AVATAR_COLORS = [
    { bg: 'bg-pagne-orange/20', text: 'text-pagne-orange', border: 'border-pagne-orange/30' },
    { bg: 'bg-pagne-teal/20',   text: 'text-pagne-teal',   border: 'border-pagne-teal/30'   },
    { bg: 'bg-pagne-gold/20',   text: 'text-pagne-gold',   border: 'border-pagne-gold/30'   },
    { bg: 'bg-pagne-magenta/20',text: 'text-pagne-magenta',border: 'border-pagne-magenta/30'},
    { bg: 'bg-pagne-green/20',  text: 'text-pagne-green',  border: 'border-pagne-green/30'  },
    { bg: 'bg-pagne-red/20',    text: 'text-pagne-red',    border: 'border-pagne-red/30'    },
] as const;

function avatarColor(slug: string) {
    const sum = slug.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

function PlatformLink({
    handle,
    url,
    name,
    followers,
}: {
    handle: string;
    url: string;
    name: string;
    followers: number | null;
}) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 rounded-lg border border-cream/10 bg-night-elevated px-4 py-3 transition-colors hover:border-cream/25 hover:bg-cream/5"
        >
            <div>
                <p className="font-mono text-xs text-cream/40 uppercase">{name}</p>
                <p className="mt-0.5 text-sm text-cream/75">{handle}</p>
            </div>
            {followers !== null && followers > 0 && (
                <div className="text-right">
                    <p className="font-mono text-base font-bold text-cream">
                        {formatFollowers(followers)}
                    </p>
                    <p className="font-mono text-[10px] text-cream/35">abonnés</p>
                </div>
            )}
        </a>
    );
}

export default function DiscoverShow({ pillar, entry, related }: Props) {
    const { auth } = usePage().props;
    const meta = entry.metadata;
    const color = avatarColor(entry.slug);
    const initial = entry.title.charAt(0).toUpperCase();

    const platforms: { name: string; handle: string; url: string; followers: number | null }[] = [];
    if (meta.platforms.tiktok) {
        platforms.push({
            name: 'TikTok',
            handle: meta.platforms.tiktok,
            url: `https://www.tiktok.com/${meta.platforms.tiktok.replace('@', '')}`,
            followers: meta.followers.tiktok,
        });
    }
    if (meta.platforms.instagram) {
        platforms.push({
            name: 'Instagram',
            handle: meta.platforms.instagram,
            url: `https://www.instagram.com/${meta.platforms.instagram.replace('@', '')}`,
            followers: meta.followers.instagram,
        });
    }
    if (meta.platforms.youtube) {
        platforms.push({
            name: 'YouTube',
            handle: meta.platforms.youtube,
            url: `https://www.youtube.com/@${meta.platforms.youtube.replace('@', '')}`,
            followers: meta.followers.youtube,
        });
    }

    const backUrl = discoverIndex({ pillar }).url;

    return (
        <>
            <Head title={`${entry.title} — Créateurs — Xwégbé`} />

            <div className="min-h-screen bg-night text-cream">
                {/* Header */}
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

                <main>
                    {/* Fil d'Ariane */}
                    <div className="border-b border-cream/10 px-6 py-3 sm:px-10">
                        <div className="mx-auto max-w-6xl">
                            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 font-mono text-xs text-cream/40">
                                <Link href={backUrl} className="hover:text-cream/70 transition-colors">
                                    ← Créateurs
                                </Link>
                                <span aria-hidden="true">/</span>
                                <span className="text-cream/60 truncate">{entry.title}</span>
                            </nav>
                        </div>
                    </div>

                    {/* Profil */}
                    <section className="px-6 py-10 sm:px-10 sm:py-14">
                        <div className="mx-auto max-w-6xl">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:gap-16">
                                {/* Colonne gauche : infos */}
                                <div>
                                    {/* Avatar + identité */}
                                    <div className="flex items-start gap-5">
                                        <div
                                            className={`flex size-20 shrink-0 items-center justify-center rounded-full border-2 ${color.bg} ${color.border} sm:size-24`}
                                            aria-hidden="true"
                                        >
                                            <span className={`font-display text-3xl font-bold leading-none ${color.text} sm:text-4xl`}>
                                                {initial}
                                            </span>
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <h1 className="font-display text-2xl font-extrabold leading-tight text-cream sm:text-3xl">
                                                    {entry.title}
                                                </h1>
                                                {meta.verified_data && (
                                                    <span
                                                        className="rounded-full border border-pagne-teal/40 px-2.5 py-0.5 font-mono text-[10px] text-pagne-teal"
                                                        title="Données vérifiées"
                                                    >
                                                        ✓ Vérifié
                                                    </span>
                                                )}
                                            </div>
                                            {meta.username && (
                                                <p className="mt-1 font-mono text-sm text-cream/50">
                                                    @{meta.username}
                                                </p>
                                            )}
                                            <div className="mt-2 flex flex-wrap items-center gap-2">
                                                {meta.category && (
                                                    <span className="rounded-full bg-pagne-gold/10 px-2.5 py-1 font-mono text-xs text-pagne-gold">
                                                        {meta.category}
                                                    </span>
                                                )}
                                                {meta.city && (
                                                    <span className="font-mono text-xs text-cream/45">
                                                        {meta.city}, {meta.country}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Niches / types de contenu */}
                                    {meta.content_type.length > 0 && (
                                        <div className="mt-8">
                                            <p className="font-mono text-xs text-cream/35 uppercase tracking-widest">
                                                Types de contenu
                                            </p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {meta.content_type.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="rounded-md border border-cream/10 bg-night-elevated px-3 py-1 text-sm text-cream/65"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Taux d'engagement */}
                                    {meta.engagement_rate !== null && (
                                        <div className="mt-8 inline-flex flex-col">
                                            <p className="font-mono text-xs text-cream/35 uppercase tracking-widest">
                                                Taux d'engagement
                                            </p>
                                            <p className="mt-1 font-mono text-2xl font-bold text-pagne-teal">
                                                {meta.engagement_rate}%
                                            </p>
                                        </div>
                                    )}

                                    {/* Avertissement données */}
                                    <p className="mt-8 rounded-lg border border-cream/10 bg-night-elevated px-4 py-3 text-xs leading-relaxed text-cream/35">
                                        Les statistiques présentées ici ont été collectées le{' '}
                                        {new Date(meta.last_verified).toLocaleDateString('fr-FR', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                        . Elles sont susceptibles d'avoir évolué depuis. Consultez
                                        les profils officiels pour les données actuelles.
                                    </p>
                                </div>

                                {/* Colonne droite : plateformes */}
                                <aside aria-labelledby="platforms-heading">
                                    <p
                                        id="platforms-heading"
                                        className="font-mono text-xs text-cream/35 uppercase tracking-widest"
                                    >
                                        Présence en ligne
                                    </p>

                                    {platforms.length > 0 ? (
                                        <ul className="mt-3 space-y-3">
                                            {platforms.map((p) => (
                                                <li key={p.name}>
                                                    <PlatformLink
                                                        name={p.name}
                                                        handle={p.handle}
                                                        url={p.url}
                                                        followers={p.followers}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="mt-3 text-sm text-cream/35">
                                            Aucune plateforme référencée.
                                        </p>
                                    )}

                                    {/* Total abonnés */}
                                    {maxFollowers(meta) > 0 && (
                                        <div className="mt-6 rounded-lg border border-cream/10 bg-night-elevated px-4 py-3">
                                            <p className="font-mono text-[10px] text-cream/35 uppercase">
                                                Audience principale
                                            </p>
                                            <p className="mt-1 font-mono text-2xl font-bold text-cream">
                                                {formatFollowers(maxFollowers(meta))}
                                            </p>
                                            <p className="font-mono text-[11px] text-cream/40">
                                                abonnés sur la plateforme principale
                                            </p>
                                        </div>
                                    )}
                                </aside>
                            </div>
                        </div>
                    </section>

                    {/* Créateurs similaires */}
                    {related.length > 0 && (
                        <section
                            aria-labelledby="related-heading"
                            className="border-t border-cream/10 px-6 py-10 sm:px-10 sm:py-12"
                        >
                            <div className="mx-auto max-w-6xl">
                                <p
                                    id="related-heading"
                                    className="font-mono text-xs text-pagne-gold uppercase tracking-widest"
                                >
                                    Autres créateurs
                                </p>
                                <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                    {related.map((c) => (
                                        <li key={c.slug}>
                                            <CreatorCard creator={c} />
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 text-center">
                                    <Link
                                        href={backUrl}
                                        className="inline-flex rounded-full border border-cream/20 px-6 py-2.5 text-sm text-cream/70 transition-colors hover:border-cream/40 hover:text-cream"
                                    >
                                        ← Tous les créateurs
                                    </Link>
                                </div>
                            </div>
                        </section>
                    )}
                </main>

                <footer className="mx-auto w-full max-w-6xl px-6 py-8 text-center text-xs text-cream/30 sm:px-10">
                    Xwégbé — projet dédié au Bénin d'aujourd'hui.
                </footer>
            </div>
        </>
    );
}
