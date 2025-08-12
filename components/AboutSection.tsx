"use client";

import { motion } from "motion/react";
import { Card } from "./ui/card";
import {
  GraduationCap,
  Music,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description:
        "3.91 GPA at Georgia Tech with 4x Faculty Honors & 3x Dean's List. Currently pursuing MS CS at Columbia.",
    },
    {
      icon: Award,
      title: "Research Impact",
      description:
        "Published research on technology-enabled coercive control, presented at IEEE SouthEastCon and multiple conferences.",
    },
    {
      icon: Users,
      title: "Mentorship",
      description:
        "Teaching Assistant for 120+ students, fostering learning in algorithms and computational complexity.",
    },
    {
      icon: Music,
      title: "Creative Balance",
      description:
        "Trained Carnatic Singer and aspiring art connoisseur, bringing creativity to technical problem-solving.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-4">
              Bridging Technology and Social Impact Through
              Machine Learning and Data Solutions
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm currently pursuing my Master's in Computer
              Science at Columbia University specializing in
              Machine Learning, building upon my strong
              foundation from Georgia Institute of Technology
              where I graduated with a 3.91 GPA and Highest
              Honors. My journey spans from software engineering
              to cutting-edge AI and data science applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              At Ernst & Young, I worked as an AI & Data
              Technology Consulting Intern, developing data
              modernization solutions building advanced agentic
              workflows, and using microservices architecture,
              Databricks, and modern cloud technologies. My
              experience ranges from creating AI-driven
              forecasting tools to implementing workforce
              planning chatbots that enhance operational
              efficiency.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What drives me most is the intersection of
              technology and social good. My undergraduate
              research on technology-enabled coercive control in
              intimate partner violence has been presented at
              multiple conferences, combining technical
              expertise with deep social awareness. When I'm not
              coding, you'll find me humming music across
              genres, curled up with a good book, catching the
              latest F1 race or tennis match, or exploring art
              museums and galleries – pursuits that fuel my
              creativity in technical problem-solving.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {[
                "AI Enthusiast",
                "Research-Oriented",
                "Social Impact Advocate",
                "Creative Problem Solver",
              ].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-blue-400/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-black/50 border-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}