import Section from './ui/Section'

export default function About() {
  return (
    <Section id="about" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center">
            Passionate <span className="text-primary-600 dark:text-primary-400 font-semibold">Full Stack Web Developer</span> with over 
            9+ years of relevant experience, specializing in modern frontend ecosystems. Expert in agile methodologies 
            and collaborating with cross-functional teams to deliver high-quality web applications. Seeking a challenging 
            full-stack role to further enhance my skills and contribute to the success of innovative organizations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">9+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}