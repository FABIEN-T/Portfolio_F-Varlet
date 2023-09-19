// import { datasSkills } from '../datas/datasSkills.json'
import SkillCard from './SkillCard'
import { datasSkills } from '../datas/datasSkills'
// import ljs from 'images/logosSkills/javascript.svg'

export default function SectionSkills() {
  // const mySkills = [
  //   {
  //     id: 'logoHtml',
  //     skill: 'HTML',
  //     logoSvg: 'images/logosSkills/html5.svg',
  //   },
  //   {
  //     id: 'logoCss',
  //     skill: 'CSS',
  //     logoSvg: 'images/logosSkills/css3.svg',
  //   },
  //   {
  //     id: 'logoJs',
  //     skill: 'Javascript',
  //     logoSvg: 'images/logosSkills/javascript.svg',
  //   },
  //   {
  //     id: 'logoReact',
  //     skill: 'React',
  //     logoSvg: 'images/logosSkills/react.svg',
  //   },
  //   {
  //     id: 'logoReactRouter',
  //     skill: 'React - Router',
  //     logoSvg: 'images/logosSkills/react-router.svg',
  //   },
  //   {
  //     id: 'logoRedux',
  //     skill: 'Redux',
  //     logoSvg: 'images/logosSkills/redux.svg',
  //   },
  //   {
  //     id: 'logoSass',
  //     skill: 'Sass',
  //     logoSvg: 'images/logosSkills/sass.svg',
  //   },
  //   {
  //     id: 'logoTailwind',
  //     skill: 'Tailwind CSS',
  //     logoSvg: 'images/logosSkills/tailwind-css.svg',
  //   },
  //   // {
  //   //   id: 'logoStyled',
  //   //   skill: 'Styled-Components',
  //   //   logoSvg: 'images/logosSkills/styled-components.svg',
  //   // },
  //   {
  //     id: 'logoJest',
  //     skill: 'Jest',
  //     logoSvg: 'images/logosSkills/jest.svg',
  //   },
  //   {
  //     id: 'logoTesting',
  //     skill: 'Testing Library',
  //     logoSvg: 'images/logosSkills/testing-library-red.svg',
  //   },
  //   {
  //     id: 'logoGit',
  //     skill: 'Github',
  //     logoSvg: 'images/logosSkills/github.svg',
  //   },
  // ]
  // mySkills.map(({ id, skill, logoSvg }) =>
  //   console.log('SkillCard', id, skill, logoSvg),
  // )
  return (
    <section
      id="competences"
      className="bg-myBlue mb-12 px-4 pt-14 pb-20 sm:mb-14 md:pt-20"
    >
      {/* <p className="italic font-lora text-center text-gray-light text-sm mb-4 md:text-lg">
        Voici mes technologies préférées
      </p> */}
      {/* w-fit permet au soulignement de prendre la largeur du texte */}
      <h2 className="text-white font-lora relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12 after:absolute after:w-full after:h-2">
        {/* after:bottom-0 after:left-0 after:-z-10 after:bg-rose-600 sm:after:h-5 sm:after:-bottom-2 */}
        Mes Compétences
      </h2>
      {/* <p className="text-xs text-gray-light leading-5 max-w-xs mx-auto text-center mb-16 sm:text-sm sm:mb-6 sm:leading-7 sm:max-w-sm lg:max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        accusamus magni fuga, ratione cumque adipisci veritatis veniam modi.
      </p> */}
      {/* <img src={ljs} alt="logo ljs" className="h-16" /> */}
      <div className="">
        <ul className="flex flex-row flex-wrap justify-center">
          {datasSkills.map(({ id, skill, logoSvg }) => (
            <SkillCard key={id} id={id} skill={skill} logoSvg={logoSvg} />
          ))}
        </ul>
      </div>

      {/* <div className="grid max-w-xs mx-auto grid-cols-2 sm:grid-cols-3 sm:max-w-md md:py-8 lg:flex lg:justify-center lg:max-w-none lg:items-center">
        <div className="text-white flex justify-center items-center flex-col flex-nowrap p-2 lg:mx-6">
          <img
            width="56"
            height="56"
            src="../images/skills/JS.png"
            alt="logo de Javascript"
            className="h-10 mb-4 lg:h-12 xl:h-14"
          />
          <p className="font-lora text-xl md:text-2xl">Javascript</p>
          <p className="italic text-gray-light">9 ans</p>
        </div>

        <div className="text-white flex justify-center items-center flex-col p-4 lg:mx-6">
          <img
            width="63"
            height="57"
            className="h-10 mb-4 lg:h-12 xl:h-14"
            src="./images/skills/React.png"
            alt="logo de React"
          />

          <p className="font-lora text-xl md:text-2xl">React</p>
          <p className="italic text-gray-light">5 ans</p>
        </div>

        <div className="text-white flex justify-center items-center flex-col p-4 lg:mx-6">
          <img
            width="45"
            height="56"
            className="h-10 mb-4 lg:h-12 xl:h-14"
            src="./images/skills/Flutter.png"
            alt="logo de Flutter"
          />

          <p className="font-lora text-xl md:text-2xl">Flutter</p>
          <p className="italic text-gray-light">3 ans</p>
        </div>

        <div className="text-white flex justify-center items-center flex-col p-4 lg:mx-6">
          <img
            width="75"
            height="57"
            className="h-10 mb-4 lg:h-12 xl:h-14"
            src="./images/skills/Sass.png"
            alt="logo de Sass"
          />

          <p className="font-lora text-xl md:text-2xl">Sass</p>
          <p className="italic text-gray-light">6 ans</p>
        </div>

        <div className="text-white flex justify-center items-center flex-col p-4 lg:mx-6">
          <img
            width="50"
            height="57"
            className="h-10 mb-4 lg:h-12 xl:h-14"
            src="./images/skills/Node.png"
            alt="logo de Node"
          />

          <p className="font-lora text-xl md:text-2xl">Node</p>
          <p className="italic text-gray-light">5 ans</p>
        </div>

        <div className="text-white flex justify-center items-center flex-col p-4 lg:mx-6">
          <img
            width="56"
            height="56"
            className="h-10 mb-4 lg:h-12 xl:h-14"
            src="./images/skills/Mongo.png"
            alt="logo de MongoDB"
          />

          <p className="font-lora text-xl md:text-2xl">Mongo</p>
          <p className="italic text-gray-light">5 ans</p>
        </div>
      </div> */}
    </section>
  )
}
