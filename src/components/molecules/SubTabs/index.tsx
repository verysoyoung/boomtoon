'use client'
import styled from 'styled-components'
import { subTabList } from './subTabList'
import { theme } from '@/styles/theme'

export default function SubTabs({
  onChangeTab,
}: {
  onChangeTab: (value: string) => void
}) {
  return (
    <Wrap>
      {subTabList.map(({ title, value }) => {
        return (
          <Button key={title} onClick={() => onChangeTab(value)}>
            {title}
          </Button>
        )
      })}
    </Wrap>
  )
}

const Button = styled.li`
  cursor: pointer;
  width: 100%;
  padding: 12px 0;
  font-size: 12px;
  line-height: 32px;
  color: ${theme.colors.darkGray};
  text-align: center;
  font-weight: 400;
`

const Wrap = styled.ul`
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 98px;
  z-index: ${theme.layout.zIndex1};
`
