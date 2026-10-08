import { Link } from '@inertiajs/react';
import { show as discoverShow } from '@/routes/discover';

export type CreatorMeta = {
    creator_id: string;
    username: string | null;
    category: string | null;
    content_type: string[];
    city: string | null;
    country: string;
    platforms: {
        tiktok: string | null;
        instagram: string | null;
        youtube: string | null;
    };
    followers: {
        tiktok: number | null;
        instagram: number | null;
        youtube: number | null;
    };
    engagement_rate: number | null;
    verified_data: boolean;
    last_verified: string;
};

export type Creator = {
    id: number;
    slug: string;
    title: string;
    summary: string;
    content: string | null;
    source_url: string | null;
    metadata: CreatorMeta;
};

const AVATAR_COLORS = [
    { bg: 'bg-pagne-orange/20', text: 'text-pagne-orange' },
    { bg: 'bg-pagne-teal/20',   text: 'text-pagne-teal'   },
    { bg: 'bg-pagne-gold/20',   text: 'text-pagne-gold'   },
    { bg: 'bg-pagne-magenta/20',text: 'text-pagne-magenta'},
    { bg: 'bg-pagne-green/20',  text: 'text-pagne-green'  },
    { bg: 'bg-pagne-red/20',    text: 'text-pagne-red'    },
] as const;

function avatarColor(slug: string) {
    const sum = slug.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

export function formatFollowers(n: number | null | undefined): string | null {
    if (!n) return null;
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
    if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
    return n.toString();
}

export function maxFollowers(meta: CreatorMeta): number {
    return Math.max(
        meta.followers.tiktok ?? 0,
        meta.followers.instagram ?? 0,
        meta.followers.youtube ?? 0,
    );
}

export function CreatorCard({ creator }: { creator: Creator }) {
    const meta = creator.metadata;
    const color = avatarColor(creator.slug);
    const initial = creator.title.charAt(0).toUpperCase();
    const href = discoverShow({ pillar: 'createurs', slug: creator.slug }).url;

    return (
        <Link
            href={href}
            className="group flex flex-col rounded-xl border border-cream/10 bg-night-elevated p-5 transition-colors hover:border-cream/20"
        >
            {/* En-tête : avatar + nom */}
            <div className="flex items-start gap-4">
                <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-full ${color.bg}`}
                    aria-hidden="true"
                >
                    <span className={`font-display text-xl font-bold leading-none ${color.text}`}>
                        {initial}
                    </span>
                </div>
                <div className="min-w-0 flex-1">
                    <h3 className="truncate font-display text-base font-semibold leading-snug text-cream transition-colors group-hover:text-pagne-gold">
                        {creator.title}
                    </h3>
                    {meta.username && (
                        <p className="truncate font-mono text-[11px] text-cream/45">
                            @{meta.username}
                        </p>
                    )}
                </div>
            </div>

            {/* Catégorie + ville */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
                {meta.category && (
                    <span className="rounded-full bg-pagne-gold/10 px-2.5 py-0.5 font-mono text-[10px] text-pagne-gold">
                        {meta.category}
                    </span>
                )}
                {meta.city && (
                    <span className="font-mono text-[11px] text-cream/40">
                        {meta.city}
                    </span>
                )}
            </div>
        </Link>
    );
}
