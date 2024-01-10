import MainTabs from '@/components/Molecules/MainTabs'
import SliderContents from '@/components/Molecules/SliderContents'
import WeeklyContainer from '@/components/Organisms/WeeklyContainer'

export default function Page({ params }: { params: { menu: string } }) {
  const { menu } = params
  return (
    <div>
      <MainTabs currentMenu={menu} />
      <SliderContents daily={true} />
      <WeeklyContainer />
    </div>
  )
}
