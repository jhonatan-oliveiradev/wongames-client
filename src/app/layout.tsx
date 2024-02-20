import StyledComponentsRegistry from '@/lib/registry'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import { Providers } from './providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600']
})

export const metadata: Metadata = {
  title: 'Won Games',
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
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
