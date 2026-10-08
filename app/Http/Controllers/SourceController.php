<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class SourceController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('sources/index');
    }
}
