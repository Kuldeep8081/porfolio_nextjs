"use client"
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className='w-full bg-linear-to-r from-[#000000] to-[#8F0177] '>
            <section className="px-10 md:px-20 py-6">
                <Navbar />
            </section>
            <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 py-16">
                {/* Left Content */}
                <div className="font-serif space-y-3 px-15 md:px-25 py-10 flex flex-col items-center justify-center">
                    <motion.h1
                        className="text-xs md:text-base tracking-[0.3em] text-purple-300 uppercase"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        WELCOME TO MY WORLD ✨
                    </motion.h1>

                    <motion.div
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white flex flex-wrap gap-2"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <span>Hi,</span>
                        <span className="text-purple-300">I&apos;m Kuldeep</span>
                    </motion.div>

                    <motion.h2
                        className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-200"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Software Development Engineer
                    </motion.h2>

                    <motion.p
                        className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Passionate SDE who loves building clean, scalable products using the
                        MERN stack and React Native. I enjoy turning rough ideas into smooth,
                        user-centric web & mobile experiences and constantly sharpening my
                        problem-solving skills. If it&apos;s challenging and creative, I&apos;m
                        probably already working on it.
                        {" "}<span className="text-xs md:text-sm text-gray-400">
                            Available for jobs & freelance work 🚀
                        </span>
                    </motion.p>

                    <div className="flex gap-2 flex-col md:flex-row items-center justify-center">
                        <motion.div
                            className="flex flex-wrap items-center gap-4 pt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <button className="animate-pulse inset-ring-2 px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-sm md:text-base font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                                View My Projects
                            </button>
                        </motion.div>
                        <motion.div
                            className="flex flex-wrap items-center gap-4 pt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <button className="animate-pulse inset-ring-2 px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-sm md:text-base font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                                Download CV
                            </button>
                        </motion.div>
                    </div>
                    <motion.div
                        className="w-full flex justify-center gap-10 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <Link href="#"
                            className='inset-ring-2 inset-ring-purple-900 bg-purple-100 text-purple-600 p-3 rounded-full shadow-sm shadow-purple-950 hover:shadow-xl hover:scale-105 duration-100 transition-transform '
                        >
                            <Linkedin size={29} className='animate-bounce' />
                        </Link>
                        <Link href="#"
                            className='inset-ring-2 inset-ring-purple-900 bg-purple-100 text-purple-600 p-3 rounded-full shadow-sm shadow-purple-950 hover:shadow-xl hover:scale-105 duration-100 transition-transform'
                        >
                            <Instagram size={29} className='animate-bounce' />
                        </Link>
                    </motion.div>
                </div>

                {/* Right Image */}
                <div
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <div className="relative ">
                        {/* Glowing background circle */}
                        <div className="absolute inset-0 " />

                        <div className="p-1 rounded-full bg-linear-to-tr from-purple-500 via-pink-500 to-blue-500  shadow-2xl shadow-purple-300">
                            <div className="rounded-full bg-slate-900 p-1 md:p-2">
                                <Image
                                    src="/MainPhoto.png"
                                    alt="Kuldeep main image"
                                    width={400}
                                    height={400}
                                    className="rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection