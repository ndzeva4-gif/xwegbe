import { usePage } from '@inertiajs/react';
import AuthSimpleLayout from '@/layouts/auth/auth-simple-layout';
import AuthSplitLayout from '@/layouts/auth/auth-split-layout';

export default function AuthLayout({
    title = '',
    description = '',
    children,
}: {
    title?: string;
    description?: string;
    children: React.ReactNode;
}) {
    const { component } = usePage();
    const Layout = component === 'auth/login' ? AuthSplitLayout : AuthSimpleLayout;

    return (
        <Layout title={title} description={description}>
            {children}
        </Layout>
    );
}
