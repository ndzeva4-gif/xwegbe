import { Link } from '@inertiajs/react';
import {
    Building2,
    CalendarDays,
    Compass,
    Film,
    Info,
    Landmark,
    LayoutGrid,
    Lightbulb,
    MapPinned,
    Newspaper,
    Play,
    ShoppingBag,
    Store,
    Utensils,
    UsersRound,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard, home } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Mon espace',
        href: dashboard(),
        icon: LayoutGrid,
    },
    { title: 'À la une', href: '/dashboard#a-la-une', icon: Play },
    { title: 'Plats béninois', href: '/dashboard#horizon-plats', icon: Utensils },
    { title: 'Restaurants', href: '/dashboard#horizon-restaurants', icon: Store },
    { title: 'Marques Made in Bénin', href: '/dashboard#horizon-marques', icon: ShoppingBag },
    { title: 'Créateurs', href: '/dashboard#horizon-createurs', icon: UsersRound },
    { title: 'Documentaires', href: '/dashboard#horizon-documentaires', icon: Film },
    { title: 'Actualités', href: '/dashboard#horizon-actualites', icon: Newspaper },
    { title: 'Infos pratiques', href: '/dashboard#horizon-infos', icon: Info },
    { title: 'Événements', href: '/dashboard#horizon-evenements', icon: CalendarDays },
    { title: 'Culture & héritage', href: '/dashboard#horizon-culture', icon: Landmark },
    { title: 'Sites à visiter', href: '/dashboard#horizon-sites', icon: MapPinned },
    { title: 'Bénin moderne', href: '/dashboard#horizon-moderne', icon: Building2 },
    { title: 'Projets d’avenir', href: '/dashboard#horizon-avenir', icon: Lightbulb },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={home()} prefetch>
                                <Compass />
                                <span>Voir le site</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
