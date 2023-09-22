import PropTypes from 'prop-types'
import { useState } from 'react'

export default function MenuList({ id, linkSection, item }) {
  const [setIsOpen] = useState(false)
  return (
    <li
      key={id}
      className="block py-1 md:inline md-py-0 md:mr-6"
      onClick={() => setIsOpen(false)}
    >
      <a
        href={linkSection}
        className="text-sm uppercase font-semibold hover:text-rose-600"
      >
        {item}
      </a>
    </li>
  )
}

MenuList.propTypes = {
  id: PropTypes.string,
  linkSection: PropTypes.string,
  item: PropTypes.string,
}
