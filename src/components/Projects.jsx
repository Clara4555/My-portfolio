import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, ArrowRight } from 'lucide-react'
import balticImg from '../assets/baltic.png'
import yotaImg from '../assets/yota.png'
import glutoImg from '../assets/gluto.png'
import eduscholaImg from '../assets/eduschola.png' // adjust path as needed
import embexImg from '../assets/embex.png'
import saronImg from '../assets/saron.png'
import yaahmanImg from '../assets/yahman.png'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const projects = [
    {
      title: 'Baltic Energy Corp',
      description: 'Corporate website for energy company with modern design and responsive layout',
      image: balticImg,
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      link: 'https://www.balticenergycorp.kz',
      featured: true
    },
    {
      title: 'Yota Shipping',
      description: 'Shipping company website with booking system and service information',
      image: yotaImg,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://www.yotashipping.com',
      featured: true
    },
    {
  title: 'Eduschola',
  description: 'School management system using Laravel, PHP, and Tailwind CSS',
  image: eduscholaImg,
  technologies: ['Laravel', 'PHP', 'Tailwind CSS'],
  link: 'https://www.eduschola.com', // replace with actual link if available
  featured: true
},
    {
      title: 'Gluto International Catalog',
      description: 'Full-stack e-commerce catalog with MongoDB, Node.js, and email integration',
      image: glutoImg,
      technologies: ['MongoDB', 'Node.js', 'Express', 'Nodemailer'],
      link: 'https://www.catalog.glutointernational.com',
      featured: true
    },
    {
      title: 'Embex BV',
      description: 'Professional business website with service portfolio and contact system',
      image: embexImg,
      technologies: ['React', 'CSS', 'JavaScript'],
      link: 'https://www.embexbv.com',
      featured: false
    },
    {
      title: 'Saron BV',
      description: 'Corporate website showcasing services and company information',
      image: saronImg,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://www.saronbv.com',
      featured: false
    },
    {
      title: 'Yaahman Foods',
      description: 'Food business website with booking system and Node.js backend',
      image: yaahmanImg,
      technologies: ['HTML', 'CSS', 'Node.js', 'Nodemailer'],
      link: 'https://yaahmanfoods.com',
      featured: false
    }
  ]

  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A showcase of my recent work across various industries and technologies
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="glass-effect rounded-lg p-1">
              {[
                { key: 'all', label: 'All Projects' },
                { key: 'featured', label: 'Featured' }
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key)}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    filter === filterOption.key
                      ? 'bg-accent text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl overflow-hidden hover-lift group"
              >
                <div className="relative overflow-hidden w-full h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-primary hover:bg-accent hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-accent font-semibold text-sm hover:text-blue-400 transition-colors"
                  >
                    View Project
                    <ArrowRight size={16} className="ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
