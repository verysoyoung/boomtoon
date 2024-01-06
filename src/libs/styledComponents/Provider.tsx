'use client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/styles/GlobleStyle'
import { theme } from '@/styles/theme'
import StyledComponentsRegistry from './Registry'

const StyledComponentsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

export default StyledComponentsProvider
