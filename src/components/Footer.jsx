import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Youtube, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
      href: 'https://www.youtube.com/@NextGen-Growth',
      label: 'YouTube'
    }
  ]

  return (
    <footer className="relative border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-0"
          >
            <div className="text-2xl font-bold gradient-text mb-2">
              Favour Momodu
            </div>
            <p className="text-gray-400 text-sm">
              Software Developer • Digital Marketer • Content Creator
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center text-gray-400 text-sm"
          >
            <span>© {currentYear} copyright</span>
            <Heart size={16} className="mx-1 text-red-500" />
            <span>by Favour Momodu</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer