import LenisController from '@/components/Misc/LenisController'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head />
      <body>
        <LenisController>
          {children}  
        </LenisController>
      </body>
    </html>
  )
}
