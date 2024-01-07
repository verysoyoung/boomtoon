import Slider from '@/components/Slider'
import MainTabs from '@/components/MainTabs'
import SubTabs from '@/components/SubTabs'

export default function Page({ params }: { params: { menu: string } }) {
  const { menu } = params
  return (
    <div>
      <MainTabs currentMenu={menu} />
      <Slider />
      <SubTabs />
    </div>
  )
}
