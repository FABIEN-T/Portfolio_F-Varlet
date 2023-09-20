import SectionPortrait from './SectionPortrait'
import SectionSkills from './SectionSkills'
import SectionProjects from './SectionProjects'

export default function Sections() {
  return (
    <main className="w-full h-fit">
      <SectionPortrait />
      <SectionSkills />
      {/* <SectionProjects /> */}
    </main>
  )
}
