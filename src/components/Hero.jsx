import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Youtube, Download } from 'lucide-react'
import profileImage from '../assets/profile.jpeg'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    // Your Google Document ID
    const googleDocId = '1rMhjrUI0wdsR2SRoNKQSZcSpGlKkbNJu'
    // Google Docs export to PDF URL
    const downloadUrl = `https://docs.google.com/document/d/${googleDocId}/export?format=pdf`
    
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = 'Favour_Momodu_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    {
      icon: Github,
      href: 'http://github.com/clara4555',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/techyfavour/',
      label: 'LinkedIn'
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com',
      label: 'YouTube'
    }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Favour Momodu</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Software Developer • Digital Marketer • Content Creator
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              Crafting digital experiences through code, marketing strategies, and creative content. 
              Transforming ideas into impactful solutions that drive real business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg"
              >
                View My Work
              </motion.a>
              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 glass-effect px-8 py-4 rounded-lg font-semibold hover-lift border border-accent/30 text-accent dark:text-white"
              >
                <Download size={20} />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors duration-300 p-3 rounded-full glass-effect"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-purple-500 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src={profileImage}
                alt="Favour Momodu"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -inset-4 border-2 border-accent/30 rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-accent transition-colors duration-300 p-2 rounded-full glass-effect"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero