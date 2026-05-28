<?php

use Illuminate\Support\Facades\Route;

/**
 * YoshiCat API v1 Routes
 * 
 * Base URL: /api/v1
 * Authentication: Bearer Token (Sanctum)
 */

Route::prefix('v1')->group(function () {
    
    // Public Routes (No Authentication Required)
    Route::group(['prefix' => 'auth'], function () {
        Route::post('register', [\App\Domains\Auth\Controllers\AuthController::class, 'register']);
        Route::post('login', [\App\Domains\Auth\Controllers\AuthController::class, 'login']);
        Route::post('oauth/google', [\App\Domains\Auth\Controllers\OAuthController::class, 'handleGoogleCallback']);
    });

    // Protected Routes (Authentication Required)
    Route::middleware('auth:sanctum')->group(function () {
        
        // Auth Routes
        Route::group(['prefix' => 'auth'], function () {
            Route::post('logout', [\App\Domains\Auth\Controllers\AuthController::class, 'logout']);
            Route::post('refresh', [\App\Domains\Auth\Controllers\AuthController::class, 'refresh']);
            Route::get('me', [\App\Domains\Auth\Controllers\AuthController::class, 'me']);
        });

        // Artist Routes
        Route::group(['prefix' => 'artists'], function () {
            Route::get('/', [\App\Domains\Artists\Controllers\ArtistController::class, 'index']);
            Route::get('{id}', [\App\Domains\Artists\Controllers\ArtistController::class, 'show']);
            Route::post('/', [\App\Domains\Artists\Controllers\ArtistController::class, 'store']);
            Route::put('{id}', [\App\Domains\Artists\Controllers\ArtistController::class, 'update']);
            
            Route::get('{id}/availability', [\App\Domains\Availability\Controllers\AvailabilityController::class, 'artistAvailability']);
            Route::get('{id}/appointments', [\App\Domains\Appointments\Controllers\AppointmentController::class, 'artistAppointments']);
            Route::get('{id}/earnings', [\App\Domains\Earnings\Controllers\EarningsController::class, 'artistEarnings']);
            Route::get('{id}/reviews', [\App\Domains\Reviews\Controllers\ReviewController::class, 'artistReviews']);
        });

        // Appointment Routes
        Route::group(['prefix' => 'appointments'], function () {
            Route::get('/', [\App\Domains\Appointments\Controllers\AppointmentController::class, 'index']);
            Route::post('/', [\App\Domains\Appointments\Controllers\AppointmentController::class, 'store']);
            Route::get('{id}', [\App\Domains\Appointments\Controllers\AppointmentController::class, 'show']);
            Route::patch('{id}/status', [\App\Domains\Appointments\Controllers\AppointmentController::class, 'updateStatus']);
            Route::patch('{id}/cancel', [\App\Domains\Appointments\Controllers\AppointmentController::class, 'cancel']);
            Route::get('{id}/available-slots', [\App\Domains\Availability\Controllers\AvailabilityController::class, 'availableSlots']);
        });

        // Availability Routes
        Route::group(['prefix' => 'availability'], function () {
            Route::get('{artistId}', [\App\Domains\Availability\Controllers\AvailabilityController::class, 'show']);
            Route::post('/', [\App\Domains\Availability\Controllers\AvailabilityController::class, 'store']);
            Route::put('{id}', [\App\Domains\Availability\Controllers\AvailabilityController::class, 'update']);
            Route::delete('{id}', [\App\Domains\Availability\Controllers\AvailabilityController::class, 'destroy']);
            
            Route::post('block', [\App\Domains\Availability\Controllers\AvailabilityController::class, 'blockDate']);
            Route::delete('block/{id}', [\App\Domains\Availability\Controllers\AvailabilityController::class, 'unblockDate']);
        });

        // Messaging Routes
        Route::group(['prefix' => 'messaging'], function () {
            Route::get('conversations', [\App\Domains\Messaging\Controllers\ConversationController::class, 'index']);
            Route::post('conversations', [\App\Domains\Messaging\Controllers\ConversationController::class, 'store']);
            Route::get('conversations/{id}/messages', [\App\Domains\Messaging\Controllers\MessageController::class, 'index']);
            Route::post('messages', [\App\Domains\Messaging\Controllers\MessageController::class, 'store']);
            Route::get('messages/{id}', [\App\Domains\Messaging\Controllers\MessageController::class, 'show']);
        });

        // Portfolio Routes
        Route::group(['prefix' => 'portfolio'], function () {
            Route::get('/', [\App\Domains\Portfolio\Controllers\PortfolioController::class, 'index']);
            Route::post('/', [\App\Domains\Portfolio\Controllers\PortfolioController::class, 'store']);
            Route::put('{id}', [\App\Domains\Portfolio\Controllers\PortfolioController::class, 'update']);
            Route::delete('{id}', [\App\Domains\Portfolio\Controllers\PortfolioController::class, 'destroy']);
            Route::patch('{id}/feature', [\App\Domains\Portfolio\Controllers\PortfolioController::class, 'toggleFeature']);
        });

        // Earnings Routes (Artist Only)
        Route::group(['prefix' => 'earnings', 'middleware' => 'ensure.artist'], function () {
            Route::get('summary', [\App\Domains\Earnings\Controllers\EarningsController::class, 'summary']);
            Route::get('transactions', [\App\Domains\Earnings\Controllers\EarningsController::class, 'transactions']);
            Route::get('analytics', [\App\Domains\Earnings\Controllers\EarningsController::class, 'analytics']);
            Route::get('payouts', [\App\Domains\Earnings\Controllers\EarningsController::class, 'payouts']);
            Route::post('payout-request', [\App\Domains\Earnings\Controllers\EarningsController::class, 'requestPayout']);
        });

        // Reviews Routes
        Route::group(['prefix' => 'reviews'], function () {
            Route::get('/', [\App\Domains\Reviews\Controllers\ReviewController::class, 'index']);
            Route::post('/', [\App\Domains\Reviews\Controllers\ReviewController::class, 'store']);
            Route::put('{id}', [\App\Domains\Reviews\Controllers\ReviewController::class, 'update']);
            Route::delete('{id}', [\App\Domains\Reviews\Controllers\ReviewController::class, 'destroy']);
        });

        // Studio Routes
        Route::group(['prefix' => 'studios'], function () {
            Route::get('/', [\App\Domains\Studios\Controllers\StudioController::class, 'index']);
            Route::get('{id}', [\App\Domains\Studios\Controllers\StudioController::class, 'show']);
            Route::post('/', [\App\Domains\Studios\Controllers\StudioController::class, 'store']);
            Route::put('{id}', [\App\Domains\Studios\Controllers\StudioController::class, 'update']);
        });

        // User Routes
        Route::group(['prefix' => 'users'], function () {
            Route::get('profile', [\App\Domains\Users\Controllers\UserController::class, 'profile']);
            Route::put('profile', [\App\Domains\Users\Controllers\UserController::class, 'updateProfile']);
        });
    });
});
