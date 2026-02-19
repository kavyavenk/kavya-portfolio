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
  BookOpen,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import backpackImage from "figma:asset/450e5a8b2ea628ad360ef7e45866ada4346eb1dd.png";
import speechWaveformImage from "figma:asset/736dda45b331b9557b0b1d8e1d53d550a27ae958.png";

export function ProjectsSection() {
  const projects = [
    {
      title: "MindPad",
      description:
        "Winner of Best Overall 1st Place, Best Use of Gemini API (MLH/Google), 3rd Best Practical AI Innovation (Amazon) at HackPrinceton Fall 2025. AI-powered multimodal learning platform enabling students to interact with course material through gesture, voice, & web-based canvas. Features real-time hand gesture tracking, context-aware voice explanations, diagrams, & summaries with accessible, touch-free navigation for students with motor limitations.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      technologies: [
        "Python",
        "React",
        "OpenCV",
        "MediaPipe",
        "ANN",
        "OpenAI Agent SDK",
        "Gemini API",
        "Flask",
      ],
      github: "https://github.com/kavyavenk/MindPad",
      live: "https://devpost.com/software/mindpad",
      featured: true,
      icon: Award,
      achievement: "Best Overall - HackPrinceton",
      isNew: false,
    },
    {
      title: "Multilingual Code-Switched Speech Research",
      description:
        "Graduate research at Columbia University Speech Lab under Prof. Julia Hirschberg. Designing multilingual speech evaluation pipeline using DisVoice to quantify prosody and rhythm features in code-switched dialogue across Hindi-English and Mandarin-English datasets.",
      image: speechWaveformImage,
      technologies: [
        "Python",
        "Praat",
        "DisVoice",
        "Speech Processing",
        "Prosody Analysis",
        "Multilingual NLP",
      ],
      github: "#",
      live: "https://www.cs.columbia.edu/speech/",
      featured: true,
      icon: BookOpen,
      achievement: "Ongoing NLP Research",
    },
    {
      title: "FengShui.fy",
      description:
        "Winner of Best Use of AI @ Columbia DivHacks 2025. AI-powered spatial intelligence tool that transforms room photos into interactive 3D layouts, evaluating how well a space aligns with Feng Shui principles of harmony and productivity. The system uses computer vision to analyze orientational factors to generate a Feng Shui Score that updates in real time in a 3D environment and provides personalized insights on how spatial changes impact focus and well-being.",
      image:
        "https://images.unsplash.com/photo-1673098224986-993e9913891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGludGVyaW9yJTIwcm9vbSUyMGRlc2lnbiUyMGZlbmclMjBzaHVpfGVufDF8fHx8MTc1OTY3NTIwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: [
        "Next.js",
        "Three.js",
        "FastAPI",
        "Computer Vision",
        "Google Gemini",
        "3D Modeling",
        "Blender",
      ],
      github: "https://github.com/kavyavenk/fengshui.ai",
      live: "https://demofengshui.netlify.app/",
      featured: true,
      icon: Brain,
      achievement: "Spatial AI Innovation",
      isNew: false,
    },
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
      achievement: "Optimization Algorithms",
      isNew: false,
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
        "Undergraduate research on technology as a tool of coercive control in IPV. Published and presented at IEEE SouthEastCon, CTSA, and UROP Symposium. Combines cybersecurity, psychology, and mental health interventions.",
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
      title: "Multilingual Backpack Language Models",
      description:
        "Research project implementing interpretable sense-based language models for French-English translation. Trained a 132M-parameter Backpack model from scratch on Europarl parallel data with 16 interpretable sense vectors per word, achieving 0.18 BLEU score and 0.44 cross-lingual word similarity correlation. Demonstrated 4x performance improvement over Transformer baseline with 0.85 cross-lingual alignment and labeled semantic categories for transparent cross-lingual analysis.",
      image: backpackImage,
      technologies: [
        "Python",
        "PyTorch",
        "Transformers",
        "HuggingFace",
        "XLM-RoBERTa",
        "sacrebleu",
        "MultiSimLex",
        "NumPy",
        "scikit-learn",
      ],
      github:
        "https://github.com/kavyavenk/multilingual-backpacks",
      live: "https://github.com/kavyavenk/multilingual-backpacks",
      featured: false,
      icon: BookOpen,
    },
    {
      title:
        "Emotion Detection in Text using Natural Language Processing",
      description:
        "Developed a fine-grained, multi-label emotion classification system using the GoEmotions dataset (58k+ Reddit comments annotated with 28 emotions + neutral). Benchmarked classical approaches against a fine-tuned BERT model, achieving ~20 percentage point micro-F1 improvement over statistical baselines.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      technologies: [
        "NLP",
        "PyTorch",
        "BERT",
        "HuggingFace",
        "Scikit-learn",
      ],
      github: "https://github.com/kavyavenk/emotion-detection",
      live: "#",
      featured: false,
      icon: BookOpen,
      achievement: "Jan-Apr 2025",
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
      title: "Studyful",
      description:
        "Study-first coordination platform inspired by Partiful × LettuceMeet that reduces friction in organizing collaborative campus study sessions. Features shared study events, calendar availability sync, session context views, integrated chat, and lightweight task tracking.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: [
        "Figma",
        "HTML / CSS",
        "JavaScript",
        "Flask",
        "Firebase",
        "User Research & Evaluation",
        "Human-Centered Design",
      ],
      live: "https://drive.google.com/file/d/1LCnxWZlm2z7kUNK2pVT0lXXQOE-FnG59/view?usp=sharing",
      featured: false,
      icon: BookOpen,
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <p className="text-gray-400 text-sm mb-3">
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
          <a
            href="https://github.com/kavyavenk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10 px-8 py-3"
            >
              View All Projects on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
