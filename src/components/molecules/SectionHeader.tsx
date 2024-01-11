'use client'
import styled from 'styled-components'

export default function SectionHeader() {
  return (
    <Wrap>
      <Title>เรื่องใหม่มาแรง</Title>
      <MoreButton>
        เพิ่มเติม
        <img
          src="https://www.boomtoon.com/images/common/ic-main-more-b.svg"
          alt="more arrow image"
        />
      </MoreButton>
    </Wrap>
  )
}

const MoreButton = styled.div`
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #363636;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8px 8px 10px;
`
