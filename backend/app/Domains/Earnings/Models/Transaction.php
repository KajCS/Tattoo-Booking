<?php

namespace App\Domains\Earnings\Models;

use App\Domains\Artists\Models\Artist;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    use HasFactory;

    protected $table = 'transactions';

    protected $fillable = [
        'artist_id',
        'type',
        'amount',
        'currency',
        'description',
        'reference_id',
        'reference_type',
        'notes',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
    ];

    /**
     * Get the artist this transaction belongs to.
     */
    public function artist(): BelongsTo
    {
        return $this->belongsTo(Artist::class);
    }

    /**
     * Get all transactions for artist.
     */
    public static function getForArtist($artistId, $limit = 50)
    {
        return self::where('artist_id', $artistId)
            ->orderBy('created_at', 'desc')
            ->limit($limit)
            ->get();
    }

    /**
     * Get transaction summary for dashboard.
     */
    public static function getSummary($artistId, $daysBack = 30)
    {
        $startDate = now()->subDays($daysBack);

        return self::where('artist_id', $artistId)
            ->where('created_at', '>=', $startDate)
            ->get()
            ->groupBy('type')
            ->map(function ($items) {
                return [
                    'count' => $items->count(),
                    'total' => $items->sum('amount'),
                ];
            });
    }
}
