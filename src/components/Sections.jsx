import SectionPortrait from './SectionPortrait'
import SectionSkills from './SectionSkills'
import SectionProjects from './SectionProjects'
import SectionContact from './SectionContact'
// import SectionModal from './modal/SectionModal'

export default function Sections() {
  return (
    <main className="w-full h-fit">
      {/* <SectionModal /> */}
      <SectionPortrait />
      <SectionSkills />
      <SectionProjects />
      <SectionContact />
    </main>
  )
}