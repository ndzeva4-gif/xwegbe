import { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';
import { GateSvg, GateSpinner } from '@/components/festival/gate-svg';

const PAGNE_URL = "url('/images/flat-african-pattern-design/6925962.jpg')";

export function NavigationLoader() {
    const [visible, setVisible] = useState(false);
    const [fading, setFading]   = useState(false);

    useEffect(() => {
        let showTimer: ReturnType<typeof setTimeout> | null = null;
        let hideTimer: ReturnType<typeof setTimeout> | null = null;

        const removeStart = router.on('start', () => {
            if (hideTimer) clearTimeout(hideTimer);
            // Délai court avant d'afficher : évite le flash sur navigations rapides
            showTimer = setTimeout(() => {
                setFading(false);
                setVisible(true);
            }, 180);
        });

        const removeFinish = router.on('finish', () => {
            if (showTimer) clearTimeout(showTimer);
            setFading(true);
            hideTimer = setTimeout(() => {
                setVisible(false);
                setFading(false);
            }, 400);
        });

        return () => {
            removeStart();
            removeFinish();
            if (showTimer) clearTimeout(showTimer);
            if (hideTimer) clearTimeout(hideTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-[90] flex flex-col items-center justify-center transition-opacity duration-400 ease-out ${
                fading ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
                backgroundImage: PAGNE_URL,
                backgroundSize: '200px auto',
                backgroundRepeat: 'repeat',
            }}
            aria-hidden="true"
        >
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-night/88" />

            {/* Porte + anneau tournant */}
            <div className="relative flex items-center justify-center" style={{ width: 100, height: 100 }}>
                {/* Anneau de points qui tourne */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <GateSpinner size={100} />
                </div>
                {/* Porte centrée */}
                <div className="relative flex items-center justify-center">
                    <GateSvg size={56} />
                </div>
            </div>

            <p className="relative mt-6 font-mono text-xs uppercase tracking-widest text-cream/40">
                Chargement…
            </p>
        </div>
    );
}
