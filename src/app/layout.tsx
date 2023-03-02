import './globals.css'

export const metadata = {
  title: 'NordUI - Tailwind Powered',
  description: 'NordUI is created to power Tailwind ',
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
