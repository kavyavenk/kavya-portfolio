'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react'

export function CertificationsSection() {
  const certifications = [
    {
      title: 'EY - Artificial Intelligence - AI Engineering - Silver Learning',
      issuer: 'Ernst & Young',
      date: 'July 2025',
      skills: ['Generative AI', 'Machine Learning', 'Prompt Engineering'],
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'Generative AI with Large Language Models',
      issuer: 'Amazon Web Services (AWS)',
      date: 'July 2025',
      credentialId: 'EK6G6R3AD1W4',
      skills: ['Generative AI', 'NLP', 'Reinforcement Learning', 'LLM', 'AWS'],
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'Machine Learning in Production',
      issuer: 'DeepLearning.AI',
      date: 'July 2025',
      credentialId: '6OOVLZXAT1GA',
      skills: ['Machine Learning', 'Deep Learning', 'MLOps', 'SDLC', 'Data Pipelines'],
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'Group 2 Social / Behavioral Research Investigators',
      issuer: 'CITI Program',
      date: 'January 2024',
      expires: 'January 2027',
      credentialId: '60824941',
      skills: ['Human-System Trust'],
      category: 'Research'
    },
    {
      title: 'Responsible Conduct of Research',
      issuer: 'CITI Program',
      date: 'January 2024',
      credentialId: '60824974',
      skills: ['Research Ethics'],
      category: 'Research'
    },
    {
      title: 'Microsoft Learn AI Skills Challenge',
      issuer: 'Microsoft',
      date: 'August 2023',
      skills: ['AI', 'Microsoft Dynamics 365', 'Conversational AI', 'Power Apps'],
      category: 'Microsoft'
    },
    {
      title: 'Software Engineering Virtual Experience Program',
      issuer: 'Goldman Sachs',
      date: 'July 2023',
      credentialId: 'nHX7QQ8qZtgWfADJE',
      skills: ['Encryption', 'Cryptography', 'Software Engineering'],
      category: 'Software Engineering'
    },
    {
      title: 'Understanding Gender Roles Through South Asian Media',
      issuer: 'Stanford University',
      date: 'December 2020',
      skills: ['Cultural Studies'],
      category: 'Academic'
    }
  ]

  const microsoftCerts = [
    { title: 'Microsoft Office Specialist - Excel 2019', date: 'January 2020' },
    { title: 'Microsoft Technology Associate - Python', date: 'January 2020' },
    { title: 'Microsoft Office Specialist - Word 2016', date: 'January 2019' },
    { title: 'Microsoft Office Specialist - PowerPoint 2016', date: 'January 2018' }
  ]

  const featuredCerts = certifications.filter(cert => cert.featured)
  const otherCerts = certifications.filter(cert => !cert.featured)

  const categoryColors: { [key: string]: string } = {
    'AI/ML': 'from-blue-400 to-blue-600',
    'Research': 'from-purple-400 to-purple-600',
    'Microsoft': 'from-green-400 to-green-600',
    'Software Engineering': 'from-orange-400 to-orange-600',
    'Academic': 'from-pink-400 to-pink-600'
  }

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Certifications & Training</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications in AI, machine learning, and technology
          </p>
        </motion.div>

        {/* Featured Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white mb-8 text-center">Recent Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCerts.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gray-900/50 border-white/10 hover:border-blue-400/50 transition-all duration-300 group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColors[cert.category]} bg-opacity-20`}>
                      <Award className="w-6 h-6 text-blue-300" />
                    </div>
                    <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                      {cert.category}
                    </Badge>
                  </div>
                  
                  <h4 className="text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {cert.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                    {cert.expires && (
                      <span className="ml-2 text-blue-300">• Expires {cert.expires}</span>
                    )}
                  </div>
                  
                  {cert.credentialId && (
                    <div className="flex items-center text-gray-400 text-xs mb-4">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      ID: {cert.credentialId}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-400/20 text-blue-300 rounded text-xs border border-blue-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl text-white mb-6 text-center">Additional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherCerts.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 bg-black/30 border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h5 className="text-white text-sm mb-1">{cert.title}</h5>
                      <p className="text-gray-400 text-xs">{cert.issuer} • {cert.date}</p>
                    </div>
                    <Badge variant="outline" className="border-blue-400/30 text-blue-300 text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Microsoft Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl text-white mb-6 text-center">Microsoft Office Specialist Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {microsoftCerts.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="p-3 bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-400/20 text-center">
                  <div className="text-green-400 mb-2">
                    <CheckCircle className="w-5 h-5 mx-auto" />
                  </div>
                  <h6 className="text-white text-sm mb-1">{cert.title}</h6>
                  <p className="text-gray-400 text-xs">{cert.date}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}