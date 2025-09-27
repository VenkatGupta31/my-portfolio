import type { Metadata } from 'next'
import { Providers } from '../app/providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gundla Venkateshwarlu - Full Stack Developer',
  description: 'Passionate Full Stack Web developer with over 9+ years of experience building high-quality web applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}