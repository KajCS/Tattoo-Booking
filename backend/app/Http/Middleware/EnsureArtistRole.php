<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureArtistRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->user() || !$request->user()->isArtist()) {
            return response()->json([
                'success' => false,
                'error' => [
                    'code' => 'ARTIST_ONLY',
                    'message' => 'This action requires an artist account.',
                ],
            ], 403);
        }

        return $next($request);
    }
}
