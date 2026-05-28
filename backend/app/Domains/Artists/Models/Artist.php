<?php

namespace App\Domains\Artists\Models;

use App\Domains\Users\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Artist extends Model
{
    use HasFactory;

    protected $table = 'artist_profiles';

    protected $fillable = [
        'user_id',
        'bio',
        'specialties',
        'experience_years',
        'hourly_rate',
        'total_appointments',
        'total_revenue',
        'average_rating',
        'total_reviews',
        'is_verified',
        'verification_documents_url',
    ];

    protected $casts = [
        'specialties' => 'array',
        'verification_documents_url' => 'array',
        'hourly_rate' => 'decimal:2',
        'total_revenue' => 'decimal:2',
        'average_rating' => 'decimal:2',
        'is_verified' => 'boolean',
    ];

    /**
     * Get the user associated with this artist profile
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    /**
     * Get the artist's full name from their user profile
     */
    public function getName(): string
    {
        return $this->user->name ?? 'Unknown Artist';
    }

    /**
     * Get the artist's email from their user profile
     */
    public function getEmail(): string
    {
        return $this->user->email ?? '';
    }
}
