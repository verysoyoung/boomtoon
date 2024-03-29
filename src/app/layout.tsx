import type { Metadata } from 'next'
import StyledComponentsProvider from '@/libs/styledComponents/Provider'
import Navigation from '@/components/Molecules/Navigation'
import Wrapper from '@/components/Wrapper'

export const metadata: Metadata = {
  title: 'BOOMTOON - อ่านการ์ตูน BL ออนไลน์ สายวายห้ามพลาด',
  description: 'อ่านการ์ตูน BL ออนไลน์ สายวายห้ามพลาด',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsProvider>
          <Navigation />
          <Wrapper>{children}</Wrapper>
        </StyledComponentsProvider>
      </body>
    </html>
  )
}
