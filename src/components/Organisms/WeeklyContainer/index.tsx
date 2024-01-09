'use client'
import { useState } from 'react'
import styled from 'styled-components'
import SubTabs from '../../Molecules/SubTabs'
import ImageList from '@/components/Molecules/ImageList'
import { theme } from '@/styles/theme'

export default function WeeklyContainer() {
  const [tabValue, setTabValue] = useState<string>('mon')
  const data = require(`/public/data/mock/daily/${tabValue}.json`)
  const handleChangeTab = (value: string) => {
    setTabValue(value)
  }
  return (
    <Wrap>
      <SubTabs onChangeTab={handleChangeTab} />
      <ImageList data={data.content} />
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
  background-color: #ffffff;
  z-index: ${theme.layout.zIndex2};
`
