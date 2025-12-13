"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "MongoDB" },
  { skill: "TypeScript" },
  { skill: "React Native" },
  { skill: "HTML" },
  { skill: "Tailwind CSS" },
  { skill: "Zustand" },
  { skill: "Razorpay" },
  { skill: "Cloudinary" },
];

const journey = [
  {
    period: "2023",
    title: "Building Real-World Projects",
    description:
      "Started working on full-stack MERN + React Native projects, focusing on real use-cases and clean, production-ready code.",
  },
  {
    period: "2024",
    title: "Deep Dive into Problem Solving",
    description:
      "Solved DSA problems regularly and improved my approach to writing efficient, readable, and optimized solutions.",
  },
  {
    period: "Now",
    title: "Crafting User-Centric Experiences",
    description:
      "Actively building web and mobile products that are fast, scalable, and enjoyable to use — while constantly learning new tools & patterns.",
  },
];

const AboutMe = () => {
  return (
    <section className="font-serif w-full bg-linear-to-br from-[#201E43] to-[#0F828C] py-12 md:py-16">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 max-w-6xl mx-auto px-4">
        {/* Left: Image */}
        <motion.div
          className="w-full md:w-[30%] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/About_section.png"
            alt="Developer illustration representing Kuldeep"
            height={400}
            width={400}
            className="bg-blue-950 rounded-full p-1 md:p-2 shadow-2xl shadow-amber-100 mt-4 md:mt-0"
          />
        </motion.div>

        {/* Right: Content */}
        <div className="w-full md:w-[70%] flex flex-col items-start justify-center">
          <div className="px-2 md:px-4 lg:px-6 max-w-2xl">
            <motion.h2
              className="text-purple-400 font-bold text-3xl md:text-4xl lg:text-4xl mb-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-purple-200 text-base md:text-lg font-semibold mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Hi, I&apos;m Kuldeep — a Software Development Engineer passionate
              about building user-focused digital products.
            </motion.p>

            <motion.p
              className="text-purple-200 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              I specialize in the MERN stack and React Native, turning creative
              ideas into powerful web and mobile applications. From designing
              intuitive UIs to writing scalable backend architectures, I enjoy
              solving real-world problems using clean, modern tech.
            </motion.p>

            <motion.p
              className="text-purple-200 text-sm md:text-base leading-relaxed mt-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              I&apos;m constantly improving my development skills, learning new
              technologies, and writing better code every day. I believe great
              products aren’t just built — they&apos;re crafted with curiosity,
              patience, and precision.
            </motion.p>

            {/* Tech Focus */}
            <motion.h3
              className="text-purple-200 font-bold mt-6 mb-2 text-base md:text-lg"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              📌 Tech Focus:
            </motion.h3>

            <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {skills.map((s) => (
                <motion.div
                  key={s.skill}
                  className="w-full flex items-center justify-center"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="w-full font-bold ring-2 ring-inset ring-purple-500/50 bg-gray-800/40 text-purple-100 text-xs md:text-sm p-2 rounded-2xl text-center backdrop-blur-sm">
                    {s.skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Goal */}
            <div className="mt-4">
              <motion.p
                className="font-semibold text-base md:text-lg text-purple-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                🚀 Goal:{" "}
                <span className="text-purple-100 text-sm md:text-lg font-normal">
                  Grow as a full-stack engineer and build products that truly
                  help people.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey / Timeline */}
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <motion.h3
          className="text-purple-100 font-semibold text-xl md:text-2xl mb-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🛤 My Journey So Far
        </motion.h3>

        <div className="relative border-l border-purple-400/40 ml-4 md:ml-10">
          {journey.map((step, index) => (
            <motion.div
              key={step.title}
              className="mb-6 ml-4 md:ml-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 rounded-full bg-purple-400 absolute -left-[7px] mt-2" />
              <p className="text-xs md:text-sm text-purple-200/80">
                {step.period}
              </p>
              <h4 className="text-sm md:text-lg font-semibold text-purple-100">
                {step.title}
              </h4>
              <p className="text-xs md:text-sm text-purple-100/90 mt-1 max-w-xl">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
