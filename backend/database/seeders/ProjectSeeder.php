<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\ProjectOtherImage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'E-commerce Platform',
                'description' => 'A full-featured e-commerce web application with product management, cart, checkout, and order tracking system.',
                'image' => 'https://picsum.photos/seed/ecommerce/600/400',
                'technologies' => json_encode(['Laravel', 'React', 'MySQL']),
                'slug' => Str::slug('E-commerce Platform'),
                'other_images' => [
                    'https://picsum.photos/seed/ecommerce2/600/400',
                    'https://picsum.photos/seed/ecommerce3/600/400',
                ],
            ],
            [
                'title' => 'Job Portal System',
                'description' => 'A recruitment platform where companies can post jobs and candidates can apply with profiles and resumes.',
                'image' => 'https://picsum.photos/seed/jobportal/600/400',
                'technologies' => json_encode(['Laravel', 'Vue.js', 'MySQL']),
                'slug' => Str::slug('Job Portal System'),
                'other_images' => [
                    'https://picsum.photos/seed/jobportal2/600/400',
                    'https://picsum.photos/seed/jobportal3/600/400',
                ],
            ],
            [
                'title' => 'Social Media App',
                'description' => 'A modern mobile app that allows users to post, like, comment, and chat in real-time.',
                'image' => 'https://picsum.photos/seed/socialapp/600/400',
                'technologies' => json_encode(['React Native', 'Laravel', 'Firebase']),
                'slug' => Str::slug('Social Media App'),
                'other_images' => [
                    'https://picsum.photos/seed/socialapp2/600/400',
                    'https://picsum.photos/seed/socialapp3/600/400',
                ],
            ],
            [
                'title' => 'Learning Management System (LMS)',
                'description' => 'A platform where instructors can create courses, students can enroll, and admins can monitor progress.',
                'image' => 'https://picsum.photos/seed/lms/600/400',
                'technologies' => json_encode(['Laravel', 'React', 'MySQL']),
                'slug' => Str::slug('Learning Management System'),
                'other_images' => [
                    'https://picsum.photos/seed/lms2/600/400',
                    'https://picsum.photos/seed/lms3/600/400',
                ],
            ],
            [
                'title' => 'Real Estate Listing Website',
                'description' => 'A web app for listing, selling, and renting properties with integrated Google Maps and filters.',
                'image' => 'https://picsum.photos/seed/realestate/600/400',
                'technologies' => json_encode(['Next.js', 'Laravel API', 'PostgreSQL']),
                'slug' => Str::slug('Real Estate Listing Website'),
                'other_images' => [
                    'https://picsum.photos/seed/realestate2/600/400',
                    'https://picsum.photos/seed/realestate3/600/400',
                ],
            ],
            [
                'title' => 'Restaurant Ordering System',
                'description' => 'An online ordering and table reservation platform for restaurants with real-time order tracking.',
                'image' => 'https://picsum.photos/seed/restaurant/600/400',
                'technologies' => json_encode(['Laravel', 'React', 'Stripe']),
                'slug' => Str::slug('Restaurant Ordering System'),
                'other_images' => [
                    'https://picsum.photos/seed/restaurant2/600/400',
                    'https://picsum.photos/seed/restaurant3/600/400',
                ],
            ],
            [
                'title' => 'Travel Booking App',
                'description' => 'A React Native mobile app for booking flights, hotels, and tours with integrated payment gateway.',
                'image' => 'https://picsum.photos/seed/travel/600/400',
                'technologies' => json_encode(['React Native', 'Laravel', 'MySQL']),
                'slug' => Str::slug('Travel Booking App'),
                'other_images' => [
                    'https://picsum.photos/seed/travel2/600/400',
                    'https://picsum.photos/seed/travel3/600/400',
                ],
            ],
            [
                'title' => 'Inventory Management System',
                'description' => 'A backend management platform for businesses to manage stock, suppliers, and orders efficiently.',
                'image' => 'https://picsum.photos/seed/inventory/600/400',
                'technologies' => json_encode(['PHP', 'Laravel', 'Bootstrap']),
                'slug' => Str::slug('Inventory Management System'),
                'other_images' => [
                    'https://picsum.photos/seed/inventory2/600/400',
                    'https://picsum.photos/seed/inventory3/600/400',
                ],
            ],
            [
                'title' => 'Fitness Tracking App',
                'description' => 'A mobile app to track workouts, steps, and nutrition data with user progress analytics.',
                'image' => 'https://picsum.photos/seed/fitness/600/400',
                'technologies' => json_encode(['React Native', 'Node.js', 'MongoDB']),
                'slug' => Str::slug('Fitness Tracking App'),
                'other_images' => [
                    'https://picsum.photos/seed/fitness2/600/400',
                    'https://picsum.photos/seed/fitness3/600/400',
                ],
            ],
            [
                'title' => 'Portfolio Website Builder',
                'description' => 'A SaaS platform that allows users to create and customize personal portfolio websites with ease.',
                'image' => 'https://picsum.photos/seed/portfolio/600/400',
                'technologies' => json_encode(['Next.js', 'Laravel API', 'Tailwind CSS']),
                'slug' => Str::slug('Portfolio Website Builder'),
                'other_images' => [
                    'https://picsum.photos/seed/portfolio2/600/400',
                    'https://picsum.photos/seed/portfolio3/600/400',
                ],
            ],
            [
                'title' => 'Online Exam System',
                'description' => 'A secure examination system with timed tests, result generation, and question banks.',
                'image' => 'https://picsum.photos/seed/exam/600/400',
                'technologies' => json_encode(['Laravel', 'React', 'MySQL']),
                'slug' => Str::slug('Online Exam System'),
                'other_images' => [
                    'https://picsum.photos/seed/exam2/600/400',
                    'https://picsum.photos/seed/exam3/600/400',
                ],
            ],
            [
                'title' => 'Event Management System',
                'description' => 'A system to organize and manage events, ticket sales, and attendee registrations.',
                'image' => 'https://picsum.photos/seed/event/600/400',
                'technologies' => json_encode(['Laravel', 'Vue.js', 'Stripe']),
                'slug' => Str::slug('Event Management System'),
                'other_images' => [
                    'https://picsum.photos/seed/event2/600/400',
                    'https://picsum.photos/seed/event3/600/400',
                ],
            ],
            [
                'title' => 'Video Streaming App',
                'description' => 'A mobile app that allows users to upload, stream, and comment on videos in real time.',
                'image' => 'https://picsum.photos/seed/video/600/400',
                'technologies' => json_encode(['React Native', 'Laravel', 'Appwrite']),
                'slug' => Str::slug('Video Streaming App'),
                'other_images' => [
                    'https://picsum.photos/seed/video2/600/400',
                    'https://picsum.photos/seed/video3/600/400',
                ],
            ],
            [
                'title' => 'Blog Management Platform',
                'description' => 'A multi-user blogging platform with markdown editor, SEO features, and role-based permissions.',
                'image' => 'https://picsum.photos/seed/blog/600/400',
                'technologies' => json_encode(['Laravel', 'React', 'PostgreSQL']),
                'slug' => Str::slug('Blog Management Platform'),
                'other_images' => [
                    'https://picsum.photos/seed/blog2/600/400',
                    'https://picsum.photos/seed/blog3/600/400',
                ],
            ],
            [
                'title' => 'Hospital Management System',
                'description' => 'A platform for managing patients, appointments, and billing with digital records and reports.',
                'image' => 'https://picsum.photos/seed/hospital/600/400',
                'technologies' => json_encode(['Laravel', 'React', 'MySQL']),
                'slug' => Str::slug('Hospital Management System'),
                'other_images' => [
                    'https://picsum.photos/seed/hospital2/600/400',
                    'https://picsum.photos/seed/hospital3/600/400',
                ],
            ],
        ];

        foreach ($projects as $project) {
            $saveProduct = Project::create([
                'title' =>  $project['title'],
                'description' => $project['description'],
                'image' => $project['image'],
                'technologies' => $project['technologies'],
                'slug' => $project['slug'],
            ]);

            foreach ($project['other_images'] as $otherImage) {
                ProjectOtherImage::create([
                    'project_id' => $saveProduct->id,
                    'image' => $otherImage,
                ]);
            }
        }
    }
}
