<?php

namespace Database\Seeders;

use App\Models\Discoverable;
use Illuminate\Database\Seeder;

class DiscoverableSeeder extends Seeder
{
    public function run(): void
    {
        $profiles = [
            // ── MARQUES ───────────────────────────────────────────────────────
            [
                'slug'       => 'koffi-nation',
                'category'   => 'marques',
                'title'      => 'KOFFI NATION',
                'summary'    => 'Streetwear éditorial et essentiels du quotidien.',
                'content'    => 'La marque présente des pièces inspirées du streetwear et de Cotonou. Les sources consultées ne précisent pas le lieu de fabrication.',
                'source_url' => 'https://www.instagram.com/koffi.nation/',
                'gallery'    => [
                    ['path' => 'images/marques/WhatsApp Unknown 2026-10-07 at 12.02.45/WhatsApp Image 2026-10-07 at 12.02.39.jpeg',     'alt' => 'Tenue KOFFI NATION portée par un modèle.'],
                    ['path' => 'images/marques/WhatsApp Unknown 2026-10-07 at 12.02.45/WhatsApp Image 2026-10-07 at 12.02.39 (1).jpeg', 'alt' => 'Deux modèles portent des vêtements KOFFI NATION.'],
                    ['path' => 'images/marques/WhatsApp Unknown 2026-10-07 at 12.02.45/WhatsApp Image 2026-10-07 at 12.02.40.jpeg',     'alt' => 'Jersey KOFFI NATION rouge porté par un modèle.'],
                    ['path' => 'images/marques/WhatsApp Unknown 2026-10-07 at 12.02.45/WhatsApp Image 2026-10-07 at 12.02.40 (1).jpeg', 'alt' => 'Jersey KOFFI NATION jaune porté par un modèle.'],
                ],
                'status' => Discoverable::STATUS_PUBLISHED,
            ],
            [
                'slug'       => 'chloeewear',
                'category'   => 'marques',
                'title'      => 'Chloeewear',
                'summary'    => 'Marque féminine fondée au Bénin, autour de pièces en Adire confectionnées sur commande.',
                'content'    => 'Son site présente des robes, boubous et ensembles, avec commande directe auprès de la marque.',
                'source_url' => 'https://chloeewear.app/',
                'logo_path'  => 'images/marques/WhatsApp Unknown 2026-10-07 at 12.02.45/WhatsApp Image 2026-10-07 at 12.02.40 (2).jpeg',
                'gallery'    => [
                    ['path' => 'images/marques/WhatsApp Unknown 2026-10-07 at 12.02.45/WhatsApp Image 2026-10-07 at 12.02.40 (3).jpeg', 'alt' => 'Robe en Adire présentée dans les visuels Chloeewear.'],
                ],
                'status' => Discoverable::STATUS_PUBLISHED,
            ],
            [
                'slug'       => 'hypewear-bj',
                'category'   => 'marques',
                'title'      => 'Hypewear BJ',
                'summary'    => 'Hauts imprimés; le visuel fourni par Hypewear indique « Made in Benin ».',
                'content'    => "Les images reçues montrent plusieurs modèles graphiques et une photo de campagne du compte Hypewear BJ. La mention Made in Benin est rapportée comme affichée sur ce visuel.",
                'source_url' => 'https://www.instagram.com/hypewear.bj/',
                'logo_path'  => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.53 (3).jpeg',
                'gallery'    => [
                    ['path' => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.53 (5).jpeg', 'alt' => 'T-shirt imprimé fourni pour présenter Hypewear.'],
                    ['path' => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.54.jpeg',     'alt' => 'Haut à motif fourni pour présenter Hypewear.'],
                ],
                'status' => Discoverable::STATUS_PUBLISHED,
            ],
            [
                'slug'       => 'ayobeen',
                'category'   => 'marques',
                'title'      => 'AyoBeen',
                'summary'    => 'Marque de vêtements présentée par son compte officiel comme Made in Benin.',
                'content'    => "Ses publications mettent notamment en avant la collection City Edition — Cotonou et des jerseys aux couleurs du Bénin. La disponibilité des pièces est à vérifier auprès de la marque.",
                'source_url' => 'https://www.tiktok.com/@ayobeen',
                'logo_path'  => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.50.jpeg',
                'gallery'    => [
                    ['path' => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.51.jpeg',      'alt' => 'Jersey Nigeria présenté dans la sélection AyoBeen.'],
                    ['path' => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.51 (1).jpeg',  'alt' => "Jerseys Côte d'Ivoire, Nigeria et Bénin présentés par AyoBeen."],
                    ['path' => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.51 (2).jpeg',  'alt' => 'Deux modèles portent un jersey AyoBeen aux couleurs du Bénin.'],
                    ['path' => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.52.jpeg',      'alt' => 'Deux modèles portent des maillots AyoBeen aux couleurs du Bénin.'],
                ],
                'status' => Discoverable::STATUS_PUBLISHED,
            ],
            [
                'slug'       => 'oqp-tribe',
                'category'   => 'marques',
                'title'      => 'OQP Tribe — OnlyQualityPeople',
                'summary'    => 'Marque de vêtements urbains associée à Cotonou.',
                'content'    => "Le compte de la marque emploie le nom OQP Tribe — OnlyQualityPeople et publie des looks streetwear. ng.thecreator apparaît dans un contenu OQP; les sources consultées ne disent pas qu'il a fondé la marque.",
                'source_url' => 'https://www.instagram.com/oqptribe/',
                'logo_path'  => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.52 (1).jpeg',
                'gallery'    => [
                    ['path' => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.52 (2).jpeg',  'alt' => 'T-shirt OQP Tribe porté par un modèle.'],
                    ['path' => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.53 (1).jpeg',  'alt' => 'T-shirt Evolution of OQP porté par un modèle.'],
                    ['path' => 'images/marques/WhatsApp Image 2026-10-07 at 10.36.53 (2).jpeg',  'alt' => 'Collection OQP Tribe présentée par trois modèles.'],
                ],
                'status' => Discoverable::STATUS_PUBLISHED,
            ],

            // ── CRÉATEUR MIS EN AVANT (sidebar de la section marques) ─────────
            [
                'slug'       => 'ng-thecreator',
                'category'   => 'createurs',
                'title'      => 'ng.thecreator',
                'summary'    => "Créateur de contenu à Cotonou, connu ici comme représentant d'OQP Tribe.",
                'content'    => "Ses contenus publics abordent les tenues et la vie locale. Une publication OQP le montre aux côtés du compte de la marque. Xwégbé le présente comme représentant, sans le qualifier de fondateur.",
                'source_url' => 'https://www.tiktok.com/@ng.thecreator',
                'status'     => Discoverable::STATUS_PUBLISHED,
            ],

            // ── RESTAURANTS ───────────────────────────────────────────────────
            [
                'slug'       => 'saveurs-du-benin',
                'category'   => 'restaurants',
                'title'      => 'Saveurs du Bénin',
                'summary'    => "Restaurant et traiteur de saveurs locales; son compte présente notamment l'igname pilée et des sauces du pays.",
                'content'    => "Le compte officiel TikTok présente Saveurs du Bénin comme restaurant et traiteur de saveurs locales. Les vidéos consultées mettent en avant l'igname pilée et plusieurs sauces locales.",
                'source_url' => 'https://www.tiktok.com/@valeriegbaguidivinakpon',
                'location'   => 'Rue 400, Cotonou, Bénin',
                'maps_url'   => 'https://www.google.com/maps/place/SAVEURS+DU+BENIN/@6.3693637,2.4125463,17z/',
                'status'     => Discoverable::STATUS_PUBLISHED,
            ],
            [
                'slug'       => 'la-maison-kai',
                'category'   => 'restaurants',
                'title'      => 'La Maison Kaï',
                'summary'    => 'Cuisine béninoise et saveurs locales, présentées dans une vidéo de découverte à Cotonou.',
                'content'    => "Le compte de la maison parle d'une cuisine d'héritage; une vidéo TikTok de découverte la présente comme une adresse de cuisine béninoise et de saveurs locales.",
                'source_url' => 'https://www.instagram.com/la_maison_kai_bj/',
                'location'   => 'Cotonou, Bénin · repère Google Maps 9C5P+JV',
                'maps_url'   => 'https://www.google.com/maps/place/LA+MAISON+KA%C3%8F/@6.3590824,2.4371681,17z/',
                'status'     => Discoverable::STATUS_PUBLISHED,
            ],
            [
                'slug'       => 'chez-dagan-fidjrosse',
                'category'   => 'restaurants',
                'title'      => 'Chez Dagan',
                'summary'    => 'Restaurant de spécialités ouest-africaines; sa carte propose aussi des sauces locales comme crincrin et assrokoui.',
                'content'    => 'Le compte TikTok situe le restaurant à Fidjrossè. Son menu en ligne détaille des spécialités du jour, dont crincrin, assrokoui et plusieurs sauces.',
                'source_url' => 'https://www.tiktok.com/@chezdagan229',
                'location'   => 'Fidjrossè, Cotonou, Bénin · repère Google Maps 996C+QX5',
                'maps_url'   => 'https://www.google.com/maps/place/Bar+Restaurant+chez+DAGAN+Fidjross%C3%A8/@6.3619166,2.3724247,17z/',
                'status'     => Discoverable::STATUS_PUBLISHED,
            ],
            [
                'slug'       => 'maquis-chez-rach',
                'category'   => 'restaurants',
                'title'      => 'Maquis Chez Rach — Igname Pilée',
                'summary'    => 'Atassi et igname pilée figurent sur le compte officiel du maquis.',
                'content'    => 'La bio TikTok indique atassi et igname pilée, avec une localisation à Cotonou. Les horaires sont volontairement omis car ils peuvent changer.',
                'source_url' => 'https://www.tiktok.com/@maquis.chez.rach',
                'location'   => 'Cotonou, Bénin · repère Google Maps 9C7G+329',
                'maps_url'   => 'https://www.google.com/maps/place/MAQUIS+CHEZ+RACH/@6.3626615,2.4251173,17z/',
                'status'     => Discoverable::STATUS_PUBLISHED,
            ],
            [
                'slug'       => 'le-pacha-hedomey',
                'category'   => 'restaurants',
                'title'      => 'Le Pacha',
                'summary'    => "Restaurant de spécialités africaines et européennes; son compte présente aussi l'atassi.",
                'content'    => "Le compte TikTok du restaurant décrit une cuisine africaine et européenne et publie un plat d'atassi. L'adresse est située à Hédomey, Cotonou.",
                'source_url' => 'https://www.tiktok.com/@restaurant_bar_le_',
                'location'   => 'Hédomey, Cotonou, Bénin · repère Google Maps 98C7+RJ',
                'maps_url'   => 'https://www.google.com/maps/place/Restaurant+bar+caf%C3%A9+LE+PACHA/@6.3720397,2.3140928,17z/',
                'status'     => Discoverable::STATUS_PUBLISHED,
            ],
        ];

        foreach ($profiles as $profile) {
            Discoverable::updateOrCreate(
                ['slug' => $profile['slug']],
                $profile,
            );
        }

        $this->call(CreatorsSeeder::class);
    }
}
