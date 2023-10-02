import { useState } from 'react'
import menuSvg from '../images/menu-white.svg'
// import { datasMenu } from '../datas/datasMenu'
// import MenuList from './MenuList'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <>
      <button
        aria-controls="main-navlist"
        aria-expanded="false"
        id="menu-toggler"
        className="w-7 md:hidden"
        onClick={() => setIsOpen(false)}
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
        className="bg-myBlue text-center w-full pt-4 text-white md:w-auto md:block md:pt-0"
        // className="bg-white text-center w-full pt-4 px-0 text-black md:w-auto md:block md:pt-0"
      >
        {/* {datasMenu.map(({ id, item, linkSection }) => (
          <MenuList key={id} id={id} item={item} linkSection={linkSection} />
        ))} */}
        <li
          className="block py-1 md:inline md-py-0 md:mr-6"
          onClick={() => setIsOpen(false)}
        >
          <a
            href="#cv"
            className="text-sm uppercase font-semibold hover:text-rose-600"
          >
            CV
          </a>
        </li>
        <li
          className="block py-1 md:inline md-py-0 md:mr-6"
          onClick={() => setIsOpen(false)}
        >
          <a
            href="#competences"
            className="text-sm uppercase font-semibold hover:text-rose-600"
          >
            Compétences
          </a>
        </li>
        <li
          className="block py-1 md:inline md-py-0 md:mr-6"
          onClick={() => setIsOpen(false)}
        >
          <a
            href="#projets"
            className="text-sm uppercase font-semibold hover:text-rose-600"
          >
            Projets
          </a>
        </li>
        <li
          className="block py-1 md:inline md-py-0 md:mr-6"
          onClick={() => setIsOpen(false)}
        >
          <a
            href="#contact"
            className="text-sm uppercase font-semibold hover:text-rose-600"
          >
            Contactez-moi
          </a>
        </li>
      </ul>
    </>
  ) : (
    <button
      aria-controls="main-navlist"
      aria-expanded="false"
      id="menu-toggler"
      className="w-7 md:hidden"
      onClick={() => setIsOpen(true)}
    >
      <img
        width="28"
        height="28"
        src={menuSvg}
        alt="Ouvrir et fermer le menu"
      />
    </button>
  )
}
