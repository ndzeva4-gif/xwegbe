<?php

namespace Database\Seeders;

use App\Models\ContentEntry;
use Illuminate\Database\Seeder;

class CreatorsSeeder extends Seeder
{
    public function run(): void
    {
        $dataFiles = [
            base_path('database/seeders/creators-data.php'),
            base_path('database/seeders/creators-data-02.php'),
            base_path('database/seeders/creators-data-03.php'),
            base_path('database/seeders/creators-data-04.php'),
            base_path('database/seeders/creators-data-05.php'),
            base_path('database/seeders/creators-data-06.php'),
        ];

        foreach ($dataFiles as $file) {
            if (! file_exists($file)) {
                continue;
            }
            $creators = include $file;
            foreach ($creators as $creator) {
                $this->seedCreator($creator);
            }
        }
    }

    /** Créateurs sélectionnés pour la page publique (1 M+ abonnés ou notoriété internationale). */
    private const PUBLISHED_IDS = [
        'creator_001', // Fanta Jolie Mousso — 7 M TikTok
        'creator_002', // Manouton — 6,4 M TikTok
        'creator_003', // Lachichi Oyono Guestapoo — 3,8 M TikTok
        'creator_004', // Régie Boyzz'er — 3,7 M TikTok
        'creator_005', // Legend Beatz — 2,9 M TikTok
        'creator_006', // RestauChezChiro — 2,8 M TikTok
        'creator_007', // Ery Ery — 2,2 M TikTok
        'creator_008', // Félicité Behanzin — 2 M TikTok
        'creator_009', // Shadé OGOU — 1,8 M TikTok
        'creator_010', // Éric Le Chinois — 1,7 M TikTok
        'creator_032', // Jojo le comédien — 1,5 M Instagram
        'creator_028', // Ataou Ligali — 1,1 M TikTok
        'creator_035', // Angélique Kidjo — notoriété internationale
    ];

    private function seedCreator(array $creator): void
    {
        $platforms = $creator['platforms'] ?? [];
        $followers = $creator['followers'] ?? [];
        $tiktok    = $platforms['tiktok'] ?? null;
        $instagram = $platforms['instagram'] ?? null;
        $youtube   = $platforms['youtube'] ?? null;

        $sourceUrl = $tiktok
            ? 'https://www.tiktok.com/' . ltrim($tiktok, '@')
            : ($instagram
                ? 'https://www.instagram.com/' . ltrim($instagram, '@')
                : null);

        $activePlatforms = array_keys(array_filter([
            'TikTok'    => $tiktok,
            'Instagram' => $instagram,
            'YouTube'   => $youtube,
        ]));
        $platformsLabel = implode(', ', $activePlatforms);

        $summary = $creator['name']
            . ' — ' . ($creator['category'] ?? '')
            . ' — ' . ($creator['city'] ?? '') . ', ' . ($creator['country'] ?? 'Bénin')
            . ($platformsLabel ? '. ' . $platformsLabel . '.' : '.');

        ContentEntry::updateOrCreate(
            ['slug' => $creator['id']],
            [
                'pillar'     => 'createurs',
                'category'   => 'createurs',
                'title'      => $creator['name'],
                'summary'    => $summary,
                'content'    => null,
                'source_url' => $sourceUrl,
                'status'     => in_array($creator['id'], self::PUBLISHED_IDS)
                    ? ContentEntry::STATUS_PUBLISHED
                    : ContentEntry::STATUS_DRAFT,
                'sort_order' => 0,
                'metadata'   => [
                    'creator_id'      => $creator['id'],
                    'username'        => $creator['username'] ?? null,
                    'category'        => $creator['category'] ?? null,
                    'content_type'    => $creator['content_type'] ?? [],
                    'city'            => $creator['city'] ?? null,
                    'country'         => $creator['country'] ?? 'Bénin',
                    'platforms'       => [
                        'tiktok'    => $tiktok,
                        'instagram' => $instagram,
                        'youtube'   => $youtube,
                    ],
                    'followers'       => [
                        'tiktok'    => $followers['tiktok'] ?? null,
                        'instagram' => $followers['instagram'] ?? null,
                        'youtube'   => $followers['youtube'] ?? null,
                    ],
                    'engagement_rate' => $creator['engagement_rate'] ?? null,
                    'verified_data'   => $creator['verified_data'] ?? false,
                    'last_verified'   => '2026-10-07',
                ],
            ],
        );
    }
}
