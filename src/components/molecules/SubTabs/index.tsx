'use client'
import styled, { css } from 'styled-components'
import { subTabList } from './subTabList'
import { theme } from '@/styles/theme'

interface SubTabsProps {
  onChangeTab: (value: string) => void
  tabValue: string
}

export default function SubTabs({ onChangeTab, tabValue }: SubTabsProps) {
  return (
    <Wrap>
      {subTabList.map(({ title, value }) => {
        return (
          <Button
            key={title}
            onClick={() => onChangeTab(value)}
            $isActive={value === tabValue}
          >
            {title}
          </Button>
        )
      })}
    </Wrap>
  )
}

const Button = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  width: 100%;
  padding: 10px 0;
  font-size: 12px;
  color: ${theme.colors.darkGray};
  text-align: center;
  font-weight: 400;
  ${(props) =>
    props.$isActive &&
    css`
      color: #ffffff;
      background-color: ${theme.colors.main};
      font-weight: 700;
      border-radius: 16px;
    `};
  @media (max-width: ${theme.size.mobile}) {
    width: 18%;
    flex: 0 0 auto;
  }
`

const Wrap = styled.ul`
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 98px;
  z-index: ${theme.layout.zIndex1};
  padding: 12px 0;
  @media (max-width: ${theme.size.mobile}) {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: start;
  }
`
