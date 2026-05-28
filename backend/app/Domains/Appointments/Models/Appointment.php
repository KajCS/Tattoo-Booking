<?php

namespace App\Domains\Appointments\Models;

use App\Domains\Artists\Models\Artist;
use App\Domains\Shared\Enums\AppointmentStatus;
use App\Domains\Users\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'artist_id',
        'customer_id',
        'tattoo_description',
        'tattoo_style',
        'tattoo_size',
        'reference_images_urls',
        'placement_area',
        'appointment_date',
        'start_time',
        'end_time',
        'duration_minutes',
        'estimated_price',
        'deposit_required',
        'deposit_paid',
        'status',
        'cancellation_reason',
        'cancelled_at',
        'notes',
    ];

    protected $casts = [
        'reference_images_urls' => 'array',
        'appointment_date' => 'date',
        'start_time' => 'datetime:H:i:s',
        'end_time' => 'datetime:H:i:s',
        'estimated_price' => 'decimal:2',
        'deposit_required' => 'decimal:2',
        'deposit_paid' => 'decimal:2',
        'status' => AppointmentStatus::class,
        'cancelled_at' => 'datetime',
    ];

    /**
     * Get the artist for this appointment
     */
    public function artist(): BelongsTo
    {
        return $this->belongsTo(Artist::class, 'artist_id', 'user_id');
    }

    /**
     * Get the customer for this appointment
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'customer_id', 'id');
    }

    /**
     * Check if appointment is confirmed
     */
    public function isConfirmed(): bool
    {
        return $this->status === AppointmentStatus::CONFIRMED;
    }

    /**
     * Check if appointment is cancelled
     */
    public function isCancelled(): bool
    {
        return $this->status === AppointmentStatus::CANCELLED;
    }

    /**
     * Check if deposit is paid
     */
    public function isDepositPaid(): bool
    {
        return $this->deposit_paid >= $this->deposit_required;
    }
}
