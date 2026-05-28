<?php

namespace App\Domains\Earnings\Models;

use App\Domains\Artists\Models\Artist;
use App\Domains\Appointments\Models\Appointment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payment extends Model
{
    use HasFactory;

    protected $table = 'payments';

    protected $fillable = [
        'appointment_id',
        'artist_id',
        'amount',
        'currency',
        'status',
        'payment_method',
        'transaction_id',
        'paid_at',
        'notes',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'paid_at' => 'datetime',
    ];

    /**
     * Get the appointment this payment is for.
     */
    public function appointment(): BelongsTo
    {
        return $this->belongsTo(Appointment::class);
    }

    /**
     * Get the artist who receives this payment.
     */
    public function artist(): BelongsTo
    {
        return $this->belongsTo(Artist::class);
    }

    /**
     * Mark payment as completed.
     */
    public function markAsCompleted(): void
    {
        $this->update([
            'status' => 'completed',
            'paid_at' => now(),
        ]);
    }

    /**
     * Get total revenue for artist.
     */
    public static function getTotalRevenueForArtist($artistId)
    {
        return self::where('artist_id', $artistId)
            ->where('status', 'completed')
            ->sum('amount');
    }

    /**
     * Get revenue for date range.
     */
    public static function getRevenueInRange($artistId, $startDate, $endDate)
    {
        return self::where('artist_id', $artistId)
            ->where('status', 'completed')
            ->whereBetween('paid_at', [$startDate, $endDate])
            ->sum('amount');
    }
}
