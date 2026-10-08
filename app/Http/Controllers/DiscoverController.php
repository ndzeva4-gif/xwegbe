<?php

namespace App\Http\Controllers;

use App\Models\ContentEntry;
use App\Models\Discoverable;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class DiscoverController extends Controller
{
    private const STATIC_PILLARS = ['evenements', 'culture', 'sites', 'moderne', 'une', 'plats', 'restaurants', 'documentaires', 'avenir'];

    public function index(?string $pillar = null): Response|RedirectResponse
    {
        if ($pillar === 'createurs') {
            $entries = ContentEntry::published()
                ->where('pillar', 'createurs')
                ->ordered()
                ->get();

            return Inertia::render('discover/createurs', [
                'entries' => $entries,
            ]);
        }

        if ($pillar === 'marques') {
            $profiles = Discoverable::published()
                ->whereIn('category', ['marques', 'createurs'])
                ->orderBy('id')
                ->get(['slug', 'category', 'title', 'summary', 'content', 'source_url', 'logo_path', 'gallery']);

            return Inertia::render('discover/marques', [
                'brands'   => $profiles->where('category', 'marques')->values(),
                'creators' => $profiles->where('category', 'createurs')->values(),
            ]);
        }

        if ($pillar && in_array($pillar, self::STATIC_PILLARS)) {
            return Inertia::render('discover/' . $pillar);
        }

        return redirect('/');
    }

    public function show(string $pillar, string $slug): Response
    {
        $entry = ContentEntry::published()
            ->where('pillar', $pillar)
            ->where('slug', $slug)
            ->firstOrFail();

        $related = ContentEntry::published()
            ->where('pillar', $pillar)
            ->where('slug', '!=', $slug)
            ->ordered()
            ->limit(4)
            ->get();

        return Inertia::render('discover/show', [
            'pillar'  => $pillar,
            'entry'   => $entry,
            'related' => $related,
        ]);
    }
}
