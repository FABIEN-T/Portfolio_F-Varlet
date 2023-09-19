import photoProfil from '../images/Photo_FV_300x300px.png'

export default function SectionPortrait() {
  return (
    <div className="relative flex flex-col items-center px-6 text-center font-regular pt-32">
      {/* Portrait */}
      <div className="mx-auto w-44 relative mb-10 md:w-64 ring-2 ring-rose-600 ring-offset-2 rounded-full sm:ring-4 sm:ring-offset-4">
        <img src={photoProfil} alt="portrait de Fabien Varlet" />
      </div>
      <p className="mb-8 sm:font-light sm:text-lg md:text-3xl">
        Bonjour, je suis <strong>Fabien Varlet</strong>
      </p>
      <h1 className="text-4xl max-w-xs mx-auto mb-1 sm:font-light sm:text-5xl sm:max-w-lg md:text-6xl md:max-w-3xl md:mb-4">
        Développeur <span className="italic">Frontend</span>
      </h1>
      <h1 className="text-2xl mb-12 max-w-xs mx-auto sm:text-3xl sm:mb-14 sm:max-w-md md:text-4xl md:max-w-xl">
        Spécialisation <span className="italic">REACT</span>
        <span className="text-rose-600">.</span>
      </h1>
      <p className="block text-sm max-w-xs mb-12 sm:text-lg sm:mb-14 sm:max-w-md md:text-xl md:max-w-xl">
        Après 25 ans dans la conduite de projets audiovisuels, je vous propose
        mes nouvelles compétences de développeur. Enthousiaste, créatif,
        consciencieux et persévérant, je souhaite m’investir dans les projets de
        votre entreprise.
      </p>
      <hr
        style={{
          color: 'green',
          height: 1,
        }}
      />
      {/* group permet de tramsmette le déclenchement du hover sur la flèche em même temps que le bouton
        équivaut à : a:hover img */}
      {/* <a
          className="group text-xs bg-main text-white inline-flex justify-center items-center py-4 px-6 mb-20 hover:bg-main-light duration-200 sm:text-sm md:text-base mb:px-10"
          href="#competences"
        >
          Mes compétences
          <img
            width="14"
            height="15"
            className="ml-4 h-2.5 group-hover:translate-y-0.5 duration-200 md:h-3"
            src="./images/general/arrowDown.png"
            alt=""
          />
        </a> */}

      {/* <img
          width="580"
          height="1255"
          className="absolute h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-50"
          src="./images/hero/decoration.png" alt=""> */}
    </div>
  )
}
