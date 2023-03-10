import LenisController from '@/components/Misc/LenisController'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <LenisController>
          {children}  
        </LenisController>
      </body>
    </html>
  )
}
