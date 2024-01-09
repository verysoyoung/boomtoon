'use client'
import Image from 'next/image'
import styled from 'styled-components'
import { logoIconList } from './logoIconList'
import NavButton from '../../Atom/NavButton'
import { theme } from '@/styles/theme'
import TopBar from '@/components/Atom/TopBar'
import Link from 'next/link'

export default function Navigation() {
  return (
    <Wrap>
      <TopBar />
      <NavWrap>
        <Link href={'/'}>
          <LogoImage
            src="https://www.boomtoon.com/images/nav/ic-pc-nav-home.svg"
            alt="Boomtoon Logo Image"
            width="22"
            height="32"
          />
        </Link>
        <NavButtonWrap>
          {logoIconList.map(({ imgUrl, alt }) => {
            return <NavButton key={imgUrl} imgUrl={imgUrl} alt={alt} />
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
  height: 67px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoImage = styled(Image)`
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
`

const Wrap = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: ${theme.layout.zIndex1};
  background-color: #ffffff;
  border-bottom: 1px solid #dddddd;
`
