import PropTypes from 'prop-types'
import ListTags from './ListTags'
import Tags from './Tags'
import tool from '../images/tool.svg'

export default function ProjectCard({
  title,
  description,
  image,
  linkDemo,
  linkGit,
  catCard,
  bgColor,
  tagsBlue,
  tagsRed,
}) {
  // console.log('linkGit', linkGit === '')
  // {
  //   linkGit ? console.log('linkGit ok') : console.log('No')
  // }
  return (
    <div
      className={`max-w-sm mx-auto bg-gray-200 rounded-lg shadow-xl lg:max-w-full`}
    >
      <div className="group relative overflow-hidden rounded-t-lg p-1 mb-2 bg-gray-light lg:mb:8">
        <img
          width="600"
          height="600"
          src={image}
          alt={description}
          className="object-cover rounded-t-lg"
          // className="saturate-50 group-hover:saturate-100"
        />

        <div>
          <div
            className={`absolute z-10 top-0 left-0 w-full h-full ${bgColor} opacity-0 translate-y-full duration-300 group-hover:translate-y-0 group-hover:opacity-100`}
          ></div>

          <div className="absolute z-20 top-0 left-0 w-full h-full flex flex-col pt-14 px-6 translate-y-full duration-300 group-hover:translate-y-0">
            {(catCard === 1 || catCard === 3) && (
              <a href={linkDemo}>
                <h3 className="animate-wiggle mx-auto max-w-fit bg-rose-700 ring-1 ring-white text-white rounded px-3 py-1 md:text-lg lg:text-xl">
                  {catCard === 1 && 'Visiter le site'}
                  {catCard === 3 && 'Lien Figma'}
                </h3>
              </a>
            )}
            {catCard === 4 && (
              <div className="flex flex-col">
                <h3 className="mx-auto max-w-fit italic text-white mb-4  px-3 py-1 md:text-lg lg:text-xl">
                  En construction
                </h3>
                <img
                  width="16"
                  height="16"
                  src={tool}
                  alt="icône de clef à molette"
                  className="h-16 w-16 rotate-90 mx-auto"
                />
              </div>
            )}
            <div className="mt-6 pl-4">
              <ListTags list={tagsRed} />
            </div>
          </div>
        </div>
      </div>
      <div className="group flex flex-col p-2">
        <div>
          <div className="flex flex-row justify-between items-center">
            <p className="font-medium text-xl mb-1 sm:text-2xl">{title}</p>
            {(catCard === 1 || catCard === 2) && (
              <a href={linkGit}>
                <img
                  src="images/logosSkills/github.svg"
                  alt="lien github du projet"
                  className="h-7 -mt-1 hover:bg-white rounded-full"
                />
              </a>
            )}
          </div>

          <p className="text-dark-gray text-xs max-w-xs leading-tight mb-2 sm:text-sm sm:max-w-sm lg:max-w-md">
            {description}
          </p>
        </div>
        <Tags tags={tagsBlue} colorTag={'bg-myBlue'} />
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  linkDemo: PropTypes.string,
  linkGit: PropTypes.string,
  catCard: PropTypes.number,
  bgColor: PropTypes.string,
  colorTag: PropTypes.string,
  tagsBlue: PropTypes.arrayOf(PropTypes.string),
  tagsRed: PropTypes.arrayOf(PropTypes.string),
  offsetY: PropTypes.number,
}
