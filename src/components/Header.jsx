import menuSvg from '../images/hero/menu-white.svg'

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
          className="text-md lg:text-xl"
        >
          Fabien{' '}
          <span className="font-bold">
            Varlet
            {/* <span className="text-rose-600">.</span> */}
          </span>
        </a>
        <button
          aria-controls="main-navlist"
          aria-expanded="false"
          id="menu-toggler"
          className="cursor-ponter w-7 md:hidden"
        >
          <img
            width="28"
            height="28"
            src={menuSvg}
            alt="Ouvrir et fermer le menu"
          />
        </button>

        <ul
          id="main-navlist"
          className="hidden bg-myBlue text-gray-50 text-center w-full pt-4 md:w-auto md:block md:pt-0"
        >
          <li className="block py-1 md:inline md-py-0 md:mr-6">
            <a
              href="#cv"
              className="text-sm uppercase font-semibold hover:text-rose-600"
            >
              CV
            </a>
          </li>
          <li className="block py-1 md:inline md-py-0 md:mr-6">
            <a
              href="#competences"
              className="text-sm uppercase font-semibold hover:text-rose-600"
            >
              Compétences
            </a>
          </li>
          <li className="block py-1 md:inline md-py-0 md:mr-6">
            <a
              href="#projets"
              className="text-sm uppercase font-semibold hover:text-rose-600"
            >
              Projets
            </a>
          </li>
          <li className="block py-1 md:inline md-py-0">
            <a
              href="#contact"
              className="text-sm uppercase font-semibold hover:text-rose-600"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
