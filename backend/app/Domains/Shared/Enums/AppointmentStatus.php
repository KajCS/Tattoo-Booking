<?php

namespace App\Domains\Shared\Enums;

enum AppointmentStatus: string
{
    case INQUIRED = 'inquired';
    case QUOTED = 'quoted';
    case DEPOSIT_PENDING = 'deposit_pending';
    case CONFIRMED = 'confirmed';
    case IN_PROGRESS = 'in_progress';
    case COMPLETED = 'completed';
    case CANCELLED = 'cancelled';

    public function label(): string
    {
        return match ($this) {
            self::INQUIRED => 'Inquired',
            self::QUOTED => 'Quoted',
            self::DEPOSIT_PENDING => 'Deposit Pending',
            self::CONFIRMED => 'Confirmed',
            self::IN_PROGRESS => 'In Progress',
            self::COMPLETED => 'Completed',
            self::CANCELLED => 'Cancelled',
        };
    }

    public function isCancelled(): bool
    {
        return $this === self::CANCELLED;
    }

    public function isCompleted(): bool
    {
        return $this === self::COMPLETED;
    }

    public function isPending(): bool
    {
        return in_array($this, [self::INQUIRED, self::QUOTED, self::DEPOSIT_PENDING]);
    }
}
