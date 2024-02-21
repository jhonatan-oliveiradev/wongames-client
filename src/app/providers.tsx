'use client'

import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </ThemeProvider>
    </>
  )
}
