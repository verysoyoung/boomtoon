'use client'
import FooterLogo from '@/components/Molecules/FooterLogo'
import { theme } from '@/styles/theme'
import styled from 'styled-components'
export default function Footer() {
  return (
    <Wrap>
      <TopWrap>
        <TextWrap>
          <div>ข้อตกลงการใช้งาน</div>
          <div>นโยบายความเป็นส่วนตัว</div>
        </TextWrap>
        <LogoWrap>
          <FooterLogo />
        </LogoWrap>
      </TopWrap>
      <BottomWrap>
        <BottomFirst>
          <Logo
            src="https://www.boomtoon.com/images/nav/ic-nav-logo-g.png"
            alt="boomtoon logo"
          />
          <span>KIDARISTUDIO INC.</span>
        </BottomFirst>
        <BottomSecond>
          <span>ⓒ 2021 KIDARISTUDIO INC. All rights reserved</span>
        </BottomSecond>
      </BottomWrap>
    </Wrap>
  )
}

const BottomSecond = styled.div`
  > span {
    font-size: 10px;
    color: #757575;
  }
`

const BottomWrap = styled.div`
  padding: 26px 16px 52px;
`

const Logo = styled.img`
  width: 120px;
`

const BottomFirst = styled.div`
  cursor: pointer;
  line-height: 1.5;
  display: flex;
  align-items: center;
  > span {
    font-size: 10px;
    font-weight: 700;
    color: #363636;
    padding-left: 5px;
  }
`

const LogoWrap = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;
`

const TextWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 70%;
  height: 80px;
  font-size: 12px;
  color: #363636;
  > div {
    cursor: pointer;
  }
`

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 1px solid ${theme.colors.brightGray};
`

const Wrap = styled.div``
