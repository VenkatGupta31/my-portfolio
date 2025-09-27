'use client'

import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg glass-effect">
        <FiSun className="w-5 h-5 text-gray-600" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-lg glass-effect hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
      ) : (
        <FiSun className="w-5 h-5 text-gray-400 group-hover:text-white" />
      )}
    </button>
  )
}