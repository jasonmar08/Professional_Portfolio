import ProjectCard from '../components/ProjectCard'
import FloatingContact from '../components/FloatingContact'

const Projects = ({ projects }) => {
  return (
    <div className="projects-whole">
      <div className="projects-page">
        <h2>Projects</h2>
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
      <FloatingContact />
    </div>
  )
}

export default Projects
