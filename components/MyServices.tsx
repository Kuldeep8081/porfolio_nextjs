"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        icon: "🌐",
        title: "Web Application Development",
        description:
            "I build fast, scalable, and SEO-friendly web applications using modern technologies like React.js, Next.js, Node.js, and MongoDB.",
        points: [
            "Responsive & mobile-first design",
            "Full-stack MERN & Next.js apps",
            "Secure authentication & role-based access",
            "REST APIs & database integration",
        ],
    },
    {
        icon: "📱",
        title: "Mobile App Development",
        description:
            "High-performance cross-platform mobile apps using React Native, delivering native-like experiences on Android and iOS.",
        points: [
            "Single codebase for Android & iOS",
            "API & real-time data integration",
            "Auth, payments & notifications",
            "Smooth UI/UX & performance optimization",
        ],
    },
    {
        icon: "⚙️",
        title: "Full-Stack Development",
        description:
            "End-to-end frontend and backend development with clean architecture and seamless data flow.",
        points: [
            "React, Next.js & Tailwind CSS",
            "Node.js & Express.js backend",
            "MongoDB database design",
            "TypeScript, Git & REST APIs",
        ],
    },
    {
        icon: "🎨",
        title: "UI Development & Optimization",
        description:
            "Pixel-perfect UI development and optimization for better usability and performance.",
        points: [
            "Figma to responsive UI",
            "UI/UX enhancements",
            "Performance optimization",
            "Clean, maintainable code",
        ],
    },
    {
        icon: "🛠️",
        title: "Maintenance & Support",
        description:
            "Reliable post-launch support to keep applications secure, updated, and running smoothly.",
        points: [
            "Bug fixes & feature updates",
            "Performance monitoring",
            "Code refactoring",
            "Deployment & version control",
        ],
    },
    {
        icon: "🔌",
        title: "API Development & Integration",
        description:
            "I design and integrate secure, scalable REST APIs to connect applications with databases, third-party services, and external platforms.",
        points: [
            "Custom REST API development",
            "Third-party API integration",
            "JWT & role-based API security",
            "Error handling & API optimization",
        ],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const MyServices = () => {
    return (
        <section className="w-full bg-linear-to-br from-[#0f172a] to-[#1e293b] py-16">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
                >
                    🚀 Services I Offer
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#020617] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inset-ring-1 "
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{service.icon}</span>
                                <h3 className="text-xl font-semibold text-white">
                                    {service.title}
                                </h3>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>

                            <ul className="space-y-2 text-gray-200 text-sm list-disc list-inside">
                                {service.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyServices;
