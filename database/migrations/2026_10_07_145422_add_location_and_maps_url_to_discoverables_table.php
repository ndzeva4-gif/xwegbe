<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('discoverables', function (Blueprint $table) {
            if (! Schema::hasColumn('discoverables', 'location')) {
                $table->string('location')->nullable();
            }
            if (! Schema::hasColumn('discoverables', 'maps_url')) {
                $table->string('maps_url')->nullable();
            }
        });
    }

    public function down(): void
    {
        Schema::table('discoverables', function (Blueprint $table) {
            $table->dropColumn(['location', 'maps_url']);
        });
    }
};