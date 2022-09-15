import ProjectCard from '../components/ProjectCard'
import FloatingContact from '../components/FloatingContact'

const Projects = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      <FloatingContact />
      <div className="projects-container">
        {projects.map(({ id, image, title, github, deployed }) => (
          <ProjectCard
            key={id}
            image={image}
            title={title}
            github={github}
            deployed={deployed}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
