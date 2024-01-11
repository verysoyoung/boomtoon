import ImageContent from '@/components/Atom/ImageContent'
import MainTabs from '@/components/Molecules/MainTabs'
import Section from '@/components/Molecules/Section'
import SliderContents from '@/components/Molecules/SliderContents'
import Footer from '@/components/Organisms/Footer'

export default function Home() {
  return (
    <main>
      <SliderContents />
      <MainTabs main={true} />
      <Section />
      <ImageContent />
      <Footer />
    </main>
  )
}
