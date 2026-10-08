import { InfoCard, type InfoCardData } from '@/components/festival/info-card';
import { ACCENT_TEXT, PhotoSlot, type PagneAccent } from '@/components/festival/photo-slot';
import { Reveal } from '@/components/festival/reveal';
import { SectionHeading } from '@/components/festival/section-heading';

/*
 * Mobile : les cartes sont sur une seule rangée qu'on fait défiler du doigt
 * de droite à gauche (swipe), chaque carte s'accroche au bord.
 * À partir de "sm" (tablette / ordinateur) : on retrouve la grille normale.
 */
const SWIPE =
    '-mx-6 flex snap-x snap-mandatory scroll-px-6 overflow-x-auto overflow-y-hidden px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0';

/* Largeur d'une carte dans la rangée mobile : on voit un bout de la suivante. */
const SWIPE_ITEM = 'w-[82%] shrink-0 snap-start sm:w-auto';

type EventData = {
    title: string;
    dates: string;
    place: string;
    description: string;
    photoLabel: string;
    photoSrc?: string;
    accent: PagneAccent;
    learnMoreUrl: string;
};

const EVENTS: EventData[] = [
    {
        title: 'WeLovEya Festival',
        dates: '26 – 27 décembre 2026',
        place: 'Cotonou',
        description:
            "Fin décembre, Cotonou devient une capitale de l'afrobeats. Le plus grand festival urbain du pays réunit des dizaines de milliers de festivaliers autour des plus grands noms de la scène ouest-africaine et internationale. Programmation à paraître.",
        photoLabel: 'WeLovEya Festival, Cotonou',
        photoSrc: '/images/benin/welove-eya.jpg',
        accent: 'magenta',
        learnMoreUrl: 'https://weloveyafestival.com/',
    },
    {
        title: 'Vodun Days',
        dates: '8 – 10 janvier',
        place: 'Ouidah',
        description:
            "Trois jours durant lesquels Ouidah devient la scène vivante du vodun : cérémonies de sortie des couvents, défilés de Zangbéto et d'Egungun, village artisanal, concerts en soirée sur la plage. Le 10 janvier est jour férié national. Édition 2026 terminée.",
        photoLabel: 'Vodun Days, Ouidah',
        photoSrc: '/images/benin/vodun-days.jpg',
        accent: 'red',
        learnMoreUrl: 'https://vodundays.bj/',
    },
    {
        title: 'Gaani',
        dates: '25 – 27 août',
        place: 'Nikki',
        description:
            'Grande fête identitaire des Baatonu, des Boo et des communautés alliées du nord du Bénin. Sortie des tambours sacrés, fête principale et cérémonie Kayessi rythment trois jours de célébration. Édition 2026 terminée.',
        photoLabel: 'Gaani, Nikki',
        accent: 'gold',
        learnMoreUrl: 'https://beninwebtv.bj/',
    },
];

const CULTURE_PHOTOS: { label: string; src?: string; accent: PagneAccent }[] = [
    { label: 'Tissus et pagnes traditionnels', src: '/images/benin/culture-textiles.jpg', accent: 'orange' },
    { label: 'Danseurs traditionnels en costume', src: '/images/benin/culture-danse.jpg', accent: 'magenta' },
    { label: 'Cuisine locale', src: '/images/benin/culture-cuisine.jpg', accent: 'gold' },
    { label: 'Vendeuse de rue, plantains grillés', src: '/images/benin/culture-street-food.jpg', accent: 'teal' },
    { label: 'Mode et tissus wax', src: '/images/benin/culture-mode.jpg', accent: 'green' },
    { label: 'Pêcheurs, tradition côtière', src: '/images/benin/culture-peche.jpg', accent: 'red' },
    { label: 'Street art, fresque murale à Cotonou', src: '/images/benin/culture-street-art.jpg', accent: 'orange' },
    { label: 'Cérémonie vodun, Ouidah', src: '/images/benin/culture-ceremonie.jpg', accent: 'red' },
    { label: 'Danseur en costume rituel perlé', src: '/images/benin/culture-masque.jpg', accent: 'magenta' },
];

