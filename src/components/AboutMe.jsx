import aboutImg from "../assets/qlabpic.jpeg"
import { ABOUT_TEXT } from "../constants"
import {motion} from "framer-motion"
const AboutMe = () => {
  return (
    <div className="border-b border-transparent pb-4">  
        <h2 className="my-20 text-center text-4xl text-cyan-800">About Me</h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-9">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl " src={aboutImg} alt = "about" />
                </div>
            </motion.div>
            <motion.div
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start text-cyan-950">
                        <p className="my-2 text-2/3-xl py-6"dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }} />
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutMe
