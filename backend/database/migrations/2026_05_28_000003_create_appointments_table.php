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
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('artist_id');
            $table->unsignedBigInteger('customer_id');
            
            // Tattoo Details
            $table->text('tattoo_description')->nullable();
            $table->string('tattoo_style', 100)->nullable();
            $table->string('tattoo_size', 50)->nullable();
            $table->json('reference_images_urls')->nullable();
            $table->string('placement_area', 100)->nullable();
            
            // Scheduling
            $table->date('appointment_date');
            $table->time('start_time');
            $table->time('end_time');
            $table->unsignedInteger('duration_minutes')->default(120);
            
            // Pricing
            $table->decimal('estimated_price', 8, 2)->nullable();
            $table->decimal('deposit_required', 8, 2)->nullable();
            $table->decimal('deposit_paid', 8, 2)->default(0);
            
            // Status
            $table->enum('status', [
                'inquired',
                'quoted',
                'deposit_pending',
                'confirmed',
                'in_progress',
                'completed',
                'cancelled',
            ])->default('inquired');
            
            $table->text('cancellation_reason')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            
            // Notes
            $table->text('notes')->nullable();
            
            $table->timestamps();
            
            // Foreign Keys
            $table->foreign('artist_id')
                  ->references('user_id')
                  ->on('artist_profiles')
                  ->onDelete('cascade');
            
            $table->foreign('customer_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');
            
            // Indexes
            $table->index('artist_id');
            $table->index('customer_id');
            $table->index('appointment_date');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
