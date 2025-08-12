"use client";

import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
  Award,
  Users,
  Brain,
  Heart,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const projects = [
    {
      title: "F1 Fantasy League Optimizer",
      description:
        "A full-stack application designed to help Formula 1 fans create the most competitive fantasy teams within a given budget. Features dynamic algorithms for optimal team selection, customizable preferences, and interactive UI built with Streamlit.",
      image:
        "https://images.unsplash.com/photo-1742744652734-d5ec6598b5da?https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop",
      technologies: [
        "Python",
        "Streamlit",
        "Data Analysis",
        "Optimization Algorithms",
        "UI/UX Design",
      ],
      github:
        "https://github.com/kavyavenk/f1-fantasy-optimizer",
      live: "https://f1-fantasy-optimizer.streamlit.app/",
      featured: true,
      icon: Zap,
      achievement: "Dec 2024 - Jan 2025",
      isNew: true,
    },
    {
      title: "prompt+ Chrome Extension",
      description:
        "Winner of 3rd place (Best Overall) at HackGT 11 out of 1,500+ participants. A Chrome extension that enhances prompt efficiency for Large Language Models by optimizing token use and improving context continuity across interactions.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      technologies: [
        "Chrome Extension",
        "JavaScript",
        "LLMs",
        "Prompt Engineering",
      ],
      github: "https://github.com/promptplusGT/promptplus",
      live: "https://devpost.com/software/prompt-sf7drq",
      featured: true,
      icon: Award,
      achievement: "3rd Place at HackGT 11",
    },
    {
      title: "Technology & Intimate Partner Violence Research",
      description:
        "Groundbreaking undergraduate research on technology as a tool of coercive control in IPV. Published and presented at IEEE SouthEastCon, UROP Symposium, and multiple conferences. Combines cybersecurity, psychology, and mental health interventions.",
      image:
        "https://images.unsplash.com/photo-1579667410546-f7079afa0601?w=600&h=400&fit=crop",
      technologies: [
        "Research",
        "Qualitative Analysis",
        "Cybersecurity",
        "Mental Health",
      ],
      github: "#",
      live: "#",
      featured: true,
      icon: Users,
      achievement: "Published at IEEE SouthEastCon",
    },
    {
      title: "Athena - Emotional Foresight Investing App",
      description:
        "A sentiment-driven mobile prototype that integrates predictive analytics, decision modeling, and emotion tracking to help users make data-informed investment choices with real-time feedback and behavioral logging.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: [
        "Mobile App",
        "Predictive Analytics",
        "Emotion AI",
        "Financial Modeling",
      ],
      // github: "#",
      live: "https://www.figma.com/slides/rbS5a1fSg8SRple6ljAmr2/FigBuild-2025--athena?node-id=3-268&t=hBPk9mfB87CtCqkF-1",
      featured: false,
      icon: Brain,
    },
    {
      title: "Dawn - Mental Health App",
      description:
        "End-to-end mental health application focusing on improving user well-being. Includes business pitch, wireframing, UI/UX design, development using Microsoft PowerApps with Dataverse backend, and comprehensive marketing strategy.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: [
        "Microsoft PowerApps",
        "Dataverse",
        "UI/UX Design",
        "Mental Health",
      ],
      // github: "#",
      live: "https://www.figma.com/proto/555xlVLKteUeiY2wVrpyTe/kavya-mental-health-app-wireframe?node-id=202-540&starting-point-node-id=202%3A540&t=4DxByaS0Ahk8JjT4-1",
      featured: false,
      icon: Heart,
    },
    {
      title: "AI-Driven Data Solutions at EY",
      description:
        "Developed and deployed scalable AI-driven data solutions including an FP&A Insights Forecasting tool and Workforce Planning Chatbot. Utilized full-stack development and modern database applications to align technology with client needs.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      technologies: [
        "AI/ML",
        "Databricks",
        "PostgreSQL",
        "Docker",
        "Microservices",
      ],
      // github: "#",
      live: "https://www.linkedin.com/in/kavyavenkatesh/",
      featured: false,
      icon: Brain,
    },
    {
      title: "Data Privacy Framework",
      description:
        "Created a three-lens framework of diagnostic questions to improve user trust in systems and e-governance services. Combined technical, legal, and sociopsychological understanding to design user-centric privacy solutions.",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop",
      technologies: [
        "Data Privacy",
        "User Research",
        "Backend Services",
        "E-Governance",
      ],
      // github: "#",
      live: "https://www.linkedin.com/in/kavyavenkatesh/",
      featured: false,
      icon: Users,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            From award-winning hackathon projects to published
            research, here's a showcase of my work spanning AI,
            data science, and social impact
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/50 border-white/10 overflow-hidden hover:border-blue-400/50 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                  {/* Achievement Badge */}
                  {project.achievement && (
                    <div
                      className={`absolute top-4 left-4 ${project.isNew ? "bg-blue-400/90" : "bg-blue-400/90"} text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1`}
                    >
                      <project.icon className="w-4 h-4" />
                      <span>{project.achievement}</span>
                    </div>
                  )}

                  {/* New Badge */}
                  {project.isNew && (
                    <div className="absolute top-4 right-20 bg-gradient-to-r from-blue-300 to-purple-400 text-white px-2 py-1 rounded-full text-xs font-medium">
                      NEW
                    </div>
                  )}

                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">
            Other Notable Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 left-3">
                    <project.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies
                      .slice(0, 3)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Research Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-xl border border-blue-400/20"
        >
          <h3 className="text-2xl text-white mb-6 text-center">
            Research Publications
          </h3>
          <div className="space-y-4">
            <div className="text-gray-300">
              <strong>
                Crooks, C., Talwalkar, S., Sharma, T., Arora,
                K., & Venkatesh, K.
              </strong>{" "}
              (2024). Designing Human-centered Artificial
              Intelligence to Assist with Domestic Abuse
              Recovery: Mitigating Technology Enabled Coercive
              Control.{" "}
              <em>
                Proceedings of the 2024 IEEE SE Conference
              </em>
              , Atlanta, GA.
            </div>
            <div className="text-gray-300">
              <strong>
                Crooks, C. L., Arora, K., Venkatesh, K., Sharma,
                T., & Talwalkar, S.
              </strong>{" "}
              (2023). Technology-assisted recovery from intimate
              partner violence: Ethical and practical
              considerations associated with moral injury and
              coercive control.{" "}
              <em>
                2024 Southeast Regional Clinical & Translational
                Science Conference
              </em>
              .
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10 px-8 py-3"
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}