export const squareThumbnail = (thumbnails: ThumbnailObj[]) => {
  return thumbnails.filter(({ type }) => type === 'SQUARE')[0].imagePath
}
