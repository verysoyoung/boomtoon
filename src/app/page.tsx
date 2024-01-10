import MainTabs from '@/components/Molecules/MainTabs'
import SliderContents from '@/components/Molecules/SliderContents'

export default function Home() {
  return (
    <main>
      <SliderContents />
      <MainTabs />
      <div style={{ height: '800px' }}></div>
    </main>
  )
}
