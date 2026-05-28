<?php

namespace App\Domains\Portfolio\Models;

use App\Domains\Artists\Models\Artist;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PortfolioItem extends Model
{
    use HasFactory;

    protected $table = 'portfolio_items';

    protected $fillable = [
        'artist_id',
        'title',
        'description',
        'image_path',
        'category',
        'likes_count',
        'views_count',
        'is_featured',
        'display_order',
        'is_published',
    ];

    protected $casts = [
        'likes_count' => 'integer',
        'views_count' => 'integer',
        'is_featured' => 'boolean',
        'display_order' => 'integer',
        'is_published' => 'boolean',
    ];

    /**
     * Get the artist that owns this portfolio item.
     */
    public function artist(): BelongsTo
    {
        return $this->belongsTo(Artist::class);
    }

    /**
     * Increment view count.
     */
    public function incrementViews(): void
    {
        $this->increment('views_count');
    }

    /**
     * Increment like count.
     */
    public function incrementLikes(): void
    {
        $this->increment('likes_count');
    }

    /**
     * Get published portfolio items.
     */
    public static function getPublished()
    {
        return self::where('is_published', true)
            ->orderBy('display_order')
            ->get();
    }

    /**
     * Get featured portfolio items.
     */
    public static function getFeatured($limit = 5)
    {
        return self::where('is_published', true)
            ->where('is_featured', true)
            ->orderBy('likes_count', 'desc')
            ->limit($limit)
            ->get();
    }
}
