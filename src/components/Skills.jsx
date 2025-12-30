import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Three.js', level: 70 },
        { name: 'TypeScript', level: 75 },
      ]
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Express', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'PHP', level: 70 },
        { name: 'Laravel', level: 65 },
      ]
    },
    {
      category: 'Tools & Marketing',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Digital Marketing', level: 80 },
        { name: 'SEO Optimization', level: 75 },
        { name: 'Content Creation', level: 70 },
        { name: 'Figma', level: 60 },
        { name: 'Analytics', level: 75 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto text-lg">
            A comprehensive skill set that combines technical expertise with digital marketing knowledge to deliver end-to-end solutions
          </p>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-xl hover-lift"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-accent">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.8 }}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5, 
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className="bg-gradient-to-r from-accent to-blue-400 h-3 rounded-full relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"
                            animate={{
                              x: ['0%', '100%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm constantly expanding my skill set and staying updated with the latest technologies 
              and industry trends. Currently exploring advanced React patterns, cloud technologies, 
              and AI integration in web development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills