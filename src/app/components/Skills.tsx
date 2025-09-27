import Section from './ui/Section'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: '⚡',
      skills: ['JavaScript / TypeScript', 'HTML5', 'CSS / TailwindCSS', 'NextJs / ReactJs', 'Redux / Zustand', 'Jest / ReactTestingLibrary'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend & Databases',
      icon: '🔧',
      skills: ['NestJs: MVC Pattern', 'NodeJs / ExpressJs', 'REST API', 'PrismaORM', 'PostgreSQL / OpenSearch / GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools & Methodologies',
      icon: '🛠️',
      skills: ['GitLab / Bitbucket', 'Jira', 'Agile', 'AWS', 'CI/CD', 'UI/UX Design'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Technical Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl glass-effect p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}