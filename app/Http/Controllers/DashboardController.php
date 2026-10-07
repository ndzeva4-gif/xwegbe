<?php

namespace App\Http\Controllers;

use App\Models\Discoverable;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        $profiles = Discoverable::published()
            ->whereIn('category', ['marques', 'createurs'])
            ->orderBy('id')
            ->get([
                'slug', 'category', 'title', 'summary', 'content', 'source_url',
                'logo_path', 'gallery',
            ]);
        $restaurants = Discoverable::published()
            ->where('category', 'restaurants')
            ->orderBy('title')
            ->get(['slug', 'title', 'summary', 'location', 'maps_url', 'source_url']);

        return Inertia::render('dashboard', [
            'brands' => $profiles->where('category', 'marques')->values(),
            'creators' => $profiles->where('category', 'createurs')->values(),
            'restaurants' => $restaurants,
        ]);
    }
}