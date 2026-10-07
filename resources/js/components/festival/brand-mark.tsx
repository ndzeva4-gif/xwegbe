export function BrandMark({
    className = '',
    size = 'default',
}: {
    className?: string;
    size?: 'default' | 'large';
}) {
    return (
        <img
            src="/images/brand/xwegbe-mark.png"
            alt="Logo Xwégbé avec une représentation de la Porte du Non-Retour"
            className={`${size === 'large' ? 'h-auto w-full max-w-xs' : 'h-8 w-auto sm:h-9'} ${className}`}
        />
    );
}
