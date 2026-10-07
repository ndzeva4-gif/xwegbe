<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('discoverables', function (Blueprint $table) {
            $table->string('location')->nullable();
            $table->text('maps_url')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('discoverables', function (Blueprint $table) {
            $table->dropColumn(['location', 'maps_url']);
        });
    }
};