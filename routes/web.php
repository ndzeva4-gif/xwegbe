<?php

use App\Http\Controllers\Auth\GoogleAuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DiscoverController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SourceController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::get('auth/google/redirect', [GoogleAuthController::class, 'redirect'])->name('auth.google.redirect');
Route::get('auth/google/callback', [GoogleAuthController::class, 'callback'])->name('auth.google.callback');

// Discover routes (4 pillars + detail)
Route::get('/decouvrir/{pillar?}', [DiscoverController::class, 'index'])->name('discover.index');
Route::get('/decouvrir/{pillar}/{slug}', [DiscoverController::class, 'show'])->name('discover.show');

// Sources annuaire ("Voir le site")
Route::get('/sources', [SourceController::class, 'index'])->name('sources');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
});

require __DIR__.'/settings.php';
