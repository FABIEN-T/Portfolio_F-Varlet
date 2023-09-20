export default function SectionProjects() {
  return (
    <section
      id="projets"
      className="pt-14 pb-20 px-4 sm:pb-28 sm:pt-20 lg:pb-72"
    >
      <p className="italic font-lora text-center text-gray-dark text-sm mb-4 md:text-lg">
        Découvrez mon savoir-faire
      </p>
      <h2
        className="text-main font-lora relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12 after:absolute after:w-full after:h-2 
          
          after:bottom-0 after:left-0 after:-z-10 after:bg-red-light sm:after:h-5 sm:after:-bottom-2"
      >
        Mes Derniers Projets
      </h2>
      <p className="text-xs text-gray-dark leading-5 max-w-xs mx-auto text-center sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        accusamus magni fuga, ratione cumque adipisci veritatis veniam modi.
      </p>
      {/* Grid */}
      <div className="grid grid-cols-1 gap-12 mt-12 max-w-4xl mx-auto md:gap-x-12 md:gap-y-28 md:mt-24 md:grid-cols-2 lg:max-w-5xl">
        <div className="w-full max-w-sm mx-auto cursor-pointer lg:max-w-full">
          <div className="group relative overflow-hidden mb-4 bg-gray-light lg:mb:8">
            <img
              width="490"
              height="549"
              src="./images/mockups/mockup1.png"
              alt="mockup d'un site E-commerce"
            />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
                
                absolute top-0 left-0 w-full h-full bg-main text-white opacity-0 z-10 translate-y-full duration-300
                group-hover:translate-y-0 group-hover:opacity-70
                "
            >
              Visiter le site
            </a>
          </div>
          <div>
            <p className="font-lora text-main font-medium text-xl mb-3 sm:text-2xl">
              Site E-commerce
            </p>
            <p className="text-dark-gray text-xs leading-5 max-w-xs sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              accusamus magni fuga, ratione cumque adipisci veritatis veniam
              modi.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm mx-auto cursor-pointer lg:max-w-full lg:translate-y-40">
          <div className="group relative overflow-hidden mb-4 bg-gray-light lg:mb:8">
            <img
              width="490"
              height="549"
              src="./images/mockups/mockup2.png"
              alt="mockup d'un site E-commerce"
            />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
                
                absolute top-0 left-0 w-full h-full bg-main text-white opacity-0 z-10 translate-y-full duration-300
                group-hover:translate-y-0 group-hover:opacity-70
                "
            >
              Visiter le site
            </a>
          </div>
          <div>
            <p className="font-lora text-main font-medium text-xl mb-3 sm:text-2xl">
              Application Mobile pour la Domotique
            </p>
            <p className="text-dark-gray text-xs leading-5 max-w-xs sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              accusamus magni fuga, ratione cumque adipisci veritatis veniam
              modi.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm mx-auto cursor-pointer lg:max-w-full">
          <div className="group relative overflow-hidden mb-4 bg-gray-light lg:mb:8">
            <img
              width="490"
              height="549"
              src="./images/mockups/mockup3.png"
              alt="mockup d'un site E-commerce"
            />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
                
                absolute top-0 left-0 w-full h-full bg-main text-white opacity-0 z-10 translate-y-full duration-300
                group-hover:translate-y-0 group-hover:opacity-70
                "
            >
              Visiter le site
            </a>
          </div>
          <div>
            <p className="font-lora text-main font-medium text-xl mb-3 sm:text-2xl">
              Site de Constructeur d`&apos;`Immeubles
            </p>
            <p className="text-dark-gray text-xs leading-5 max-w-xs sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              accusamus magni fuga, ratione cumque adipisci veritatis veniam
              modi.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm mx-auto cursor-pointer lg:max-w-full lg:translate-y-40">
          <div className="group relative overflow-hidden mb-4 bg-gray-light lg:mb:8">
            <img
              width="490"
              height="549"
              src="./images/mockups/mockup4.png"
              alt="mockup d'un site E-commerce"
            />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
                
                absolute top-0 left-0 w-full h-full bg-main text-white opacity-0 z-10 translate-y-full duration-300
                group-hover:translate-y-0 group-hover:opacity-70
                "
            >
              Visiter le site
            </a>
          </div>
          <div>
            <p className="font-lora text-main font-medium text-xl mb-3 sm:text-2xl">
              Application pour Montage Vidéo
            </p>
            <p className="text-dark-gray text-xs leading-5 max-w-xs sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              accusamus magni fuga, ratione cumque adipisci veritatis veniam
              modi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
