import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from './provider'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600']
})

export const metadata: Metadata = {
  title: 'Won Games | Seu próximo jogo está aqui.',
  description: 'Generated by create next app'
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
