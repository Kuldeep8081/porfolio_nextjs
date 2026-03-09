'use client'; // Required for framer-motion in Next.js App Router

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projectList = [
  {
    id: 1,
    title: '3XCoCo',
    description: 'A full-stack luxury e-commerce platform designed to deliver a seamless and premium shopping experience.',
    techStack: ['React', 'Node.js', 'Web Development'],
    demoLink: 'https://3x-co-co-website.vercel.app/',
    repoLink: 'https://github.com/Kuldeep8081/3xCoCo_website',
  },
  {
    id: 2,
    title: 'Visionary Touchless Innovation',
    description: 'A touchless computer interface system that enables users to control their computers using hand gestures and computer vision.',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
    demoLink: 'https://github.com/Kuldeep8081/Visionary_Touchless_Innovation',
    repoLink: 'https://github.com/Kuldeep8081/Visionary_Touchless_Innovation',
  },
  {
    id: 3,
    title: 'PitchEvaluator',
    description: 'A startup idea evaluator mobile application built to help entrepreneurs analyze and refine their business concepts.',
    techStack: ['React Native', 'Mobile Development'],
    demoLink: 'https://github.com/Kuldeep8081/startup_evaluator_full_stack',
    repoLink: 'https://github.com/Kuldeep8081/startup_evaluator_full_stack',
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

export default function ProjectsSection() {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden" id="projects">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A selection of my recent work across full-stack web, mobile, and machine learning. 
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectList.map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 flex flex-col h-full"
            >
              {/* Subtle hover gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-600 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Pushed to Bottom */}
              <div className="relative z-10 flex space-x-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                <Link 
                  href={project.repoLink}
                  target="_blank"
                  className="flex items-center justify-center flex-1 py-2.5 px-4 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300 group/btn"
                >
                  <svg className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400 group-hover/btn:text-gray-900 dark:group-hover/btn:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Code
                </Link>
                <Link 
                  href={project.demoLink}
                  target="_blank"
                  className="flex items-center justify-center flex-1 py-2.5 px-4 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Live Demo
                  <svg className="w-4 h-4 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}