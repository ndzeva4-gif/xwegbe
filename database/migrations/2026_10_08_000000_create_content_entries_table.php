<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('content_entries', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('pillar', 32)->index();
            $table->string('category', 64)->index();
            $table->string('title');
            $table->text('summary');
            $table->longText('content')->nullable();
            $table->json('metadata')->nullable();
            $table->string('image_path')->nullable();
            $table->json('gallery')->nullable();
            $table->string('source_url')->nullable();
            $table->string('status', 16)->default('draft')->index();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();

            $table->index(['pillar', 'category', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('content_entries');
    }
};
