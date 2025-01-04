import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/bridgepic.jpeg"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay: delay}
  }
})
const Hero = () => {
  return (
  <div className="border-b border-transparent pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl tracking-tight lg:mt-16 lg:text-8xl text-cyan-800"
                >
                Ryan Kim
                </motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-teal-300 via-slate-500 to-blue-600 bg-clip-text text-4xl tracking-tight text-transparent">
                Engineer and Data Enthusiast
                </motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="mb-4 max-w-xl py-6 text-gray-600">
                  { HERO_CONTENT }
                </motion.p>
            </div>
        </div>
        <div className="w-full lg:w-5/12 lg:p-12"> 
          <div className="flex justify-center">
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}}
            
            className="ml-20 rounded-2xl" src={profilePic} alt="Ryan Kim" />
          </div>
        </div>
    </div>
  </div>
  );
};

export default Hero;
