import { motion } from "framer-motion";
import logo from "../assets/graphlogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  const hoverEffect = (color) => ({
    hover: {
      y: -5,
      color: color,
      transition: { duration: 0.3 },
    },
  });

  return (
    <nav className="mb-25 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-1/3" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ryjikim/" target="_blank" rel="noopener noreferrer">
          <motion.div variants={hoverEffect("#0077b5")} whileHover="hover">
            <FaLinkedin />
          </motion.div>
        </a>
        <a href="https://github.com/ryk5" target="_blank" rel="noopener noreferrer">
          <motion.div variants={hoverEffect("#000000")} whileHover="hover">
            <FaGithub />
          </motion.div>
        </a>
        <a href="mailto:2024rkim@gmail.com" target="_blank" rel="noopener noreferrer">
          <motion.div variants={hoverEffect("#B53737")} whileHover="hover">
            <BiLogoGmail />
          </motion.div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
