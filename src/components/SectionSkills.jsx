// import { datasSkills } from '../datas/datasSkills.json'
import SkillCard from './SkillCard'
import { datasSkills } from '../datas/datasSkills'
// import ljs from 'images/logosSkills/javascript.svg'

export default function SectionSkills() {
  return (
    <section
      id="competences"
      className="flex flex-col bg-myBlue mb-12 px-4 pt-14 pb-20 sm:mb-14 md:pt-20"
    >
      <h2 className="text-white font-lora relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12 after:absolute after:w-full after:h-2">
        {/* after:bottom-0 after:left-0 after:-z-10 after:bg-rose-600 sm:after:h-5 sm:after:-bottom-2 */}
        Mes Compétences
      </h2>

      <div className="mx-auto">
        {/* <ul className="flex flex-row flex-wrap justify-center max-w-2xl"> */}
        <ul className="grid  mx-auto grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6 lg:max-w-3xl">
          {datasSkills.map(({ id, skill, logoSvg }) => (
            <SkillCard key={id} id={id} skill={skill} logoSvg={logoSvg} />
          ))}
        </ul>
      </div>
    </section>
  )
}
