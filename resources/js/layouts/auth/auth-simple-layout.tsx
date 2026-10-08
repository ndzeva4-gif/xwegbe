import { Link } from '@inertiajs/react';
import { BrandMark } from '@/components/festival/brand-mark';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

const PAGNE = "url('/images/flat-african-pattern-design/6925962.jpg')";

export default function AuthSimpleLayout({ children, title, description }: AuthLayoutProps) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-night px-6 py-12 md:p-10">

            {/* Bande pagne top */}
            <div
                className="absolute top-0 left-0 right-0"
                style={{ height: 4, backgroundImage: PAGNE, backgroundSize: '80px auto', backgroundRepeat: 'repeat', animation: 'pagne-drift 8s linear infinite', borderBottom: '1px solid rgba(244,183,64,0.25)' }}
                aria-hidden="true"
            />

            {/* Texture pagne fond */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{ backgroundImage: PAGNE, backgroundSize: '280px auto', backgroundRepeat: 'repeat', opacity: 0.03 }}
                aria-hidden="true"
            />

            {/* Ornements flottants */}
            <div className="pointer-events-none absolute top-[10%] right-[8%] hidden lg:block" style={{ animation: 'pagne-float 9s ease-in-out infinite' }} aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 0 L32 16 L16 32 L0 16 Z" fill="var(--color-pagne-gold)" opacity="0.22" /></svg>
            </div>
            <div className="pointer-events-none absolute bottom-[14%] left-[6%] hidden lg:block" style={{ animation: 'pagne-float 12s ease-in-out 4s infinite' }} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 0 L18 9 L9 18 L0 9 Z" fill="var(--color-pagne-orange)" opacity="0.28" /></svg>
            </div>

            {/* Carte formulaire */}
            <div className="relative w-full max-w-sm">
                <div className="flex flex-col gap-8">

                    {/* Logo + titre */}
                    <div className="flex flex-col items-center gap-4 text-center">
                        <Link href={home()} aria-label="Retour à l'accueil">
                            <BrandMark />
                        </Link>
                        <div className="space-y-1">
                            <h1 className="font-display text-3xl font-extrabold uppercase text-cream">{title}</h1>
                            <p className="text-sm text-cream/45">{description}</p>
                        </div>
                    </div>

                    {children}
                </div>
            </div>

            {/* Bande pagne bas */}
            <div
                className="absolute bottom-0 left-0 right-0"
                style={{ height: 4, backgroundImage: PAGNE, backgroundSize: '80px auto', backgroundRepeat: 'repeat', animation: 'pagne-drift 8s linear infinite reverse', borderTop: '1px solid rgba(244,183,64,0.25)' }}
                aria-hidden="true"
            />
        </div>
    );
}
