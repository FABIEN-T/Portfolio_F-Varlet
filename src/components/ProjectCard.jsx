import PropTypes from 'prop-types'
import Tags from './Tags'

export default function ProjectCard({
  title,
  description,
  image,
  linkDemo,
  linkGit,
  //   linkDemoColor,
  tags,
  //   offsetY,
}) {
  return (
    <div className="w-full max-w-sm mx-auto border-2 border-myBlue rounded lg:max-w-full">
      <div className="group relative overflow-hidden mb-4 bg-gray-light lg:mb:8">
        <img width="490" height="549" src={image} alt={description} />
        <a
          href={linkDemo}
          className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
                
          absolute top-0 left-0 w-full h-full bg-black text-white opacity-0 z-10 translate-y-full duration-300 group-hover:opacity-50 group-hover:translate-y-0 "
        >
          Visiter le site
        </a>
      </div>
      <div className="group p-2">
        <div className="flex flex-row justify-between items-center">
          <p className="font-lora text-main font-medium text-xl mb-3 sm:text-2xl">
            {title}
          </p>
          <a href={linkGit}>
            <img
              src="images/logosSkills/github.svg"
              alt="lien github du projet"
              className="h-7 -mt-4 hover:bg-myBlue40 rounded-full"
            />
          </a>
        </div>
        <p className="text-dark-gray text-xs max-w-xs leading-tight sm:text-sm sm:max-w-sm lg:max-w-md">
          {description}
        </p>
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
  tags: PropTypes.string,
  offsetY: PropTypes.number,
}
