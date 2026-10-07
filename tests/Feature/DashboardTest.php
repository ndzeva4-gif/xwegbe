<?php

namespace Tests\Feature;

use App\Models\User;
use Database\Seeders\DiscoverableSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_to_the_login_page()
    {
        $response = $this->get(route('dashboard'));
        $response->assertRedirect(route('login'));
    }

    public function test_authenticated_users_can_visit_the_dashboard()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->get(route('dashboard'));
        $response->assertOk();
    }

    public function test_dashboard_receives_published_brands_and_creator_profiles(): void
    {
        $this->seed(DiscoverableSeeder::class);
        $user = User::factory()->create();

        $this->actingAs($user)
            ->get(route('dashboard'))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('dashboard')
                ->has('brands', 5)
                ->has('creators', 1)
                ->where('creators.0.slug', 'ng-thecreator')
                ->where('brands.4.slug', 'oqp-tribe')
                ->where('brands.3.logo_path', 'images/marques/WhatsApp Image 2026-10-07 at 10.36.50.jpeg')
                ->where('brands.3.gallery.1.alt', 'Jerseys Côte d’Ivoire, Nigeria et Bénin présentés par AyoBeen.')
                ->where('brands.4.logo_path', 'images/marques/WhatsApp Image 2026-10-07 at 10.36.52 (1).jpeg')
                ->where('brands.4.gallery.0.path', 'images/marques/WhatsApp Image 2026-10-07 at 10.36.52 (2).jpeg')
                ->where('brands.4.gallery.2.alt', 'Collection OQP Tribe présentée par trois modèles.')
            );
    }
}
