<?php

namespace App\Domains\Availability\Models;

use App\Domains\Artists\Models\Artist;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AvailabilitySlot extends Model
{
    use HasFactory;

    protected $table = 'availability_slots';

    protected $fillable = [
        'artist_id',
        'day_of_week',
        'start_time',
        'end_time',
        'is_active',
        'max_appointments',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'max_appointments' => 'integer',
    ];

    /**
     * Get the artist that owns this availability slot.
     */
    public function artist(): BelongsTo
    {
        return $this->belongsTo(Artist::class);
    }

    /**
     * Get available slots for a specific day and time range.
     */
    public static function getAvailableSlots($artistId, $dayOfWeek, $date)
    {
        return self::where('artist_id', $artistId)
            ->where('day_of_week', $dayOfWeek)
            ->where('is_active', true)
            ->get();
    }

    /**
     * Check if a time slot is available.
     */
    public function isAvailableAt($startTime): bool
    {
        $slotStart = strtotime($this->start_time);
        $slotEnd = strtotime($this->end_time);
        $requestStart = strtotime($startTime);

        return $requestStart >= $slotStart && $requestStart < $slotEnd;
    }
}
