import MainTabs from '@/components/Molecules/MainTabs'
import Slider from '@/components/Molecules/Slider'
import WeeklyContainer from '@/components/Organisms/WeeklyContainer'

export default function Page({ params }: { params: { menu: string } }) {
  const { menu } = params
  return (
    <div>
      <MainTabs currentMenu={menu} />
      <Slider />
      <WeeklyContainer />
    </div>
  )
}
