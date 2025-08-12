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
        Schema::create('message_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('message_id')->constrained('messages')->onDelete('cascade'); 
            $table->foreignId('recipient_id')->constrained('users')->onDelete('cascade'); // user yang menerima pesan
            $table->enum('status', ['delivered', 'read'])->default('delivered'); // status pesan
            $table->timestamp('read_at')->nullable(); // waktu pesan dibaca
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('message_user');
    }
};