import PropTypes from 'prop-types'
import Tags from './Tags'

export default function ProjectCard({
  title,
  description,
  image,
  linkDemo,
  linkGit,
  linkDemoColor,
  tags,
  offsetY,
}) {
  console.log(offsetY)
  return (
    <div
      className={`max-w-sm mx-auto bg-gray-100 rounded shadow-xl lg:max-w-full lg:translate-y-${offsetY}`}
    >
      <div className="group relative overflow-hidden mb-2 bg-gray-light lg:mb:8">
        <img
          width="600"
          height="800"
          src={image}
          alt={description}
          className="object-cover group-hover:blur-sm"
        />
        {/* <div
          className={`${linkDemoColor} flex justify-center items-center font-semibold sm:text-lg lg:text-2xl 
        absolute top-0 left-0 w-full h-full text-gray-100 opacity-0 z-10 translate-y-full duration-300 group-hover:translate-y-0`}
        > */}
        <a
          href={linkDemo}
          className={`${linkDemoColor} flex justify-center items-center font-semibold sm:text-lg lg:text-2xl 
            absolute top-0 left-0 w-full h-full text-gray-100 opacity-0 z-10 translate-y-full duration-300 group-hover:translate-y-0 group-hover:opacity-60 `}
        ></a>
        <p
          className="text-white flex justify-center items-center font-semibold sm:text-lg lg:text-2xl 
            absolute top-0 left-0 w-full h-full z-10 translate-y-full duration-300 group-hover:translate-y-0"
        >
          Visiter le site
        </p>
        {/* </div> */}
      </div>
      <div className="group flex flex-col justify-between p-2">
        <div>
          <div className="flex flex-row justify-between items-center">
            <p className="font-lora text-main font-medium text-xl mb-1 sm:text-2xl">
              {title}
            </p>
            <a href={linkGit}>
              <img
                src="images/logosSkills/github.svg"
                alt="lien github du projet"
                className="h-7 -mt-1 hover:bg-myBlue40 rounded-full"
              />
            </a>
          </div>
          <p className="text-dark-gray text-xs max-w-xs leading-tight mb-2 sm:text-sm sm:max-w-sm lg:max-w-md">
            {description}
          </p>
        </div>
        <Tags tags={tags} />
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
  linkDemoColor: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  offsetY: PropTypes.number,
}
