import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NIS Gastroenterology Research Topics 2016-2021',
  description: 'Discover unique, unpublished gastroenterology research topics using National Inpatient Sample data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
