export default function SectionProjects() {
  return (
    <section
      id="projets"
      className="pt-14 pb-20 px-4 sm:pb-28 sm:pt-20 lg:pb-72"
    >
      <h2
        className="text-main relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12 after:absolute after:w-full after:h-2 
          
          after:bottom-0 after:left-0 after:-z-10 after:bg-red-light sm:after:h-5 sm:after:-bottom-2"
      >
        Mes Projets
      </h2>
      <p className="text-xs text-gray-dark leading-5 max-w-xs mx-auto text-center sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        accusamus magni fuga, ratione cumque adipisci veritatis veniam modi.
      </p>
      {/* Grid */}
      <div className="grid grid-cols-1 gap-12 mt-12 max-w-4xl mx-auto  md:gap-x-12 md:gap-y-28 md:mt-24 md:grid-cols-3 lg:max-w-6xl">
        <div className="w-full max-w-sm mx-auto border-2 border-myBlue lg:max-w-full">
          <div className="group relative overflow-hidden mb-4 bg-gray-light lg:mb:8">
            <img
              width="490"
              height="549"
              src="images/mockups/mockup1.png"
              alt="mockup d'un site E-commerce"
            />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
                
                absolute top-0 left-0 w-full h-full bg-black text-white opacity-0 z-10 translate-y-full duration-300 group-hover:opacity-50 group-hover:translate-y-0 
                "
            >
              Visiter le site
            </a>
          </div>
          <div className="p-2">
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
        <div className="w-full max-w-sm mx-auto border-2 border-myBlue lg:max-w-full lg:translate-y-20">
          <div className="group relative overflow-hidden mb-4 bg-gray-light lg:mb:8">
            <img
              width="490"
              height="549"
              src="images/mockups/mockup1.png"
              alt="mockup d'un site E-commerce"
            />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
                
                absolute top-0 left-0 w-full h-full bg-myBlue text-white opacity-0 z-10 translate-y-full duration-300 group-hover:opacity-50 group-hover:translate-y-0 
                "
            >
              Visiter le site
            </a>
          </div>

          <div className="group p-2">
            <div className="flex flex-row justify-between items-center">
              <p className="font-lora text-main font-medium text-xl mb-3 sm:text-2xl">
                Site E-commerce
              </p>
              <a href="#">
                <img
                  src="images/logosSkills/github.svg"
                  alt="lien github du projet"
                  className="h-7"
                />
              </a>
            </div>
            <p className="text-dark-gray text-xs leading-5 max-w-xs sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              accusamus magni fuga, ratione cumque adipisci veritatis veniam
              modi.
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm mx-auto cursor-pointer border-2 border-myBlue lg:max-w-full lg:translate-y-40">
          <div className="group relative overflow-hidden mb-4 bg-gray-light lg:mb:8">
            <img
              width="490"
              height="549"
              src="images/mockups/mockup1.png"
              alt="mockup d'un site E-commerce"
            />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
                
                absolute top-0 left-0 w-full h-full bg-black text-white opacity-0 z-10 translate-y-full duration-300 group-hover:opacity-50 group-hover:translate-y-0 
                "
            >
              Visiter le site
            </a>
          </div>
          <div className="p-2">
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
        <div className="w-full max-w-sm mx-auto cursor-pointer border-2 border-myBlue lg:max-w-full">
          <div className="group relative overflow-hidden mb-4 bg-gray-light lg:mb:8">
            <img
              width="490"
              height="549"
              src="images/mockups/mockup1.png"
              alt="mockup d'un site E-commerce"
            />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
                
                absolute top-0 left-0 w-full h-full bg-black text-white opacity-0 z-10 translate-y-full duration-300 group-hover:opacity-50 group-hover:translate-y-0 
                "
            >
              Visiter le site
            </a>
          </div>
          <div className="p-2">
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
        <div className="w-full max-w-sm mx-auto cursor-pointer border-2 border-myBlue lg:max-w-full lg:translate-y-20">
          <div className="group relative overflow-hidden mb-4 bg-gray-light lg:mb:8">
            <img
              width="490"
              height="549"
              src="images/mockups/mockup1.png"
              alt="mockup d'un site E-commerce"
            />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
                
                absolute top-0 left-0 w-full h-full bg-black text-white opacity-0 z-10 translate-y-full duration-300 group-hover:opacity-50 group-hover:translate-y-0 
                "
            >
              Visiter le site
            </a>
          </div>
          <div className="p-2">
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
        <div className="w-full max-w-sm mx-auto cursor-pointer border-2 border-myBlue lg:max-w-full lg:translate-y-40">
          <div className="group relative overflow-hidden mb-4 bg-gray-light lg:mb:8">
            <img
              width="490"
              height="549"
              src="images/mockups/mockup1.png"
              alt="mockup d'un site E-commerce"
            />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
                
                absolute top-0 left-0 w-full h-full bg-black text-white opacity-0 z-10 translate-y-full duration-300 group-hover:opacity-50 group-hover:translate-y-0 
                "
            >
              Visiter le site
            </a>
          </div>
          <div className="p-2">
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
      </div>
    </section>
  )
}
