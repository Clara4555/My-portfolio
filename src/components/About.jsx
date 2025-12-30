import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, TrendingUp, Video, Globe, Users, Target } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const passions = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Creating robust, scalable web applications with modern technologies like React, Node.js, and MongoDB'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Driving growth through strategic digital campaigns, SEO optimization, and data-driven analytics'
    },
    {
      icon: Video,
      title: 'Content Creation',
      description: 'Sharing knowledge and inspiring others through engaging YouTube content and tutorials'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Building responsive, accessible websites that work seamlessly across all devices and platforms'
    },
    {
      icon: Users,
      title: 'User Experience',
      description: 'Creating intuitive interfaces that prioritize user needs and deliver exceptional experiences'
    },
    {
      icon: Target,
      title: 'Business Solutions',
      description: 'Developing technology solutions that solve real business problems and drive measurable results'
    }
  ]

  const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Happy Clients' },
    { number: '10K+', label: 'Content Views' }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto text-lg">
            A passionate multi-disciplinary professional bridging technology, marketing, and content creation to deliver exceptional digital experiences
          </p>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 glass-effect rounded-xl hover-lift"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm Favour Momodu, a versatile professional with expertise in software development, 
                  digital marketing, and content creation. My passion lies in creating digital solutions 
                  that not only look great but also drive real business results and user engagement.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  With comprehensive experience in both frontend and full-stack development, I've successfully 
                  delivered diverse projects ranging from corporate websites to complex web applications. 
                  My digital marketing background gives me a unique perspective on user behavior, enabling 
                  me to create products that truly resonate with target audiences.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  As an aspiring YouTuber and content creator, I'm passionate about sharing my knowledge 
                  and inspiring the next generation of developers and digital creators. I believe in 
                  continuous learning and staying updated with the latest industry trends and technologies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className="glass-effect p-6 rounded-xl hover-lift group"
                >
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-accent/20 rounded-lg mr-4 group-hover:bg-accent/30 transition-colors duration-300">
                      <passion.icon className="text-accent" size={24} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {passion.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {passion.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About