"use client";

import { motion } from "motion/react";
import { Card } from "./ui/card";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming & Development",
      skills: [
        {
          name: "Python",
          level: 95,
          color: "from-yellow-400 to-yellow-600",
        },
        {
          name: "Java",
          level: 100,
          color: "from-orange-400 to-red-600",
        },
        {
          name: "JavaScript/React.js",
          level: 88,
          color: "from-blue-400 to-blue-600",
        },
        {
          name: "SQL",
          level: 92,
          color: "from-indigo-400 to-purple-600",
        },
        {
          name: "Node.js",
          level: 85,
          color: "from-green-500 to-green-700",
        },
      ],
    },
    {
      title: "AI & Data Science",
      skills: [
        {
          name: "Machine Learning",
          level: 93,
          color: "from-purple-500 to-pink-600",
        },
        {
          name: "Natural Language Processing",
          level: 88,
          color: "from-blue-300 to-teal-600",
        },
        {
          name: "Computer Vision",
          level: 82,
          color: "from-cyan-400 to-blue-600",
        },
        {
          name: "LangChain/LLM",
          level: 85,
          color: "from-violet-400 to-purple-600",
        },
        {
          name: "PyTorch/Scikit-learn",
          level: 87,
          color: "from-orange-500 to-red-600",
        },
      ],
    },
    {
      title: "Cloud & Analytics",
      skills: [
        {
          name: "Databricks",
          level: 95,
          color: "from-red-500 to-orange-600",
        },
        {
          name: "Microsoft Azure",
          level: 85,
          color: "from-blue-600 to-indigo-700",
        },
        {
          name: "AWS",
          level: 85,
          color: "from-orange-400 to-yellow-600",
        },
        {
          name: "Snowflake",
          level: 90,
          color: "from-cyan-500 to-blue-600",
        },
        {
          name: "Power BI",
          level: 80,
          color: "from-yellow-500 to-orange-600",
        },
      ],
    },
  ];

  const additionalSkills = [
    "Pandas",
    "NumPy",
    "Flask",
    "Docker",
    "Git",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "REST APIs",
    "MATLAB",
    "Figma",
    "UI/UX Design",
    "Google Analytics",
    "JIRA",
    "Agile/SCRUM",
    "Business Analytics",
    "Financial Modeling",
    "Blockchain",
    "Cryptography",
    "HTML/CSS",
    "iOS/Swift",
    "Adobe Illustrator",
    "SEO",
    "DevOps",
    "C/C++",
    "Atlassian",
    "Discrete Mathematics",
    "Financial Planning & Analysis",
    "Flutter",
    "Google Cloud Platform",
    "Jupyter",
    "Neural Networks",
    "OpenCV",
    "Product Management",
    "PyTorch",
    "Reinforcement Learning",
    "Salesforce",
    "SAP",
    "Web Development",
    "Wireframes",
    "Capital Markets"
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI, data science,
            cloud technologies, and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: categoryIndex * 0.2,
                duration: 0.8,
              }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gray-900/50 border-white/10 backdrop-blur-sm">
                <h3 className="text-xl text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay:
                          categoryIndex * 0.2 +
                          skillIndex * 0.1,
                        duration: 0.6,
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          transition={{
                            delay:
                              categoryIndex * 0.2 +
                              skillIndex * 0.1 +
                              0.3,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-white mb-8">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {additionalSkills.map((tech, index) => (
              <motion.span
                key={`${tech}-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8 + index * 0.03,
                  duration: 0.3,
                }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/5 text-gray-400 rounded-lg border border-white/10 text-sm hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              number: "3.91",
              label: "GPA at Georgia Tech",
              sublabel: "4x Faculty Honors",
            },
            {
              number: "120+",
              label: "Students Mentored",
              sublabel: "As Teaching Assistant",
            },
            {
              number: "5+",
              label: "Years Experience",
              sublabel: "In Tech & Research",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1 + index * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-blue-400/10 to-blue-500/10 rounded-lg border border-blue-400/20"
            >
              <div className="text-3xl text-blue-300 mb-2">
                {stat.number}
              </div>
              <div className="text-white">{stat.label}</div>
              <div className="text-gray-400 text-sm">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}