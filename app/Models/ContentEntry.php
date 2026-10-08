<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

#[Fillable([
    "slug",
    "pillar",
    "category",
    "title",
    "summary",
    "content",
    "metadata",
    "image_path",
    "gallery",
    "source_url",
    "status",
    "sort_order",
])]
class ContentEntry extends Model
{
    use HasFactory;

    public const STATUS_DRAFT = "draft";
    public const STATUS_PUBLISHED = "published";
    public const STATUS_ARCHIVED = "archived";

    public const PILLARS = [
        "vivre",
        "decouvrir",
        "creer",
        "comprendre",
    ];

    public const CATEGORIES = [
        "plats",
        "restaurants",
        "marques",
        "createurs",
        "documentaires",
        "actualites",
        "infos_pratiques",
        "evenements",
        "culture",
        "sites",
        "moderne",
        "projets",
        "sources",
    ];

    protected $attributes = [
        "status" => self::STATUS_DRAFT,
        "sort_order" => 0,
    ];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            "metadata" => "array",
            "gallery" => "array",
        ];
    }

    /**
     * @param  Builder<static>  $query
     * @return Builder<static>
     */
    public function scopePublished(Builder $query): Builder
    {
        return $query->where("status", self::STATUS_PUBLISHED);
    }

    /**
     * @param  Builder<static>  $query
     * @param  string  $pillar
     * @return Builder<static>
     */
    public function scopePillar(Builder $query, string $pillar): Builder
    {
        return $query->where("pillar", $pillar);
    }

    /**
     * @param  Builder<static>  $query
     * @param  string  $category
     * @return Builder<static>
     */
    public function scopeCategory(Builder $query, string $category): Builder
    {
        return $query->where("category", $category);
    }

    /**
     * @param  Builder<static>  $query
     * @return Builder<static>
     */
    public function scopeOrdered(Builder $query): Builder
    {
        return $query->orderBy("sort_order")->orderByDesc("created_at");
    }

    /**
     * Get the full URL for the image.
     */
    public function getImageUrlAttribute(): ?string
    {
        $path = $this->attributes["image_path"] ?? null;
        if (!$path) {
            return null;
        }

        if (str_starts_with($path, "http")) {
            return $path;
        }

        return "/storage/" . ltrim($path, "/");
    }

    /**
     * Get full URLs for gallery images.
     *
     * @return array<int, string>
     */
    public function getGalleryUrlsAttribute(): array
    {
        $gallery = $this->attributes["gallery"] ?? [];
        if (!is_array($gallery)) {
            return [];
        }

        return array_map(function ($path) {
            if (str_starts_with($path, "http")) {
                return $path;
            }
            return "/storage/" . ltrim($path, "/");
        }, $gallery);
    }

    /**
     * Safely get a metadata value.
     */
    public function getMetadataValue(string $key, mixed $default = null): mixed
    {
        $metadata = $this->attributes["metadata"] ?? [];
        if (!is_array($metadata)) {
            return $default;
        }

        return $metadata[$key] ?? $default;
    }
}

