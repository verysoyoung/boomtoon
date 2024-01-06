'use client'
import Image from 'next/image'
import styled from 'styled-components'
import { logoIconList } from './logoIconData'
import NavButton from '../atom/NavButton'

export default function Navigation() {
  return (
    <Wrap>
      <NavWrap>
        <LogoImage
          src="https://www.boomtoon.com/images/nav/ic-pc-nav-home.svg"
          alt="Boomtoon Logo Image"
          width="22"
          height="32"
        />
        <NavButtonWrap>
          {logoIconList.map(({ imgUrl, alt }) => {
            return <NavButton imgUrl={imgUrl} alt={alt} />
          })}
        </NavButtonWrap>
      </NavWrap>
    </Wrap>
  )
}

const NavButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
`

const NavWrap = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoImage = styled(Image)`
  cursor: pointer;
`

const Wrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #dddddd;
`
