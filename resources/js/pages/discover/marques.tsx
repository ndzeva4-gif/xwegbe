import { Head } from '@inertiajs/react';
import { PagneHomeButton } from '@/components/festival/sidebar-nav';
import { BrandShowcase } from '@/components/festival/brand-showcase';

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

type Props = {
    brands: Profile[];
    creators: Profile[];
};

export default function Marques({ brands, creators }: Props) {
    return (
        <>
            <Head title="Marques Made in Bénin — Xwégbé" />

            <div className="min-h-screen bg-night text-cream">
                <header className="sticky top-0 z-30 flex items-center justify-between border-b border-cream/10 bg-night/90 px-6 py-4 backdrop-blur-sm sm:px-10">
                    <PagneHomeButton />
                </header>

                <div className="px-6 pb-4 pt-10 sm:px-10">
                    <div className="mx-auto max-w-6xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-pagne-teal">04</p>
                        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Marques Made in Bénin</h1>
                        <p className="mt-4 max-w-xl text-base text-cream/55">
                            Mode, beauté, alimentation, artisanat — les marques béninoises qui comptent.
                        </p>
                    </div>
                </div>

                <BrandShowcase brands={brands} creators={creators} />

                <footer className="px-6 py-8 text-center font-mono text-xs text-cream/25 sm:px-10">
                    <a href="/" className="transition-colors hover:text-cream/50">← Xwégbé</a>
                </footer>
            </div>
        </>
    );
}
