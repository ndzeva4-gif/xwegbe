import { InfoCard, type InfoCardData } from '@/components/festival/info-card';
import { ACCENT_TEXT, PhotoSlot, type PagneAccent } from '@/components/festival/photo-slot';
import { Reveal } from '@/components/festival/reveal';
import { SectionHeading } from '@/components/festival/section-heading';

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
        dates: '27 – 28 décembre',
        place: 'Esplanade de l’Amazone, Cotonou',
        description:
            'Fin décembre, Cotonou devient une capitale de l’afrobeats. Le plus grand festival urbain du pays réunit chaque année des dizaines de milliers de festivaliers autour des plus grands noms de la scène ouest-africaine et internationale.',
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
            'Trois jours durant lesquels Ouidah devient la scène vivante du vodun : cérémonies, concerts, expositions et danses. Le vodun est religion officielle au Bénin depuis 1996 ; le 10 janvier est jour férié national.',
        photoLabel: 'Vodun Days, Ouidah',
        photoSrc: '/images/benin/vodun-days.jpg',
        accent: 'red',
        learnMoreUrl: 'https://vodundays.bj/',
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
        title: 'Palais royaux d’Abomey',
        tag: 'Patrimoine UNESCO',
        description:
            'Dix palais de terre, ornés de bas-reliefs racontant l’histoire des rois du royaume du Dahomey (1600-1894), ancienne capitale du pays.',
        photoLabel: 'Palais royaux d’Abomey',
        accent: 'gold',
    },
    {
        title: 'Ganvié',
        tag: 'La Venise de l’Afrique',
        description:
            'Le plus grand village lacustre d’Afrique, bâti sur le lac Nokoué par le peuple Tofinu pour échapper aux razzias esclavagistes. Plus de 20 000 habitants.',
        photoLabel: 'Village lacustre de Ganvié',
        photoSrc: '/images/benin/site-ganvie.jpg',
        accent: 'teal',
    },
    {
        title: 'Parc national de la Pendjari',
        tag: 'Réserve de biosphère UNESCO',
        description:
            '4 700 km² au nord du pays : lions, éléphants, guépards et plus de 400 espèces d’oiseaux, l’une des dernières grandes savanes sauvages d’Afrique de l’Ouest.',
        photoLabel: 'Faune du parc de la Pendjari',
        accent: 'orange',
    },
    {
        title: 'Route des Esclaves',
        tag: 'Mémoire',
        description:
            'De la Place Chacha à la Porte du Non-Retour, un parcours mémoriel à Ouidah qui retrace l’histoire de la traite atlantique.',
        photoLabel: 'Porte du Non-Retour, Ouidah',
        photoSrc: '/images/benin/site-route-esclaves.jpg',
        accent: 'magenta',
    },
    {
        title: 'Chutes de Kota',
        tag: 'Nature, Natitingou',
        description:
            'Une cascade nichée près de Natitingou, dans les collines de l’Atacora au nord du pays — un des rendez-vous nature les plus photographiés du Bénin.',
        photoLabel: 'Chutes de Kota, Natitingou',
        photoSrc: '/images/benin/site-kota-falls.jpg',
        accent: 'green',
    },
    {
        title: 'Mémorial du Grand Jubilé',
        tag: 'Ouidah',
        description:
            'Face à l’océan, ce monument commémore l’arrivée des premiers messagers de la foi chrétienne au Dahomey — une étape du parcours mémoriel de Ouidah.',
        photoLabel: 'Mémorial du Grand Jubilé, Ouidah',
        photoSrc: '/images/benin/site-grand-jubile.jpg',
        accent: 'red',
    },
];

