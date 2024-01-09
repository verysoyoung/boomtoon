import { theme } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'

interface ImageListProps {
  data: DailyResponse[]
}

export default function ImageList({ data }: ImageListProps) {
  const squareThumbnail = (thumbnails: ThumbnailObj[]) => {
    return thumbnails.filter(({ type }) => type === 'SQUARE')[0].imagePath
  }
  return (
    <Wrap>
      {data.map(({ id, thumbnails, title, viewCount, creators }) => {
        return (
          <Item key={id}>
            <Image
              src={squareThumbnail(thumbnails)}
              width={165}
              height={165}
              alt={`${title} thumbnail image`}
            />
            <Title>{title}</Title>
            <TextBottom>
              {viewCount} | <Creator>{creators}</Creator>
            </TextBottom>
          </Item>
        )
      })}
    </Wrap>
  )
}

const Creator = styled.span``

const TextBottom = styled.p`
  color: ${theme.colors.lightGray};
`

const Title = styled.p`
  text-overflow: ellipsis;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  color: ${theme.colors.darkGray};
  font-size: 16px;
  line-height: 1.5;
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(25% - 8px);
  margin: 0 4px 18px;
`

const Wrap = styled.ul`
  z-index: ${theme.layout.zIndex2};
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
`
