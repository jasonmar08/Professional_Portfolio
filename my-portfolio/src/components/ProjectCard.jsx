import ProjectInfoCard from "./ProjectInfoCard"

const ProjectCard = ({ image, title, github, deployed }) => {

  return (
    <div>
      <div className='project-card'>
        <div className='project-img-grid'>
          <img src={image} alt={title} className="project-img" />
          {/* <button className='more-info-button'>More Info</button> */}
        </div>
        <div className='project-name-grid'>
          <h3>{title}</h3>
        </div>
        <div className='project-links'>
          <div className='git-btn-grid'>
            <a href={github} target='_blank' rel='noreferrer' id='git-btn'>GitHub</a>
          </div>
          <div className='dep-btn-grid'>
            <a href={deployed} target='_blank' rel='noreferrer' id='dep-btn'>Deployed Site</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard