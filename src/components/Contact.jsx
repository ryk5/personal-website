import { CONTACT } from "../constants"
import {motion} from "framer-motion"

const Contact = () => {

  const hoverEffect = (color) => ({
    hover: {
      y: -5,
      color: color,
      transition: { duration: 0.3 },
    },
  });

  return (
    <div className="border-b border-transparent pb-20">
    <motion.h2 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:0.5}}
    className="my-10 text-center text-4xl text-cyan-800">Contact Me</motion.h2>
    <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className="my-4 ">{CONTACT.phoneNo}</motion.p>
        <a href="mailto:2024rkim@gmail.com" className="text-cyan-800">
          <motion.div variants={hoverEffect("#B53737")} whileHover="hover">{CONTACT.email}</motion.div>
        </a>
    </div>
    </div>
  )
}

export default Contact
