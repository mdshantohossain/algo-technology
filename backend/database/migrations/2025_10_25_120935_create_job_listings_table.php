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
        Schema::create('job_listings', function (Blueprint $table) {
            $table->id();
            // Basic Job Info
            $table->string('title'); // e.g. "Frontend Developer"
            $table->string('slug')->unique(); // for SEO-friendly URLs
            $table->string('company_name')->nullable(); // e.g. "Tech Studio Ltd"
            $table->string('company_logo')->nullable(); // path to company logo

            // Job Type / Category
            $table->string('job_type')->default('Full-time'); // Full-time / Part-time / Contract / Remote
            $table->string('category')->nullable(); // e.g. "Software Development"
            $table->string('level')->nullable(); // e.g. "Junior", "Mid", "Senior"

            // Salary and Location
            $table->string('salary')->nullable();
            $table->string('currency', 10)->default('USD');
            $table->string('location')->nullable(); // e.g. "Dhaka, Bangladesh"
            $table->boolean('is_remote')->default(false);

            // Job Details
            $table->text('description')->nullable();
            $table->text('requirements')->nullable();
            $table->text('responsibilities')->nullable();
            $table->json('benefits')->nullable();

            // Posting Details
            $table->date('application_deadline')->nullable();
            $table->string('employment_status')->default('active'); // active, closed, draft
            $table->integer('views')->default(0);

            // Contact or Apply
            $table->string('apply_email')->nullable();
            $table->string('apply_link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
