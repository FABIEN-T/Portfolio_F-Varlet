import linkedinSvg from '../images/linkedin.svg'
import gitSvg from '../images/github-bg-white.svg'

export default function Footer() {
  return (
    <footer className="bg-myBlue mt-auto py-6 px-8 md:py-6 lg:py-8">
      {/* <div className="flex flex-col max-w-4xl mx-auto items-center  md:flex-row md:justify-center"> */}
      <div className="flex flex-col max-w-4xl mx-auto items-center">
        {/* <a
          href="#contact"
          className="text-white text-xs font-semi-bold underline  sm:text-sm hover:animate-pulse"
        >
          Contactez-moi
        </a> */}
        {/* <div className="flex items-center mb-4 space-x-4"> */}
        {/* <div className="flex items-center my-2 md:order-3"> */}
        <div className="flex items-center my-2">
          <a href="https://www.linkedin.com/in/fabien-varlet/" className="p-2">
            <img
              width="17"
              height="17"
              src={linkedinSvg}
              alt="Visiter ma page linkedin"
              className="h-6 w-6 hover:animate-pulse "
            />
          </a>

          <a href="https://github.com/FABIEN-T" className="p-2">
            <img
              width="17"
              height="17"
              src={gitSvg}
              alt="Visiter ma page Github"
              className="h-8 w-8 hover:animate-pulse "
            />
          </a>
        </div>

        <p className="text-white font-semi-bold text-xs sm:text-sm">
          © Copyright 2023 - Fabien Varlet
        </p>
      </div>
    </footer>
  )
}
