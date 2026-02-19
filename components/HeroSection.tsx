"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "figma:asset/06b79a67f8ac2ebfbbd8e0756faa9caa2dcc56b1.png";
import { Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <ImageWithFallback
                src={profileImage}
                alt="Kavya Venkatesh"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-300 shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-300 text-lg tracking-wider"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl text-white mb-6"
          >
            Kavya Venkatesh
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl text-gray-300 mb-8"
          >
            I'm an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
              AI & Data Technology Consultant
            </span>{" "}
            specializing in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Machine Learning, Natual Language Processing, &
              Software Development
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto mb-8"
          >
            Master's student in Computer Science (ML) at
            Columbia University with experience at Ernst & Young
            developing AI-driven data solutions. Passionate
            about leveraging technology for social impact - from
            multilingual speech research and data privacy to
            hackathon projects aimed at scaling modern
            technology for good.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>

            <div className="flex items-center space-x-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/kavyavenk",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/kavyavenkatesh",
                },
                {
                  icon: Mail,
                  href: "mailto:kavenk16@gmail.com",
                },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
