import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'Tailwind Dashboard UI',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  )
}
