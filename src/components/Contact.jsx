import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'favourloyalty8@gmail.com',
      href: 'mailto:favourloyalty8@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+2349159113921',
      href: 'tel:+2349159113921'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Worldwide',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities, whether it's a freelance project, 
                collaboration, or just a friendly chat about technology and digital marketing.
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center p-4 glass-effect rounded-xl hover-lift group"
                  >
                    <div className="p-3 bg-accent/20 rounded-lg mr-4 group-hover:bg-accent/30 transition-colors">
                      <method.icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{method.label}</div>
                      <div className="text-white font-semibold">{method.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-white transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-white transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-white transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-accent text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact