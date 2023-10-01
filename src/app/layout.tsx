import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from './provider'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600']
})

export const metadata: Metadata = {
  title: 'Won Games | Your next adventure is here.',
  description: 'The best game stores in the world!'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
