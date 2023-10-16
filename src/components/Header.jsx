// import menuSvg from '../images/hero/menu-white.svg'
import Menu from './Menu'

export default function Header() {
  return (
    // Navigation
    <nav className="font-light bg-myBlue text-gray-50 z-50 fixed top-0 w-full shadow">
      <div
        id="main-nav"
        className="max-w-3xl mx-auto p-4 flex items-center justify-between flex-wrap md:p-5"
      >
        <a
          href="#top"
          aria-label="Accueil du portfolio"
          className="text-md font-medium lg:text-xl"
        >
          Fabien {/* <span className="font-medium"> */}
          Varlet
          {/* <span className="text-rose-600">.</span> */}
          {/* </span> */}
        </a>
        <Menu />

        <ul
          id="main-navlist"
          className="hidden bg-myBlue text-gray-50 text-center w-full pt-4 md:w-auto md:block md:pt-0"
        >
          <li className="block py-1 md:inline md-py-0 md:mr-6">
            <a
              href="#cv"
              className="text-md uppercase font-bold hover:text-rose-600"
            >
              CV
            </a>
          </li>
          <li className="block py-1 md:inline md-py-0 md:mr-6">
            <a
              href="#competences"
              className="text-md uppercase font-bold hover:text-rose-600"
            >
              Compétences
            </a>
          </li>
          <li className="block py-1 md:inline md-py-0 md:mr-6">
            <a
              href="#projets"
              className="text-md uppercase font-bold hover:text-rose-600"
            >
              Projets
            </a>
          </li>
          <li className="block py-1 md:inline md-py-0">
            <a
              // href="mailto:fabien.varlet@live.fr"
              href="#contact"
              className="text-md uppercase font-bold hover:text-rose-600"
            >
              Contactez-moi
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
