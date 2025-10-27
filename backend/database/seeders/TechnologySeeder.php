<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TechnologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $technologies = [
            [
                'title' => 'PHP',
                'experience' => '3 years',
                'description' => 'PHP is a server-side scripting language primarily used for backend web development. It powers dynamic websites and frameworks like Laravel and WordPress. Developers choose PHP for its simplicity, large ecosystem, and excellent integration with MySQL and Apache servers.',
                'icon' => 'Code',
                'status' => 1,
            ],
            [
                'title' => 'Node.js',
                'experience' => '2 years',
                'description' => 'Node.js allows JavaScript to run on the server side, enabling fast and scalable network applications. It uses an event-driven, non-blocking I/O model, making it ideal for real-time applications like chats, APIs, and streaming platforms.',
                'icon' => 'Server',
                'status' => 1,
            ],
            [
                'title' => 'Laravel',
                'experience' => '3 years',
                'description' => 'Laravel is a modern PHP framework designed for developers who need an elegant and structured syntax. It simplifies authentication, routing, caching, and database management, making large-scale web application development much faster and cleaner.',
                'icon' => 'Layers',
                'status' => 1,
            ],
            [
                'title' => 'React.js',
                'experience' => '2 years',
                'description' => 'React.js is a powerful frontend JavaScript library for building interactive user interfaces. It uses a component-based structure and virtual DOM, making UIs fast and reusable for both web and mobile applications.',
                'icon' => 'Layout',
                'status' => 1,
            ],
            [
                'title' => 'MySQL',
                'experience' => '3 years',
                'description' => 'MySQL is an open-source relational database management system known for its reliability, scalability, and ease of use. It’s the backbone of many web applications and integrates seamlessly with PHP, Laravel, and Node.js backends.',
                'icon' => 'Database',
                'status' => 1,
            ],
            [
                'title' => 'Docker',
                'experience' => '1 year',
                'description' => 'Docker is a containerization platform that allows developers to package applications and their dependencies into isolated containers. It ensures consistent environments across development, testing, and production, reducing deployment issues.',
                'icon' => 'Box',
                'status' => 1,
            ],
            [
                'title' => 'Next.js',
                'experience' => '1.5 years',
                'description' => 'Next.js is a React framework that supports server-side rendering (SSR), static site generation (SSG), and API routes. It’s used for building SEO-friendly, high-performance web applications efficiently.',
                'icon' => 'Globe',
                'status' => 1,
            ],
            [
                'title' => 'Git & GitHub',
                'experience' => '3 years',
                'description' => 'Git is a version control system that helps track code changes, while GitHub is a hosting platform for collaboration and CI/CD. They are essential tools for managing modern development workflows and team projects.',
                'icon' => 'GitBranch',
                'status' => 1,
            ],
            [
                'title' => 'React Native',
                'experience' => '1.5 years',
                'description' => 'React Native allows developers to build cross-platform mobile apps using JavaScript and React. It provides near-native performance while sharing most code between iOS and Android, reducing development time and cost.',
                'icon' => 'Smartphone',
                'status' => 1,
            ],
            [
                'title' => 'Firebase',
                'experience' => '1 year',
                'description' => 'Firebase is a Google-backed platform that offers real-time databases, authentication, storage, and cloud functions. It’s widely used for building scalable mobile and web applications without managing a separate backend server.',
                'icon' => 'Cloud',
                'status' => 1,
            ],
            [
                'title' => 'Tailwind CSS',
                'experience' => '2 years',
                'description' => 'Tailwind CSS is a utility-first CSS framework that speeds up UI development. It allows developers to build modern, responsive interfaces directly in the markup without writing traditional CSS files.',
                'icon' => 'Paintbrush',
                'status' => 1,
            ],
            [
                'title' => 'TypeScript',
                'experience' => '1.5 years',
                'description' => 'TypeScript is a superset of JavaScript that adds static typing and improved tooling. It helps catch errors early during development, making codebases more maintainable and reliable for large projects.',
                'icon' => 'Terminal',
                'status' => 1,
            ],
        ];

        DB::table('technologies')->insert($technologies);
    }
}
