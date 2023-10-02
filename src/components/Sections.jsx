import SectionPortrait from './SectionPortrait'
import SectionSkills from './SectionSkills'
import SectionProjects from './SectionProjects'
// import SectionContact from './SectionContact'

export default function Sections() {
  return (
    <main className="w-full h-fit">
      <SectionPortrait />
      <SectionSkills />
      <SectionProjects />
      {/* <SectionContact /> */}
    </main>
  )
}
