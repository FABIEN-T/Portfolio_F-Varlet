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
}) {
  // console.log('linkDemo', linkDemo)
  {
    linkDemo ? console.log('link ok') : console.log('No')
  }
  return (
    <div
      className={`max-w-sm mx-auto bg-gray-200 border-2 border-gray-200 rounded-lg shadow-xl lg:max-w-full`}
    >
      {/* lg:translate-y-${offsetY} */}
      <div className="group relative overflow-hidden rounded-t-lg mb-2 bg-gray-light lg:mb:8">
        <img
          width="600"
          height="800"
          src={image}
          alt={description}
          className="object-cover group-hover:grayscale"
          // className="saturate-50 group-hover:saturate-100"
        />
        {/* <div
          className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl 
            absolute top-0 left-0 w-full h-full text-gray-100 opacity-0 z-10 translate-y-full duration-300 group-hover:translate-y-0 group-hover:opacity-60"
        > */}
        {linkDemo ? (
          <a
            href={linkDemo}
            // className={`${linkDemoColor} flex justify-center items-center text-white sm:text-lg lg:text-2xl
            //   absolute top-0 left-0 w-full h-full font-bold opacity-0 z-10 translate-y-full duration-300 group-hover:translate-y-0 group-hover:opacity-60 `}
            className="bg-myBlue text-white flex justify-center items-center m:text-lg lg:text-2xl 
            absolute top-0 left-0 w-full h-full font-bold opacity-0 z-10 translate-y-full duration-300 group-hover:translate-y-0 group-hover:opacity-80"
          >
            Visiter le site
          </a>
        ) : (
          // {linkGit ? (
          //   <div></div>) : (
          <div
            className="bg-rose-600 text-white flex justify-center items-center m:text-lg lg:text-2xl 
          absolute top-0 left-0 w-full h-full font-bold opacity-0 z-10 translate-y-full duration-300 group-hover:translate-y-0 group-hover:opacity-80"
          >
            En construction
          </div>
          // )}
        )}
      </div>
      <div className="group flex flex-col justify-between p-2">
        <div>
          <div className="flex flex-row justify-between items-center">
            <p className="font-medium text-xl mb-1 sm:text-2xl">{title}</p>
            {linkGit ? (
              <a href={linkGit}>
                <img
                  src="images/logosSkills/github.svg"
                  alt="lien github du projet"
                  className="h-7 -mt-1 hover:bg-white rounded-full"
                />
              </a>
            ) : (
              <div></div>
            )}
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
