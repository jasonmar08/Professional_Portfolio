import ProjectInfoCard from "./ProjectInfoCard"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const ProjectCard = ({ id, image, title, description, stack, github, deployed, note }) => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div>
      <div className={id % 2 === 0 ? 'project-card-reversed' : 'project-card'}>
        <div data-aos={id % 2 === 0 ? 'flip-left' : 'flip-right'} className='project-img-grid'>
          <img src={image} alt={title} className="project-img" />
          {/* <button className='more-info-button'>More Info</button> */}
        </div>
        <div className="project-details">
          <div data-aos={id % 2 === 0 ? 'fade-right' : 'fade-left'} className='project-name-grid'>
            <h2>{title}</h2>
            <h3>Tech Used: <span className="stacks-used">{stack}</span></h3>
            <p>{note}</p>
            <p>{description}</p>
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
      </div>
    </div>
  )
}

export default ProjectCard