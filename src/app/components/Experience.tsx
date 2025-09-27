import { FiExternalLink, FiCalendar, FiMapPin } from 'react-icons/fi'
import Section from './ui/Section'

export default function Experience() {
  const experiences = [
    {
      period: "Jun 2024 – Present",
      location: "Bengaluru, KA",
      title: "Senior Software Engineer",
      company: "PEI Group",
      description: "Working on multi-tenant Next.js applications for alternative assets data platform",
      achievements: [
        "Created API endpoints to fetch and filter alternative assets data from OpenSearch",
        "Implemented end-to-end login/register forms using react-hook-form and Zephr identity APIs",
        "Developed on-demand editorial data display using headless WordPress and GraphQL API",
        "Designed comprehensive onboarding wizard form using Shadcn components"
      ],
      technologies: ["Next.js", "React", "OpenSearch", "GraphQL", "NestJS"],
      links: [
        { url: "https://www.peredeals.com", label: "PERE Deals" },
        { url: "https://www.infrastructureinvestordeals.com", label: "Infrastructure Investor" }
      ]
    },
    {
      period: "Jan 2019 – May 2024",
      location: "Bengaluru, KA",
      title: "Senior Engineer II - Frontend",
      company: "Pregin India Pvt Ltd",
      description: "Enterprise data platform and analytics tool development",
      achievements: [
        "Created full portfolio module with Highcharts & React Table for investor analysis",
        "Developed scalable reusable components for advanced search and dashboard features",
        "Built micro-frontend application from scratch and integrated into main platform",
        "Enhanced UI performance through code splitting and caching implementation"
      ],
      technologies: ["React", "TypeScript", "Micro-frontends", "Highcharts"],
      links: []
    }
  ]

  return (
    <Section id="experience" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Professional Journey
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on medium+ */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-900"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 md:mb-12 md:ml-4 md:pl-12 animate-slide-up">
              {/* Timeline dot - hidden on mobile */}
              <div className="hidden md:block absolute left-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 shadow-lg"></div>
              
              <div className="glass-effect rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col mb-4">
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400 mb-2 text-sm">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        {exp.location}
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>

                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Key Achievements:</h4>
                  <ul className="space-y-1 md:space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                        <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {exp.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline text-xs md:text-sm"
                      >
                        {link.label} <FiExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}