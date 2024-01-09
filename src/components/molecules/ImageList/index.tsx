import { theme } from '@/styles/theme'
import { compact } from '@/utils/compactNumber'
import { squareThumbnail } from '@/utils/squareThumbnail'
import styled from 'styled-components'

interface ImageListProps {
  data: DailyResponse[]
}

export default function ImageList({ data }: ImageListProps) {
  return (
    <Wrap>
      {data.map(({ id, thumbnails, title, viewCount, creators }) => {
        return (
          <Item key={id}>
            <ImageWrap>
              <Img
                src={squareThumbnail(thumbnails)}
                alt={`${title} thumbnail image`}
              />
            </ImageWrap>
            <TextWrap>
              <Title>{title}</Title>
              <TextBottom>
                <ViewLogoTextWrap>
                  <img
                    src="https://www.boomtoon.com/images/common/ic-comm-view.svg"
                    alt="view logo image"
                  />
                </ViewLogoTextWrap>
                {compact(viewCount)} | <Creator>{creators}</Creator>
              </TextBottom>
            </TextWrap>
          </Item>
        )
      })}
    </Wrap>
  )
}

const Creator = styled.span``

const ViewLogoTextWrap = styled.div`
  display: inline-block;
  position: relative;
  height: 16px;
  width: 16px;
  margin-right: 3px;
  > img {
    position: absolute;
    width: 100%;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const TextBottom = styled.div`
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${theme.colors.lightGray};
  font-size: 12px;
  line-height: 14px;
`

const Title = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 400;
  color: ${theme.colors.darkGray};
  font-size: 16px;
`

const TextWrap = styled.div`
  margin-top: 10px;
`

const Img = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
`

const Item = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: calc(25% - 8px);
  margin: 0 4px 18px;
`

const Wrap = styled.ul`
  z-index: ${theme.layout.zIndex2};
  display: flex;
  flex-flow: wrap;
  padding: 0 16px;
`
