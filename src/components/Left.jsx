import '../styles/Left.css'
import { projects } from '../assets/code/projects'
import { ImGithub } from "react-icons/im";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { openProject } from './redux/projects/projectSlice';



const Left = () => {
  const {numberClicked} = useSelector(state => state.project)
  const dispatch = useDispatch()

  const handleProjClicked = (pjID) => {
    dispatch(openProject(pjID))
  }

  return (
      <div className="left-wrapper">
        <div className="project-selector">
          <ul className="projects-box">
            {
              projects.map(project => (
                <li className="one-project" key={project.id} onClick={()=>handleProjClicked(project.id)} style={{ backgroundColor: numberClicked === project.id? '#434343' : 'black', transition: 'all 0.5s ease-out', cursor:'pointer' }}>
                  <p className="project-name">{project.name}</p>
                  <div className='links-box'>
                    <a href={project.githubLink} className='proj-a' target='_blank' rel="noreferrer">
                      <ImGithub className='project-clicks' />
                    </a>
                    <a href={project.liveLink} className='proj-a' target='_blank' rel="noreferrer">
                      <MdOutlineOpenInBrowser className='project-clicks' />
                    </a>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
  )
}

export default Left
