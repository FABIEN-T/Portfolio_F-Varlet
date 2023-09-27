import linkedinPng from '../images/social-media/linkedin.png'
import gitPng from '../images/social-media/linkedin.png'
import linkedinSvg from '../images/linkedin.svg'
import gitSvg from '../images/github-bg-white.svg'

export default function Footer() {
  return (
    <footer className="bg-myBlue mt-auto py-4 px-8 md:py-6 lg:py-8">
      <div className="max-w-4xl mx-auto flex items-center flex-col ">
        {/* <p className="text-white underline">provi@gmail.com</p> */}

        <div className="flex items-center mb-4 space-x-4">
          {/* <div className="flex my-4 lg:order-3"> */}
          <a href="https://www.linkedin.com/in/fabien-varlet/" className="p-2">
            <img
              width="17"
              height="17"
              src={linkedinSvg}
              alt="Visiter ma page linkedin"
              className="h-8 w-8"
            />
          </a>

          <a href="https://github.com/FABIEN-T" className="p-2">
            <img
              width="17"
              height="17"
              src={gitSvg}
              alt="Visiter ma page Github"
              className="h-10 w-10"
            />
          </a>
        </div>

        <p className="text-white text-light text-xs sm:text-sm">
          © Copyright 2023 - Fabien Varlet
        </p>
      </div>
    </footer>
  )
}
