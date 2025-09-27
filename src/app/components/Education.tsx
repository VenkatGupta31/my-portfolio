import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'
import Section from './ui/Section'

export default function Education() {
  const education = [
    {
      degree: "M.Tech. in Software Systems",
      school: "BITS Pilani",
      period: "Dec 2014 – Dec 2016",
      location: "Rajasthan, India",
      score: "CGPA 8.4/10",
      courses: [
        "Object Oriented Programming",
        "Data Structures & Algorithms", 
        "RDBMS",
        "Operating Systems",
        "Android Programming",
        "Data Warehouse & Mining",
        "Information Retrieval"
      ],
      icon: "🎓"
    },
    {
      degree: "B.Tech. in Electronics & Instrumentation Engineering",
      school: "CVR College of Engineering",
      period: "Jul 2007 – May 2011",
      location: "Hyderabad, Telangana",
      score: "Aggregate of 71.89%",
      courses: [],
      icon: "⚡"
    },
    {
      degree: "Intermediate in Mathematics, Physics, Chemistry",
      school: "Narayana Jr College",
      period: "Jul 2005 – Mar 2007",
      location: "Hyderabad, Telangana", 
      score: "Aggregate of 94.30%",
      courses: [],
      icon: "🔬"
    }
  ]

  return (
    <Section id="education" className="bg-white dark:bg-gray-900">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Strong academic foundation in software systems and engineering principles
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 lg:gap-12">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl glass-effect p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                {/* Icon and Date */}
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                    <div className="text-3xl">{edu.icon}</div>
                    <div className="lg:mt-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <FiCalendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-1">
                        <FiAward className="w-4 h-4" />
                        {edu.school}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                        <FiMapPin className="w-3 h-3" />
                        {edu.location}
                      </div>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-semibold">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  {edu.courses.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">
                        Key Courses:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs md:text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}