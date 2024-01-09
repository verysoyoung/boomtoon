interface ThumbnailObj {
  imagePath: string
  type: 'SQUARE' | 'MAIN'
  length: number
}

interface DailyResponse {
  creators: string
  id: number
  isAdult: boolean
  isComplete: boolean
  orderNo: number
  thumbnails: ThumbnailObj[]
  title: string
  updatedAt: number
  viewCount: number
}
