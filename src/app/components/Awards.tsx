import { FiAward, FiCalendar } from 'react-icons/fi'
import Section from './ui/Section'

export default function Awards() {
  const awards = [
    {
      title: "Star Performer",
      organization: "Pregin India Pvt Ltd",
      year: "2022",
      description: "For the outstanding contribution towards building the portfolio module in Pregin Pro. Recognized in Q2, 2022 for exceptional performance and innovation.",
      achievement: "Successfully delivered the full portfolio module with Highcharts & React Table, enabling investors to analyze their portfolio and make better decisions.",
      icon: "⭐"
    },
    {
      title: "PAT on the Back",
      organization: "Hexagon (HCCI)",
      year: "2018", 
      description: "Recognized for providing excellent technical training to the team members in Q4, 2018. Awarded for knowledge sharing and team development initiatives.",
      achievement: "Conducted comprehensive technical training sessions that enhanced team capabilities and improved project delivery efficiency.",
      icon: "👏"
    }
  ]

  return (
    <Section id="awards" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Awards & Recognition
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Recognition for outstanding contributions and technical excellence
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:gap-10">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl glass-effect p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Award Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg">
                    <span className="text-2xl md:text-3xl">{award.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {award.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-3">
                        <span className="flex items-center gap-1 text-sm">
                          <FiAward className="w-4 h-4" />
                          {award.organization}
                        </span>
                        <span className="flex items-center gap-1 text-sm">
                          <FiCalendar className="w-4 h-4" />
                          {award.year}
                        </span>
                      </div>
                    </div>
                    <div className="sm:mt-0 mt-2">
                      <span className="inline-block bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">
                        Award Winner
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    {award.description}
                  </p>

                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 border-l-4 border-primary-500">
                    <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2 text-sm md:text-base">
                      Key Achievement:
                    </h4>
                    <p className="text-primary-800 dark:text-primary-200 text-sm md:text-base">
                      {award.achievement}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Recognition */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Throughout my 9+ year career, I&apos;ve consistently delivered high-quality solutions, 
              mentored team members, and contributed to successful project outcomes across 
              various organizations and technologies.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}