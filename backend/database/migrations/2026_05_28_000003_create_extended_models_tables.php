<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('availability_slots', function (Blueprint $table) {
            $table->id();
            $table->foreignId('artist_id')->constrained('artist_profiles')->onDelete('cascade');
            $table->integer('day_of_week'); // 0-6 (Mon-Sun)
            $table->time('start_time');
            $table->time('end_time');
            $table->boolean('is_active')->default(true);
            $table->integer('max_appointments')->default(1);
            $table->timestamps();

            $table->index(['artist_id', 'day_of_week']);
        });

        Schema::create('blocked_dates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('artist_id')->constrained('artists')->onDelete('cascade');
            $table->date('date');
            $table->string('reason')->nullable();
            $table->boolean('is_recurring')->default(false);
            $table->string('recurrence_pattern')->nullable();
            $table->timestamps();

            $table->index(['artist_id', 'date']);
        });

        Schema::create('conversations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('artist_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('customer_id')->constrained('users')->onDelete('cascade');
            $table->timestamp('last_message_at')->nullable();
            $table->boolean('is_archived')->default(false);
            $table->timestamps();

            $table->index(['artist_id', 'customer_id']);
            $table->unique(['artist_id', 'customer_id']);
        });

        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('conversation_id')->constrained('conversations')->onDelete('cascade');
            $table->foreignId('sender_id')->constrained('users')->onDelete('cascade');
            $table->longText('content');
            $table->boolean('is_read')->default(false);
            $table->timestamp('read_at')->nullable();
            $table->timestamps();

            $table->index(['conversation_id', 'created_at']);
            $table->index(['sender_id', 'is_read']);
        });

        Schema::create('portfolio_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('artist_id')->constrained('artists')->onDelete('cascade');
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('image_path');
            $table->string('category')->nullable();
            $table->integer('likes_count')->default(0);
            $table->integer('views_count')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->integer('display_order')->default(0);
            $table->boolean('is_published')->default(true);
            $table->timestamps();

            $table->index(['artist_id', 'is_published']);
            $table->index(['is_featured']);
        });

        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('appointment_id')->constrained('appointments')->onDelete('cascade');
            $table->foreignId('artist_id')->constrained('artists')->onDelete('cascade');
            $table->decimal('amount', 10, 2);
            $table->string('currency')->default('USD');
            $table->string('status')->default('pending'); // pending, completed, failed
            $table->string('payment_method')->nullable();
            $table->string('transaction_id')->nullable();
            $table->timestamp('paid_at')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->index(['artist_id', 'status']);
            $table->index(['appointment_id']);
        });

        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('artist_id')->constrained('artists')->onDelete('cascade');
            $table->string('type'); // income, expense, refund, etc.
            $table->decimal('amount', 10, 2);
            $table->string('currency')->default('USD');
            $table->string('description');
            $table->string('reference_id')->nullable();
            $table->string('reference_type')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->index(['artist_id', 'created_at']);
            $table->index(['type']);
        });

        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('artist_id')->constrained('artists')->onDelete('cascade');
            $table->foreignId('customer_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('appointment_id')->nullable()->constrained('appointments')->onDelete('set null');
            $table->integer('rating');
            $table->string('title')->nullable();
            $table->text('comment')->nullable();
            $table->boolean('is_published')->default(false);
            $table->integer('helpful_count')->default(0);
            $table->timestamps();

            $table->index(['artist_id', 'is_published']);
            $table->index(['customer_id']);
        });

        Schema::create('studios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('artist_id')->constrained('artists')->onDelete('cascade');
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip_code')->nullable();
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->decimal('hourly_rate', 10, 2)->nullable();
            $table->integer('capacity')->nullable();
            $table->json('amenities')->nullable();
            $table->boolean('is_active')->default(true);
            $table->string('featured_image_path')->nullable();
            $table->timestamps();

            $table->index(['artist_id', 'is_active']);
            $table->index(['city']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('studios');
        Schema::dropIfExists('reviews');
        Schema::dropIfExists('transactions');
        Schema::dropIfExists('payments');
        Schema::dropIfExists('portfolio_items');
        Schema::dropIfExists('messages');
        Schema::dropIfExists('conversations');
        Schema::dropIfExists('blocked_dates');
        Schema::dropIfExists('availability_slots');
    }
};
