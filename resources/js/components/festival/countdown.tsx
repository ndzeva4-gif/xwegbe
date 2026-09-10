import { useEffect, useState } from 'react';

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
    const diff = Math.max(0, target.getTime() - Date.now());

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
    { key: 'days', label: 'jours' },
    { key: 'hours', label: 'heures' },
    { key: 'minutes', label: 'min' },
    { key: 'seconds', label: 'sec' },
];

export function Countdown({ target }: { target: string }) {
    const targetDate = new Date(target);
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        setTimeLeft(getTimeLeft(targetDate));
        const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target]);

    return (
        <div className="flex gap-4 sm:gap-6" role="timer" aria-live="off">
            {UNITS.map(({ key, label }) => (
                <div key={key} className="flex flex-col items-center">
                    <span className="font-mono text-4xl font-bold tabular-nums text-pagne-gold sm:text-5xl">
                        {timeLeft ? String(timeLeft[key]).padStart(2, '0') : '--'}
                    </span>
                    <span className="mt-1 text-xs tracking-widest text-cream/50 uppercase">
                        {label}
                    </span>
                </div>
            ))}
        </div>
    );
}
