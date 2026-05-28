<?php

namespace App\Domains\Users\Models;

use App\Domains\Artists\Models\Artist;
use App\Domains\Shared\Enums\UserRole;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
        'role',
        'username',            // 🟢 FIXED: Added to stop the database constraint crash
        'avatar_url',              // 🟢 FIXED: Matches your migration field name 'avatar'
        'google_id',
        'github_id',           // 🟢 FIXED: For your GitHub auth stream
        'google_token',
        'oauth_refresh_token',
        'bio',
        'is_active',
        'last_seen_at',
    ];

    protected $hidden = [
        'password',
        'google_token',
        'oauth_refresh_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'role' => UserRole::class,
        'is_active' => 'boolean',
        'last_seen_at' => 'datetime',
    ];

    /**
     * Get the artist profile for this user (if artist)
     */
    public function artist(): HasOne
    {
        return $this->hasOne(Artist::class, 'user_id', 'id');
    }

    /**
     * Determine if the user is an artist
     */
    public function isArtist(): bool
    {
        return $this->role === UserRole::ARTIST;
    }

    /**
     * Determine if the user is a customer
     */
    public function isCustomer(): bool
    {
        return $this->role === UserRole::CUSTOMER;
    }

    /**
     * Determine if the user is an admin
     */
    public function isAdmin(): bool
    {
        return $this->role === UserRole::ADMIN;
    }
}