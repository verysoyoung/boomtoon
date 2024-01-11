'use client'
import styled from 'styled-components'
import { logoList } from './logoList'

export default function FooterLogo() {
  return (
    <>
      {logoList.map(({ imgUrl, alt }) => {
        return <LogoImage key={imgUrl} src={imgUrl} alt={alt} />
      })}
    </>
  )
}

const LogoImage = styled.img`
  cursor: pointer;
`
