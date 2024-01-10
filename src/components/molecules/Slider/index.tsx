'use client'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider, { Settings } from 'react-slick'
import { SliderArrow } from '@/components/Atom/SliderArrow'
import { useState } from 'react'
import { imageList } from './imageList'

export default function SliderContents() {
  const [slideState, setSlideState] = useState({
    current: 0,
    next: 0,
  })
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 1900,
    cssEase: 'linear',
    beforeChange: (current: number, next: number) =>
      setSlideState({ current, next }),
    nextArrow: <SliderArrow.NextArrow total={imageList.length} />,
    prevArrow: <SliderArrow.PrevArrow next={slideState.next + 1} />,
  }
  return (
    <Wrap>
      <Slider {...settings}>
        {imageList.map(({ imgUrl, alt }) => {
          return (
            <ImgCard key={imgUrl}>
              <img src={imgUrl} alt={alt} />
            </ImgCard>
          )
        })}
      </Slider>
    </Wrap>
  )
}

const ImgCard = styled.div`
  width: 100%;
  > img {
    width: 100%;
    height: auto;
  }
`

const Wrap = styled.div``
