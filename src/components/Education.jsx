import { motion } from "framer-motion";

const Education = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center px-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-cyan-800"
      >
        Education
      </motion.h2>

      {/* College Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        className="mb-10 w-full max-w-2xl text-center"
      >
        <h3 className="text-2xl font-semibold text-gray-800">Columbia University</h3>
        <p className="mt-2 text-gray-600 list-none">
          <span className="font-medium">Major:</span> Computer Science <br />
          <span className="font-medium">Minor:</span> Statistics <br />
        </p>
        <div className="mt-4">
          <h4 className="text-xl font-medium text-gray-700">Activies and Societies:</h4>
          <ul className="ml-5 list-inside list-disc text-gray-600 list-none">
            <li>Columbia Quant Group Executive Board</li>
            <li>Columbia Alpha Partners Global Markets Analyst</li>
            <li>Application Development Initiative Committee</li>
            <li>Columbia Poker Club Member</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-xl font-medium text-gray-700">Coursework:</h4>
          <ul className="ml-5 list-inside list-disc text-gray-600 list-none">
            <li>Data Structures and Algorithms in Java</li>
            <li>Advanced (Systems) Programming in C</li>
            <li>Multivariable Calculus</li>
            <li>Linear Algebra and Probability</li>
            <li>Discrete Mathematics</li>
            <li>Graduate Probability Theory</li>
          </ul>
        </div>
      </motion.div>

      {/* High School Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        className="mb-10 w-full max-w-2xl text-center"
      >
        <h3 className="text-xl font-semibold text-gray-800">Thomas Jefferson High School for Science and Technology</h3>
        <div className="mt-4">
          <h4 className="text-xl font-medium text-gray-700">Activities and Clubs:</h4>
          <ul className="ml-5 list-inside list-disc text-gray-600 list-none">
            <li>Varsity Tennis Team Captain</li>
            <li>Physics Team Officer</li>
            <li>Computational Physics Club Founder</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-xl font-medium text-gray-700">Coursework:</h4>
          <ul className="ml-5 list-inside list-disc text-gray-600 list-none">
            <li>AP Calculus BC</li>
            <li>AP Physics C: Mechanics</li>
            <li>AP Physics C: Electricity and Magnetism</li>
            <li>AP Computer Science A</li>
            <li>AP Statistics</li>
            <li>Multivariable Calculus</li>
            <li>Linear Algebra</li>
            <li>Advanced Statistics</li>
            <li>Artificial Intelligence</li>
            <li>Computer Vision</li>
            <li>Machine Learning</li>
            <li>Web Application Development</li>
            <li>Advanced Mathematical Techniques</li>
            <li>Quantum Physics and Electrodynamics</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
