import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
    const hoverEffect = (color) => ({
    hover: {
      y: -5,
      color: color,
      transition: { duration: 0.3 },
    },
  });
  return (
    <div className="border-b border-transparent pb4">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl text-cyan-800">Projects</motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key ={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4">
                        <img
                          src={project.image}
                          width={175}
                          height={175}
                          alt={project.title}
                          className="mb-6 rounded"
                        />
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <motion.h6 variants={hoverEffect("#B53737")} whileHover="hover" className="mb-2 font-semibold text-cyan-950">{project.title}</motion.h6>
                        </a>
                        {/* <h6 className="mb-2 font-semibold text-cyan-950">{project.title}</h6> */}
                        <p className="mb-4 text-neutral-600">{project.description}</p>
                        {project.technologies.map((tech, index) =>
                            <span 
                            key={index}
                            className="mr-2 mt-4 rounded bg-slate-200 px-2 py-1 text-sm font-medium text-cyan-950"
                            >
                                {tech}
                            </span>
                        )}
                    </motion.div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Projects
