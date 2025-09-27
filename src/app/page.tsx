import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Awards from './components/Awards'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Awards />
      <Contact />
    </main>
  )
}