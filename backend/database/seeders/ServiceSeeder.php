<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'title' => 'Web Design',
                'image' => 'web-design.jpg',
                'icon' => 'Palette',
                'description' => 'Crafting modern, user-centered website designs that enhance user experience and brand identity.',
                'features' => 'User Research & Analysis, Wireframing & Prototyping, Visual Design, Interaction Design, Usability Testing, Design Systems',
                'benefits' => 'Increased user engagement, Higher conversion rates, Improved brand perception, Better user retention, Reduced support costs',
                'technologies' => 'Figma, Adobe XD, Sketch, Protopie',
            ],
            [
                'title' => 'Web Development',
                'image' => 'web-development.jpg',
                'icon' => 'Code2',
                'description' => 'Building responsive and high-performance websites using modern web technologies.',
                'features' => 'Frontend & Backend Development, API Integration, Responsive Layouts, CMS Solutions, Performance Optimization, Code Review',
                'benefits' => 'Fast-loading websites, SEO optimization, Scalable architecture, Secure coding, Easy maintenance',
                'technologies' => 'HTML5, CSS3, JavaScript, PHP, Laravel, React',
            ],
            [
                'title' => 'Mobile App Development',
                'image' => 'mobile-app.jpg',
                'icon' => 'Smartphone',
                'description' => 'Creating native and cross-platform mobile apps that deliver seamless user experiences.',
                'features' => 'iOS & Android Apps, Cross-Platform Solutions, Push Notifications, App UI/UX, App Store Deployment, API Connectivity',
                'benefits' => 'Enhanced customer engagement, Offline access, Higher brand visibility, Increased ROI, Real-time analytics',
                'technologies' => 'React Native, Flutter, Kotlin, Swift, Firebase',
            ],
            [
                'title' => 'E-Commerce Solutions',
                'image' => 'ecommerce.jpg',
                'icon' => 'ShoppingCart',
                'description' => 'Developing powerful online stores with integrated payment gateways and inventory systems.',
                'features' => 'Product Management, Payment Integration, Order Tracking, Customer Dashboard, Coupon & Discounts, Admin Panel',
                'benefits' => 'Increased online sales, Secure payments, Automated inventory, Easy scalability, 24/7 availability',
                'technologies' => 'Laravel, WooCommerce, Shopify, Stripe, PayPal',
            ],
            [
                'title' => 'UI/UX Design',
                'image' => 'ui-ux.jpg',
                'icon' => 'Layout',
                'description' => 'Designing intuitive interfaces that provide delightful and engaging user experiences.',
                'features' => 'User Flows, Prototyping, A/B Testing, Interaction Design, Accessibility Design, Design Systems',
                'benefits' => 'Improved usability, Higher user satisfaction, Reduced churn, Consistent brand visuals, Better engagement',
                'technologies' => 'Figma, Adobe XD, Framer, Zeplin',
            ],
            [
                'title' => 'Custom Software Development',
                'image' => 'custom-software.jpg',
                'icon' => 'Layers',
                'description' => 'Developing tailored software solutions to streamline operations and achieve business goals.',
                'features' => 'Requirement Analysis, Architecture Design, API Integration, Testing & QA, Deployment, Maintenance',
                'benefits' => 'Process automation, Cost efficiency, Competitive advantage, Secure infrastructure, Easy scaling',
                'technologies' => 'Laravel, Node.js, React, Docker, AWS',
            ],
            [
                'title' => 'Cloud Solutions',
                'image' => 'cloud.jpg',
                'icon' => 'Cloud',
                'description' => 'Offering scalable cloud infrastructure and migration services for businesses of all sizes.',
                'features' => 'Cloud Migration, Data Backup, Load Balancing, Security Setup, DevOps Automation, Monitoring',
                'benefits' => 'Reduced infrastructure cost, Enhanced scalability, Improved reliability, Secure storage, Faster deployment',
                'technologies' => 'AWS, Azure, Google Cloud, Docker, Kubernetes',
            ],
            [
                'title' => 'Digital Marketing',
                'image' => 'digital-marketing.jpg',
                'icon' => 'Megaphone',
                'description' => 'Helping businesses grow online through data-driven marketing strategies.',
                'features' => 'SEO Optimization, Social Media Campaigns, Content Marketing, Email Automation, PPC Advertising, Analytics',
                'benefits' => 'Increased brand awareness, Higher lead generation, Improved ROI, Measurable performance, Audience targeting',
                'technologies' => 'Google Ads, Meta Ads, SEMrush, Mailchimp, Ahrefs',
            ],
            [
                'title' => 'Search Engine Optimization (SEO)',
                'image' => 'seo.jpg',
                'icon' => 'Search',
                'description' => 'Boosting website visibility and ranking through advanced SEO practices.',
                'features' => 'Keyword Research, On-Page SEO, Off-Page SEO, Link Building, Performance Tracking, Content Optimization',
                'benefits' => 'Higher organic traffic, Better search ranking, Increased brand trust, Long-term visibility, Lower ad costs',
                'technologies' => 'Ahrefs, Google Analytics, Screaming Frog, Moz, Yoast',
            ],
            [
                'title' => 'DevOps & Automation',
                'image' => 'devops.jpg',
                'icon' => 'ServerCog',
                'description' => 'Streamlining software delivery pipelines through continuous integration and deployment.',
                'features' => 'CI/CD Pipelines, Infrastructure as Code, Containerization, Monitoring & Logging, Cloud Deployment, Security Automation',
                'benefits' => 'Faster release cycles, Improved reliability, Reduced downtime, Consistent environments, Lower operational costs',
                'technologies' => 'Docker, Jenkins, GitHub Actions, Kubernetes, Terraform',
            ],
            [
                'title' => 'AI & Machine Learning',
                'image' => 'ai-ml.jpg',
                'icon' => 'Brain',
                'description' => 'Building intelligent systems that learn, predict, and automate decision-making.',
                'features' => 'Predictive Analytics, NLP, Recommendation Systems, Image Recognition, Chatbots, Model Training',
                'benefits' => 'Data-driven insights, Automation, Personalized experiences, Cost reduction, Business innovation',
                'technologies' => 'Python, TensorFlow, PyTorch, scikit-learn, OpenAI API',
            ],
            [
                'title' => 'Cybersecurity Services',
                'image' => 'cybersecurity.jpg',
                'icon' => 'Shield',
                'description' => 'Protecting businesses from digital threats with robust security solutions.',
                'features' => 'Vulnerability Assessment, Penetration Testing, Network Security, Data Encryption, Threat Monitoring, Compliance Audits',
                'benefits' => 'Enhanced data protection, Regulatory compliance, Reduced risk, Business continuity, Customer trust',
                'technologies' => 'Wireshark, Metasploit, Nessus, Burp Suite, Firewall Systems',
            ],
        ];

        DB::table('services')->insert($services);
    }
}
