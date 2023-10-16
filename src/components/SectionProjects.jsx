import { datasProjects } from '../datas/datasProjects'
import ProjectCard from './ProjectCard'

export default function SectionProjects() {
  return (
    <section
      id="projets"
      className="pt-20 pb-24 px-4 sm:pb-28 sm:pt-20 lg:pb-28 lg:pt-24"
    >
      <h2 className="text-myBlue relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-8">
        Mes Projets
      </h2>
      <p className="text-xs text-gray-dark leading-5 max-w-xs mx-auto text-center sm:leading-6 sm:font-light sm:text-lg sm:mb-14 sm:max-w-md md:text-xl md:max-w-xl">
        Projets professionnalisants réalisés en autonomie lors de ma formation
        de Développeur d'Applications Javascript-React (Titre RNCP38038 ) et
        projets personnels
      </p>
      {/* Grid */}
      <div className="grid grid-cols-1 gap-y-8 mt-12 max-w-xs mx-auto px-0 md:gap-x-12 md:gap-y-12 md:mt-16 md:max-w-2xl md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl">
        {datasProjects.map(
          ({
            title,
            description,
            image,
            noLink,
            linkDemo,
            linkGit,
            catCard,
            bgColor,
            tagsBlue,
            tagsRed,
            offsetY,
          }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              image={image}
              linkDemo={linkDemo}
              linkGit={linkGit}
              catCard={catCard}
              bgColor={bgColor}
              tagsBlue={tagsBlue}
              tagsRed={tagsRed}
              offsetY={offsetY}
            />
          ),
        )}
      </div>
    </section>
  )
}
