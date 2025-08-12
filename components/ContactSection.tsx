'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Github, Linkedin, Mail, Phone, MapPin, GraduationCap } from 'lucide-react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kavenk16@gmail.com',
      href: 'mailto:kavenk16@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (404) 408-9390',
      href: 'tel:+14044089390'
    },
    {
      icon: GraduationCap,
      label: 'Current',
      value: 'MS at Columbia University',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kavyavenk', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/kavyavenkatesh', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kavenk16@gmail.com', label: 'Email' }
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm currently pursuing my Master's at Columbia and open to exciting opportunities in AI, data science, 
            and technology consulting. Let's discuss how we can collaborate!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gray-900/50 border-white/10">
              <h3 className="text-2xl text-white mb-6">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">First Name</label>
                    <Input
                      placeholder="Your first name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Last Name</label>
                    <Input
                      placeholder="Your last name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Subject</label>
                  <Input
                    placeholder="Collaboration opportunity"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Let's connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm passionate about leveraging AI and data science for social impact. Whether you're interested 
                in discussing research collaborations, consulting opportunities, or innovative projects that bridge 
                technology and social good, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center text-blue-300 group-hover:bg-blue-400/30 transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white text-lg mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-blue-400 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-lg border border-blue-400/20"
            >
              <h4 className="text-white mb-2">Current Status</h4>
              <p className="text-gray-300 text-sm mb-2">
                🎓 MS Computer Science at Columbia University (2025-2026)
              </p>
              <p className="text-gray-300 text-sm mb-2">
                💼 AI & Data Technology Consulting Intern at Ernst & Young
              </p>
              <p className="text-gray-300 text-sm">
                🔍 Open to research collaborations and full-time opportunities
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 Kavya Venkatesh. Designed &amp; Built with ❤️ using React and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Trained Carnatic Singer • Avid Reader • Movie Enthusiast • Keen Writer • Aspiring Art Connoisseur
          </p>
        </motion.div>
      </div>
    </section>
  )
}