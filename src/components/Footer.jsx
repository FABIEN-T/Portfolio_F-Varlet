import linkedinPng from '../images/social-media/linkedin.png'
import gitPng from '../images/social-media/linkedin.png'

export default function Footer() {
  return (
    <footer className="bg-blue-900 mt-auto py-12 px-8 md:py-10 lg:py-8">
      <div className="max-w-4xl mx-auto flex items-center flex-col lg:flex-row lg:justify-between">
        <p className="text-white underline">provi@gmail.com</p>

        <div className="flex my-4 lg:order-3">
          <a href="https://www.linkedin.com/in/fabien-varlet/" className="p-2">
            <img
              width="17"
              height="17"
              src={linkedinPng}
              alt="Visiter ma page linkedin"
              className="h-4 w-4"
            />
          </a>

          <a href="https://github.com/FABIEN-T" className="p-2">
            <img
              width="17"
              height="17"
              src={gitPng}
              alt="Visiter ma page Github"
              className="h-4 w-4"
            />
          </a>
        </div>

        <a href="#" className="font-lora text-white text-base">
          © Copyright Fabien Varlet. Tous droits réservés.
        </a>
      </div>
    </footer>
  )
}
