import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import { Providers } from './providers'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600']
})

export const metadata: Metadata = {
  title: 'Won Games | Your next adventure is here.',
  description: 'The best Game Store in the world!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