const MODERN_PLACES: InfoCardData[] = [
    {
        title: 'Sèmè City',
        tag: 'Cité de l’innovation',
        description:
            '336 hectares dédiés à l’enseignement supérieur, la recherche et l’économie du savoir, opérationnelle depuis la rentrée 2025. L’un des grands projets du programme Bénin Révélé.',
        photoLabel: 'Campus de Sèmè City',
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
            'Motos, marchés et gratte-ciel en chantier : la capitale économique du pays ne s’arrête jamais, entre tradition commerçante et modernisation rapide.',
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
        title: 'Statue de l’Amazone',
        tag: 'Monument, Cotonou',
        description:
            'À l’entrée de Cotonou, cette statue rend hommage aux Amazones du Dahomey — guerrières historiques — et compte parmi les plus hauts monuments d’Afrique.',
        photoLabel: 'Statue de l’Amazone, Cotonou',
        photoSrc: '/images/benin/moderne-statue.jpg',
        accent: 'red',
    },
];

export function EventsSection() {
    return (
        <section id="evenements" className="bg-night px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    accent="orange"
                    eyebrow="Autres rendez-vous"
                    title="À ne pas manquer au Bénin"
                    lead="Savanna Nova n'est pas la seule occasion de vivre le Bénin en musique — voici deux temps forts bien réels du calendrier local."
                />
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {EVENTS.map((event, i) => (
                        <Reveal key={event.title} delay={i * 100}>
                            <div className="overflow-hidden rounded-2xl border border-cream/10 bg-night-elevated">
                                <div className="aspect-[16/9]">
                                    <PhotoSlot
                                        label={event.photoLabel}
                                        src={event.photoSrc}
                                        accent={event.accent}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-2xl uppercase">
                                        {event.title}
                                    </h3>
                                    <p className="mt-1 font-mono text-xs tracking-widest text-pagne-gold uppercase">
                                        {event.dates} · {event.place}
                                    </p>
                                    <p className="mt-3 text-sm text-cream/65">
                                        {event.description}
                                    </p>
                                    <a
                                        href={event.learnMoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-opacity hover:opacity-80 ${ACCENT_TEXT[event.accent]}`}
                                    >
                                        En savoir plus
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function CultureSection() {
    return (
        <section id="culture" className="bg-night-elevated px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    accent="magenta"
                    eyebrow="Culture & héritage"
                    title="Le Bénin, berceau du vodun"
                    lead="Ancien cœur du royaume du Dahomey, le Bénin est reconnu comme le berceau historique du culte vodun — une spiritualité qui a traversé l'Atlantique et marqué des cultures dans toutes les Amériques. Art royal, tissus, gastronomie et récits oraux perpétuent encore aujourd'hui cet héritage vivant."
                />
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {CULTURE_PHOTOS.map((photo, i) => (
                        <Reveal key={photo.label} delay={i * 70} className="aspect-square overflow-hidden rounded-xl">
                            <PhotoSlot label={photo.label} src={photo.src} accent={photo.accent} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function TouristSitesSection() {
    return (
        <section id="sites" className="bg-night px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    accent="teal"
                    eyebrow="À visiter"
                    title="Sites touristiques incontournables"
                />
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {TOURIST_SITES.map((site, i) => (
                        <Reveal key={site.title} delay={i * 90}>
                            <InfoCard {...site} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ModernBeninSection() {
    return (
        <section id="moderne" className="bg-night-elevated px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    accent="green"
                    eyebrow="Bénin moderne"
                    title="Un pays qui construit son avenir"
                />
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {MODERN_PLACES.map((place, i) => (
                        <Reveal key={place.title} delay={i * 90}>
                            <InfoCard {...place} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function FutureProjectsSection() {
    return (
        <section id="avenir" className="bg-night px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="rounded-3xl border border-cream/10 bg-gradient-to-br from-pagne-orange/10 via-night-elevated to-pagne-magenta/10 p-10 sm:p-14">
                        <SectionHeading
                            accent="gold"
                            eyebrow="Projets d'avenir"
                            title="Un pays qui se réinvente"
                            lead="Porté par le programme Bénin Révélé, le pays multiplie les grands chantiers — innovation, tourisme, infrastructures — pour écrire une nouvelle page de son histoire. Savanna Nova s'inscrit dans cet élan : donner au monde une nouvelle raison de découvrir le Bénin."
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
