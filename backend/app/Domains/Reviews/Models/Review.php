<?php

namespace App\Domains\Reviews\Models;

use App\Domains\Artists\Models\Artist;
use App\Domains\Users\Models\User;
use App\Domains\Appointments\Models\Appointment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use HasFactory;

    protected $table = 'reviews';

    protected $fillable = [
        'artist_id',
        'customer_id',
        'appointment_id',
        'rating',
        'title',
        'comment',
        'is_published',
        'helpful_count',
    ];

    protected $casts = [
        'rating' => 'integer',
        'is_published' => 'boolean',
        'helpful_count' => 'integer',
    ];

    /**
     * Get the artist being reviewed.
     */
    public function artist(): BelongsTo
    {
        return $this->belongsTo(Artist::class);
    }

    /**
     * Get the customer who left the review.
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'customer_id');
    }

    /**
     * Get the appointment this review is for.
     */
    public function appointment(): BelongsTo
    {
        return $this->belongsTo(Appointment::class);
    }

    /**
     * Get average rating for artist.
     */
    public static function getAverageRatingForArtist($artistId)
    {
        return self::where('artist_id', $artistId)
            ->where('is_published', true)
            ->avg('rating');
    }

    /**
     * Get published reviews for artist.
     */
    public static function getPublishedForArtist($artistId, $limit = 10)
    {
        return self::where('artist_id', $artistId)
            ->where('is_published', true)
            ->orderBy('helpful_count', 'desc')
            ->limit($limit)
            ->get();
    }

    /**
     * Get rating distribution.
     */
    public static function getRatingDistribution($artistId)
    {
        return self::where('artist_id', $artistId)
            ->where('is_published', true)
            ->get()
            ->groupBy('rating')
            ->map(function ($items) {
                return $items->count();
            });
    }
}
