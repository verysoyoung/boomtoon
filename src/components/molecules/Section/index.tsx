'use client'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import ImageList from '../ImageList'

export default function Section() {
  const data = require('/public/data/mock/main.json')
  return (
    <Wrap>
      <SectionHeader />
      <ImageList data={data.content} />
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 30px 8px 0;
`
