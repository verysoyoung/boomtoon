'use client'

import styled, { css } from 'styled-components'
import { menuList } from './menuList'
import { theme } from '@/styles/theme'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function MainTabs({ currentMenu }: { currentMenu?: string }) {
  const pathname = usePathname()
  return (
    <Wrap>
      {menuList.map(({ title, value }) => {
        return (
          <Button key={title} $isActive={currentMenu === value}>
            <Link href={`/home/${value}`}>{title}</Link>
          </Button>
        )
      })}
    </Wrap>
  )
}

const Button = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  width: 25%;
  color: ${theme.colors.gray};
  line-height: 48px;
  font-size: 18px;
  text-overflow: ellipsis;
  text-align: center;
  font-weight: 400;
  white-space: nowrap;
  ${(props) =>
    props.$isActive &&
    css`
      color: ${theme.colors.main};
      font-weight: 700;
      border-bottom: 1px solid ${theme.colors.main};
    `}
  a {
    display: block;
  }
`
const Wrap = styled.ul`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
