<?php

namespace Tests\Feature;

use App\Models\Discoverable;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DiscoverableTest extends TestCase
{
    use RefreshDatabase;

    public function test_users_can_favorite_a_discoverable_only_once(): void
    {
        $user = User::factory()->create();
        $discoverable = Discoverable::create([
            'slug' => 'atassi',
            'category' => 'plats',
            'title' => 'Atassi',
            'summary' => 'Sélection éditoriale.',
        ]);

        $user->favorites()->syncWithoutDetaching($discoverable->id);
        $user->favorites()->syncWithoutDetaching($discoverable->id);

        $this->assertCount(1, $user->favorites);
        $this->assertCount(1, $discoverable->favoritedBy);
    }

    public function test_discoverables_are_drafts_by_default(): void
    {
        $discoverable = Discoverable::create([
            'slug' => 'fiche-brouillon',
            'category' => 'plats',
            'title' => 'Fiche brouillon',
            'summary' => 'Contenu non publié.',
        ]);

        $this->assertSame(Discoverable::STATUS_DRAFT, $discoverable->status);
        $this->assertCount(0, Discoverable::published()->get());
    }
}