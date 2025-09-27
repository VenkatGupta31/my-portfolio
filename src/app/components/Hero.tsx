import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiArrowDown } from 'react-icons/fi'
import Section from './ui/Section'

export default function Hero() {
  return (
    <Section id="hero" className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-slide-up">
          <div className="inline-block mb-6">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-full text-sm font-medium">
              Full Stack Web Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Gundla <span className="gradient-text">Venkateshwarlu</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Crafting exceptional digital experiences with <span className="text-primary-600 dark:text-primary-400 font-semibold">9+ years</span> of expertise in modern web technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-700 dark:text-gray-300">
            <a href="mailto:venky_leo31@outlook.com" className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <FiMail className="w-5 h-5" /> venky_leo31@outlook.com
            </a>
            <a href="tel:+919000185868" className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <FiPhone className="w-5 h-5" /> +91 90001 85868
            </a>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-5 h-5" /> Hyderabad, India
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/venkat-gupta/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FiLinkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="https://github.com/VenkatGupta31"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-white hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FiGithub className="w-5 h-5" /> GitHub
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors animate-bounce"
          >
            <FiArrowDown className="w-5 h-5" />
            <span className="text-sm font-medium">Explore More</span>
          </a>
        </div>
      </div>
    </Section>
  )
}