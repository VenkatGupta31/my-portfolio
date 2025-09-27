import React from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`section-padding animate-fade-in ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}