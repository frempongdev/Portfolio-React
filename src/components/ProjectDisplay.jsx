import { useDispatch, useSelector } from "react-redux"
import { IoIosCloseCircle } from "react-icons/io";
import { closeProject } from "./redux/projects/projectSlice";
import { projects } from "../assets/code/projects";
import { AnimatePresence, motion } from "framer-motion"
import '../styles/projects.css'


const ProjectDisplay = () => {
    const { numberClicked } = useSelector(state => state.project)
    const dispatch = useDispatch()

    return (
        <AnimatePresence>
            {numberClicked && (
                <motion.section className="pjd-wrapper" style={{ display: numberClicked !== null ? 'block' : 'none' }}

                    initial={{ y: -300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    exit={{ y: -300, opacity: 0 }}
                >
                    <IoIosCloseCircle onClick={() => { dispatch(closeProject()) }} className="pjd-close" />
                    <h2 className="pjd-title">{projects[numberClicked - 1]?.name}</h2>
                    <div className="pjd-main">
                        <div className="pjd-img">
                            <img src={projects[numberClicked - 1]?.img} alt="project-image" />
                        </div>
                        <div className="pjd-desc">
                            <p>{projects[numberClicked - 1]?.description}</p>
                            <p>Tech Stack:</p>
                            <ul>
                                {
                                    projects[numberClicked - 1]?.techStack.map((tech, index) => (
                                        <li key={index + 1}>{tech}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default ProjectDisplay