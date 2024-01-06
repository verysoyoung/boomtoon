import Image from 'next/image'
import styled from 'styled-components'

interface NavButtonProps {
  imgUrl: string
  alt: string
}

export default function NavButton({ imgUrl, alt }: NavButtonProps) {
  return (
    <Wrap>
      <Image src={imgUrl} alt={alt} width={22} height={22} />
    </Wrap>
  )
}

const Wrap = styled.span`
  cursor: pointer;
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`