const TOURIST_SITES: InfoCardData[] = [
    {
        title: "Palais royaux d'Abomey",
        tag: 'Patrimoine UNESCO',
        description:
            "Dix palais de terre, ornés de bas-reliefs racontant l'histoire des rois du royaume du Dahomey (1600-1894), ancienne capitale du pays.",
        photoLabel: "Palais royaux d'Abomey",
        photoSrc: '/images/benin/site-abomey.jpg',
        accent: 'gold',
    },
    {
        title: 'Ganvié',
        tag: "La Venise de l'Afrique",
        description:
            "Le plus grand village lacustre d'Afrique, bâti sur le lac Nokoué par le peuple Tofinu pour échapper aux razzias esclavagistes. Plus de 20 000 habitants.",
        photoLabel: 'Village lacustre de Ganvié',
        photoSrc: '/images/benin/site-ganvie.jpg',
        accent: 'teal',
    },
    {
        title: 'Parc national de la Pendjari',
        tag: 'Réserve de biosphère UNESCO',
        description:
            "4 700 km² au nord du pays : lions, éléphants, guépards et plus de 400 espèces d'oiseaux, l'une des dernières grandes savanes sauvages d'Afrique de l'Ouest.",
        photoLabel: 'Entrée du parc de la Pendjari',
        photoSrc: '/images/benin/site-pendjari.jpg',
        accent: 'orange',
    },
    {
        title: 'Route des Esclaves',
        tag: 'Mémoire',
        description:
            "De la Place Chacha à la Porte du Non-Retour, un parcours mémoriel à Ouidah qui retrace l'histoire de la traite atlantique.",
        photoLabel: 'Porte du Non-Retour, Ouidah',
        photoSrc: '/images/benin/site-route-esclaves.jpg',
        accent: 'magenta',
    },
    {
        title: 'Chutes de Kota',
        tag: 'Nature, Natitingou',
        description:
            "Une cascade nichée près de Natitingou, dans les collines de l'Atacora au nord du pays — un des rendez-vous nature les plus photographiés du Bénin.",
        photoLabel: 'Chutes de Kota, Natitingou',
        photoSrc: '/images/benin/site-kota-falls.jpg',
        accent: 'green',
    },
    {
        title: 'Mémorial du Grand Jubilé',
        tag: 'Ouidah',
        description:
            "Face à l'océan, ce monument commémore l'arrivée des premiers messagers de la foi chrétienne au Dahomey — une étape du parcours mémoriel de Ouidah.",
        photoLabel: 'Mémorial du Grand Jubilé, Ouidah',
        photoSrc: '/images/benin/site-grand-jubile.jpg',
        accent: 'red',
    },
];

const MODERN_PLACES: InfoCardData[] = [
    {
        title: 'Aéroport Cardinal Bernardin Gantin',
        tag: 'Infrastructure',
        description:
            "L'aéroport international de Cotonou se modernise : extension du terminal, nouvelles zones commerciales, capacité doublée.",
        photoLabel: 'Aéroport de Cotonou',
        accent: 'orange',
    },
    {
        title: 'Port autonome de Cotonou',
        tag: 'Modernisation',
        description:
            'Un chantier soutenu par la Banque africaine de développement : nouveau terminal et infrastructures portuaires étendues, dans le cadre du plan directeur 2021-2026.',
        photoLabel: 'Port de Cotonou',
        photoSrc: '/images/benin/moderne-port.jpg',
        accent: 'green',
    },
    {
        title: 'Cotonou en mouvement',
        tag: 'Vie urbaine',
        description:
            "Motos, marchés et gratte-ciel en chantier : la capitale économique du pays ne s'arrête jamais, entre tradition commerçante et modernisation rapide.",
        photoLabel: 'Rue animée de Cotonou',
        photoSrc: '/images/benin/moderne-cotonou.jpg',
        accent: 'teal',
    },
    {
        title: 'Commerce moderne',
        tag: 'Nouveaux usages',
        description:
            'Supermarchés, enseignes internationales : le quotidien béninois se transforme aussi dans ses habitudes de consommation.',
        photoLabel: 'Commerce moderne à Cotonou',
        photoSrc: '/images/benin/moderne-commerce.jpg',
        accent: 'gold',
    },
    {
        title: "Statue de l'Amazone",
        tag: 'Monument, Cotonou',
        description:
            "À l'entrée de Cotonou, cette statue rend hommage aux Amazones du Dahomey — guerrières historiques — et compte parmi les plus hauts monuments d'Afrique.",
        photoLabel: "Statue de l'Amazone, Cotonou",
        photoSrc: '/images/benin/moderne-statue.jpg',
        accent: 'red',
    },
];

