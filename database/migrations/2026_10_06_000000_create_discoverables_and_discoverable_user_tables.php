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
        Schema::create('discoverables', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('category', 64)->index();
            $table->string('title');
            $table->text('summary');
            $table->longText('content')->nullable();
            $table->text('source_url')->nullable();
            $table->string('status', 16)->default('draft')->index();
            $table->timestamps();
        });

        Schema::create('discoverable_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('discoverable_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
            $table->unique(['discoverable_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('discoverable_user');
        Schema::dropIfExists('discoverables');
    }
};