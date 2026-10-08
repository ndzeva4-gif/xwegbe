import { Head } from '@inertiajs/react';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';
import { ModernBeninSection } from '@/components/festival/benin-sections';

export default function Moderne() {
    return (
        <>
            <Head title="Bénin moderne — Xwégbé" />

            <div className="min-h-screen bg-night text-cream">
                <header className="sticky top-0 z-30 flex items-center justify-between border-b border-cream/10 bg-night/90 px-6 py-4 backdrop-blur-sm sm:px-10">
                    <PagneHomeButton />
                </header>

                <div className="px-6 pb-4 pt-10 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-pagne-green">10</p>
                        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Bénin moderne</h1>
                    </div>
                </div>

                <ModernBeninSection />

                <footer className="px-6 py-8 text-center font-mono text-xs text-cream/25 sm:px-10">
                    <a href="/" className="hover:text-cream/50 transition-colors">← Xwégbé</a>
                </footer>
            </div>
        </>
    );
}
