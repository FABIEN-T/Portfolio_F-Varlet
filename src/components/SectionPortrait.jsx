import photoProfil from '../images/Photo_FV_300x300px.png'
import arrowDownload from '../images/arrowDownload.svg'
import linkedinSvg from '../images/linkedin-bg-black.svg'
import gitSvg from '../images/github.svg'

export default function SectionPortrait() {
  return (
    <section className="relative flex flex-col items-center mb-20 px-6 text-center font-regular pt-24 sm:mb-20 sm:pt-32">
      {/* Portrait */}
      <div className="mx-auto w-44 relative mb-10 ring-2 ring-rose-600 ring-offset-2 rounded-full md:ring-[3px] md:ring-offset-[3px] md:w-60">
        <img src={photoProfil} alt="portrait de Fabien Varlet" />
      </div>
      <p className="mb-8 sm:font-light sm:text-lg md:text-3xl">
        Bonjour, je suis <strong>Fabien Varlet</strong>
      </p>
      <h1 className="text-4xl max-w-xs mx-auto mb-1 sm:font-light sm:text-5xl sm:max-w-lg md:text-6xl md:max-w-3xl md:mb-2">
        Développeur <span className="italic">Frontend</span>
      </h1>
      <h1 className="text-2xl mb-12 max-w-xs mx-auto sm:text-3xl sm:font-light sm:mb-14 sm:max-w-md md:text-3xl md:max-w-xl">
        Javascript - <span className="italic">REACT</span>
        <span className="text-rose-600">.</span>
      </h1>
      <p className="block text-sm max-w-xs -mb-4 sm:font-light sm:text-lg sm:mb-14 sm:max-w-md md:text-xl md:max-w-xl">
        Après 25 ans dans la conduite de projets audiovisuels, je vous propose
        mes nouvelles compétences de développeur. Enthousiaste, créatif,
        consciencieux et persévérant, je souhaite m’investir dans les projets de
        votre entreprise.
      </p>

      <div className="flex mt-16 -mb-8 space-x-2 sm:mt-0">
        <a href="https://www.linkedin.com/in/fabien-varlet/" className="p-2">
          <img
            width="17"
            height="17"
            src={linkedinSvg}
            alt="Visiter ma page linkedin"
            className="h-12 w-12 rounded-full sm:h-16 sm:w-16 hover:bg-myBlue40 hover:animate-pulse"
            // className="h-12 w-12 rounded-full sm:h-16 sm:w-16 hover:bg-rose-700"
          />
        </a>

        <a href="https://github.com/FABIEN-T" className="p-2">
          <img
            width="17"
            height="17"
            src={gitSvg}
            alt="Visiter ma page Github"
            className="h-12 w-12 rounded-full sm:h-16 sm:w-16 hover:bg-myBlue40 hover:animate-pulse"
          />
        </a>
      </div>

      <div id="cv" className="pt-20">
        {/* Bouton "Télécharger mon CV" */}
        <a
          href="/cv/Fabien VARLET_CV.pdf"
          className="group text-xs bg-myBlue text-white inline-flex max-w-260 mx-auto items-center py-4 px-6 hover:bg-rose-700 sm:text-sm md:text-base mb:px-10"
          // download
          target='_blank'
        >
          Téléchargez mon CV
          <img
            // width="20"
            // height="20"
            className="ml-4 h-4 -mt-0.5 group-hover:translate-y-0.5 duration-200 md:h-5 md:-mt-0.5"
            src={arrowDownload}
            alt=""
          />
        </a>
      </div>
    </section>
  )
}
