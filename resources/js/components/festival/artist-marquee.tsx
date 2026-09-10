const ARTISTS = [
    'KWAME ÉLECTRO',
    'AMINATA WAVES',
    'DJ SANKOFA',
    'THE BAOBAB COLLECTIVE',
    'NALA FIRE',
    'ORÍ SOUND SYSTEM',
    'ZURI & THE NIGHT MARKET',
    'KOFI NEON',
    'ADÆZE',
    'MC SAVANE',
];

export function ArtistMarquee() {
    const line = [...ARTISTS, ...ARTISTS];

    return (
        <div className="group relative overflow-hidden border-y border-cream/10 bg-night-elevated py-4">
            <div className="animate-marquee flex w-max gap-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                {[...line, ...line].map((name, i) => (
                    <span
                        key={i}
                        className="flex items-center gap-8 font-display text-xl tracking-wide text-cream/80 uppercase sm:text-2xl"
                    >
                        {name}
                        <span className="text-pagne-magenta" aria-hidden="true">
                            •
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
}
