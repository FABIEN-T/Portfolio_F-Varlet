import PropTypes from 'prop-types'
export default function SkillCard({ id, skill, logoSvg }) {
  return (
    <>
      {/* <img src={lcss} alt="logo lcss" className="h-16" /> */}
      <li
        key={id}
        className="flex flex-col items-center text-sm m-1 p-2 rounded-xl bg-gray-50 "
      >
        <img src={logoSvg} alt={skill} className="h-32  mb-1" />
        <h3 className="text-black  text-lg bg-pink-200">{skill}</h3>
      </li>
    </>
  )
}

SkillCard.propTypes = {
  id: PropTypes.string,
  skill: PropTypes.string,
  logoSvg: PropTypes.string,
}
