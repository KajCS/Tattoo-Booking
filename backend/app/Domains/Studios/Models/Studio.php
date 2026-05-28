<?php

namespace App\Domains\Studios\Models;

use App\Domains\Artists\Models\Artist;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Studio extends Model
{
    use HasFactory;

    protected $table = 'studios';

    protected $fillable = [
        'artist_id',
        'name',
        'description',
        'address',
        'city',
        'state',
        'zip_code',
        'latitude',
        'longitude',
        'phone',
        'email',
        'website',
        'hourly_rate',
        'capacity',
        'amenities',
        'is_active',
        'featured_image_path',
    ];

    protected $casts = [
        'latitude' => 'float',
        'longitude' => 'float',
        'hourly_rate' => 'decimal:2',
        'capacity' => 'integer',
        'amenities' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * Get the artist that owns this studio.
     */
    public function artist(): BelongsTo
    {
        return $this->belongsTo(Artist::class);
    }

    /**
     * Get active studios ordered by rating.
     */
    public static function getActive()
    {
        return self::where('is_active', true)
            ->orderBy('name')
            ->get();
    }

    /**
     * Get studios by city.
     */
    public static function getByCity($city)
    {
        return self::where('city', $city)
            ->where('is_active', true)
            ->get();
    }

    /**
     * Get studios within distance (miles).
     */
    public static function getNearby($lat, $long, $miles = 5)
    {
        $earthMiles = 3959; // Earth radius in miles
        
        return self::whereRaw("
            (
                {$earthMiles} * acos(
                    cos(radians({$lat})) *
                    cos(radians(latitude)) *
                    cos(radians(longitude) - radians({$long})) +
                    sin(radians({$lat})) *
                    sin(radians(latitude))
                )
            ) <= {$miles}
        ")
        ->where('is_active', true)
        ->get();
    }

    /**
     * Get amenity list.
     */
    public function getAmenitiesAttribute($value)
    {
        return is_array($value) ? $value : json_decode($value, true) ?? [];
    }
}
