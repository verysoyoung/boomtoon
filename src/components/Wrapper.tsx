'use client'
import { theme } from '@/styles/theme'
import { ReactNode } from 'react'
import styled from 'styled-components'

export default function Wrapper({ children }: { children: ReactNode }) {
  return <Wrap>{children}</Wrap>
}

const Wrap = styled.div`
  width: 100%;
  max-width: 720px;
  background-color: #ffffff;
  margin: 0 auto;
  z-index: ${theme.layout.zIndex1};
`