export function EventsSection() {
    return (
        <section id="evenements" className="scroll-mt-24 bg-night px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    accent="orange"
                    eyebrow="Temps forts"
                    title="À ne pas manquer au Bénin"
                    lead="Rendez-vous incontournables du calendrier béninois, entre spiritualité, culture et scène urbaine."
                />
                <div className={`mt-10 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 ${SWIPE}`}>
                    {EVENTS.map((event, i) => (
                        <Reveal key={event.title} delay={i * 100} className={SWIPE_ITEM}>
                            <a
                                href={event.learnMoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block overflow-hidden rounded-2xl border border-cream/10 bg-night-elevated transition-colors hover:border-cream/20"
                            >
                                <div className="aspect-[16/9]">
                                    <PhotoSlot
                                        label={event.photoLabel}
                                        src={event.photoSrc}
                                        accent={event.accent}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-2xl uppercase transition-colors group-hover:text-pagne-gold">
                                        {event.title}
                                    </h3>
                                    <p className="mt-1 font-mono text-xs tracking-widest text-pagne-gold uppercase">
                                        {event.dates} · {event.place}
                                    </p>
                                    <p className="mt-3 text-sm text-cream/65">
                                        {event.description}
                                    </p>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>
                <div className="mt-8 text-right">
                    <a href="/decouvrir/evenements" className="font-mono text-sm text-pagne-orange/70 transition-opacity hover:opacity-100">
                        Voir tous les événements →
                    </a>
                </div>
            </div>
        </section>
    );
}

export function CultureSection() {
    return (
        <section id="culture" className="scroll-mt-24 bg-night-elevated px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    accent="magenta"
                    eyebrow="Culture & héritage"
                    title="Le Bénin, berceau du vodun"
                    lead="Ancien cœur du royaume du Dahomey, le Bénin est reconnu comme le berceau historique du culte vodun — une spiritualité qui a traversé l'Atlantique et marqué des cultures dans toutes les Amériques. Art royal, tissus, gastronomie et récits oraux perpétuent encore aujourd'hui cet héritage vivant."
                />
                <div className={`mt-10 gap-3 sm:grid-cols-3 sm:gap-4 ${SWIPE}`}>
                    {CULTURE_PHOTOS.map((photo, i) => (
                        <Reveal
                            key={photo.label}
                            delay={i * 70}
                            className="aspect-square w-[64%] shrink-0 snap-start overflow-hidden rounded-xl sm:w-auto"
                        >
                            <PhotoSlot label={photo.label} src={photo.src} accent={photo.accent} />
                        </Reveal>
                    ))}
                </div>
                <div className="mt-8 text-right">
                    <a href="/decouvrir/culture" className="font-mono text-sm text-pagne-magenta/70 transition-opacity hover:opacity-100">
                        Voir la page Culture →
                    </a>
                </div>
            </div>
        </section>
    );
}

export function TouristSitesSection() {
    return (
        <section id="sites" className="scroll-mt-24 bg-night px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    accent="teal"
                    eyebrow="À visiter"
                    title="Sites touristiques incontournables"
                />
                <div className={`mt-10 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 ${SWIPE}`}>
                    {TOURIST_SITES.map((site, i) => (
                        <Reveal key={site.title} delay={i * 90} className={SWIPE_ITEM}>
                            <InfoCard {...site} />
                        </Reveal>
                    ))}
                </div>
                <div className="mt-8 text-right">
                    <a href="/decouvrir/sites" className="font-mono text-sm text-pagne-teal/70 transition-opacity hover:opacity-100">
                        Voir tous les sites →
                    </a>
                </div>
            </div>
        </section>
    );
}

export function ModernBeninSection() {
    return (
        <section id="moderne" className="scroll-mt-24 bg-night-elevated px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    accent="green"
                    eyebrow="Bénin moderne"
                    title="Un pays qui construit son avenir"
                />
                <div className={`mt-10 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 ${SWIPE}`}>
                    {MODERN_PLACES.map((place, i) => (
                        <Reveal key={place.title} delay={i * 90} className={SWIPE_ITEM}>
                            <InfoCard {...place} />
                        </Reveal>
                    ))}
                </div>
                <div className="mt-8 text-right">
                    <a href="/decouvrir/moderne" className="font-mono text-sm text-pagne-green/70 transition-opacity hover:opacity-100">
                        Voir le Bénin moderne →
                    </a>
                </div>
            </div>
        </section>
    );
}

export function FutureProjectsSection() {
    return (
        <section id="avenir" className="scroll-mt-24 bg-night px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="rounded-3xl border border-cream/10 bg-gradient-to-br from-pagne-orange/10 via-night-elevated to-pagne-magenta/10 p-10 sm:p-14">
                        <SectionHeading
                            accent="gold"
                            eyebrow="Projets d'avenir"
                            title="Un pays qui se réinvente"
                            lead="Le Bénin multiplie les grands chantiers — innovation, tourisme, infrastructures — pour écrire une nouvelle page de son histoire. Xwégbé existe pour raconter cet élan : donner au monde une nouvelle raison de découvrir le Bénin."
                        />
                        <div className="mt-8">
                            <a href="/decouvrir/avenir" className="font-mono text-sm text-pagne-gold/70 transition-opacity hover:opacity-100">
                                Voir les projets d'avenir →
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
