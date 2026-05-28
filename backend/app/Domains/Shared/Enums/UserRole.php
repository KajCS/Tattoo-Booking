<?php

namespace App\Domains\Shared\Enums;

enum UserRole: string
{
    case CUSTOMER = 'customer';
    case ARTIST = 'artist';
    case ADMIN = 'admin';

    public function label(): string
    {
        return match ($this) {
            self::CUSTOMER => 'Customer',
            self::ARTIST => 'Artist',
            self::ADMIN => 'Administrator',
        };
    }
}
