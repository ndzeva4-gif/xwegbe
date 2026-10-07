<?php

namespace App\Http\Controllers;

use App\Models\Discoverable;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(): Response
    {
        $restaurants = Discoverable::published()
            ->where('category', 'restaurants')
            ->orderBy('title')
            ->get(['slug', 'title', 'summary', 'location', 'maps_url', 'source_url']);

        return Inertia::render('welcome', [
            'restaurants' => $restaurants,
        ]);
    }
}