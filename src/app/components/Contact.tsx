'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi'
import Section from './ui/Section'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'venky_leo31@outlook.com',
      href: 'mailto:venky_leo31@outlook.com',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 90001 85868',
      href: 'tel:+919000185868',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#',
      color: 'text-red-600 dark:text-red-400'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'venkat-gupta',
      href: 'https://www.linkedin.com/in/venkat-gupta/',
      color: 'text-blue-500 dark:text-blue-300'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'VenkatGupta31',
      href: 'https://github.com/VenkatGupta31',
      color: 'text-gray-600 dark:text-gray-300'
    }
  ]

  return (
    <Section id="contact" className="bg-white dark:bg-gray-900">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Let's discuss how we can work together to bring your ideas to life
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Feel free to reach out through any of the 
                channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-4 p-4 rounded-xl glass-effect hover:shadow-lg transition-all duration-200 group"
                >
                  <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-200 ${method.color}`}>
                    <method.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                      {method.label}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      {method.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                  <FiCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for your message. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 md:mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Gundla Venkateshwarlu. All rights reserved.
        </p>
      </div>
    </Section>
  )
}