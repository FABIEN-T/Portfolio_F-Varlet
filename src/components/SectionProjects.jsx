import { datasProjects } from '../datas/datasProjects'
import ProjectCard from './ProjectCard'

export default function SectionProjects() {
  return (
    <section
      id="projets"
      className="pt-14 pb-20 px-4 sm:pb-28 sm:pt-20 lg:pb-72"
    >
      <h2
        className="text-main relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12 after:absolute after:w-full after:h-2 
          
          after:bottom-0 after:left-0 after:-z-10 after:bg-red-light sm:after:h-5 sm:after:-bottom-2"
      >
        Mes Projets
      </h2>
      <p className="text-xs text-gray-dark leading-5 max-w-xs mx-auto text-center sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        accusamus magni fuga, ratione cumque adipisci veritatis veniam modi.
      </p>
      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 mt-12 max-w-4xl mx-auto  md:gap-x-12 md:gap-y-28 md:mt-24 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl">
        {datasProjects.map(
          ({
            title,
            description,
            image,
            linkDemo,
            linkGit,
            linkDemoColor,
            tags,
            offsetY,
          }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              image={image}
              linkDemo={linkDemo}
              linkGit={linkGit}
              linkDemoColor={linkDemoColor}
              tags={tags}
              offsetY={offsetY}
            />
          ),
        )}
      </div>
    </section>
  )
}
