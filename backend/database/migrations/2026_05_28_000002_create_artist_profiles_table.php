<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('artist_profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->unique();
            
            // Professional Information
            $table->text('bio')->nullable();
            $table->json('specialties')->nullable(); // e.g., ["Japanese", "Fine Line", "Blackwork"]
            $table->unsignedSmallInteger('experience_years')->nullable();
            $table->decimal('hourly_rate', 8, 2)->nullable();
            
            // Performance Metrics
            $table->unsignedInteger('total_appointments')->default(0);
            $table->decimal('total_revenue', 12, 2)->default(0);
            $table->decimal('average_rating', 3, 2)->default(0);
            $table->unsignedInteger('total_reviews')->default(0);
            
            // Verification
            $table->boolean('is_verified')->default(false);
            $table->json('verification_documents_url')->nullable();
            
            $table->timestamps();
            
            // Foreign Keys
            $table->foreign('user_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');
            
            // Indexes
            $table->index('is_verified');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('artist_profiles');
    }
};
