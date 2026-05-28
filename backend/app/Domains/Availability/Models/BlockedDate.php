<?php

namespace App\Domains\Availability\Models;

use App\Domains\Artists\Models\Artist;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BlockedDate extends Model
{
    use HasFactory;

    protected $table = 'blocked_dates';

    protected $fillable = [
        'artist_id',
        'date',
        'reason',
        'is_recurring',
        'recurrence_pattern',
    ];

    protected $casts = [
        'date' => 'datetime',
        'is_recurring' => 'boolean',
    ];

    /**
     * Get the artist that owns this blocked date.
     */
    public function artist(): BelongsTo
    {
        return $this->belongsTo(Artist::class);
    }

    /**
     * Check if a date is blocked.
     */
    public static function isDateBlocked($artistId, $date): bool
    {
        return self::where('artist_id', $artistId)
            ->where('date', $date)
            ->exists();
    }

    /**
     * Get all blocked dates for an artist in a date range.
     */
    public static function getBlockedDatesInRange($artistId, $startDate, $endDate)
    {
        return self::where('artist_id', $artistId)
            ->whereBetween('date', [$startDate, $endDate])
            ->get();
    }
}
