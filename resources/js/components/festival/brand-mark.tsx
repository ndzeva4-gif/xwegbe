export function BrandMark({ className = '' }: { className?: string }) {
    return (
        <img
            src="/images/brand/xwegbe-mark.png"
            alt="Xwégbé"
            className={`h-8 w-auto sm:h-9 ${className}`}
        />
    );
}
