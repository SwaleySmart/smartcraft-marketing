<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

// Inertia.js routes for headless Statamic
Route::get('/', [PageController::class, 'index'])->name('home');

// Catch-all route for Statamic entries - EXCLUDE Statamic system routes
// Note: This route should be last to avoid conflicts with Statamic routes
Route::get('/{uri}', [PageController::class, 'show'])
    ->where('uri', '^(?!cp).*')  // Exclude /cp routes
    ->name('page.show')
    ->fallback();
