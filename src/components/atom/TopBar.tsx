'use client'
import { theme } from '@/styles/theme'
import styled from 'styled-components'

export default function TopBar() {
  return <Bar />
}

const Bar = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${theme.colors.main};
`
