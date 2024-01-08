import MainTabs from '@/components/molecules/MainTabs'
import Slider from '@/components/molecules/Slider'
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
