'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { theme } from '@/styles/theme'
import styled, { css } from 'styled-components'
import { CustomArrowProps } from 'react-slick'

interface ArrowProps extends CustomArrowProps {
  next?: number
  total?: number
}

const PrevArrow = (props: ArrowProps) => {
  return (
    <Wrap $right={50} onClick={props.onClick}>
      <img
        src="https://www.boomtoon.com/images/common/group-20.webp"
        alt="prev arrow image"
      />
      <State>{props.next}</State>
    </Wrap>
  )
}

const NextArrow = (props: ArrowProps) => {
  return (
    <Wrap $right={10} $nextArrow={true} onClick={props.onClick}>
      <State>
        <Slash>/</Slash> {props.total}
      </State>
      <img
        src="https://www.boomtoon.com/images/common/group-20-copy.webp"
        alt="next arrow image"
      />
    </Wrap>
  )
}

export const SliderArrow = {
  NextArrow,
  PrevArrow,
}

const Slash = styled.span`
  position: absolute;
  left: -6px;
`

const State = styled.span`
  font-size: 10px;
  position: relative;
`

const Wrap = styled.div<{ $right: number; $nextArrow?: boolean }>`
  cursor: pointer;
  z-index: ${theme.layout.zIndex1};
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  position: absolute;
  bottom: 20px;
  right: ${(props) => `${props.$right}px`};
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px 0 0 14px;
  > img {
    opacity: 0.5;
    padding-right: 15px;
  }
  ${(props) =>
    props.$nextArrow &&
    css`
      border-radius: 0 14px 14px 0;
      > img {
        padding-right: 0;
        padding-left: 15px;
      }
    `}
  &:hover {
    > img {
      opacity: 1;
    }
  }
`
