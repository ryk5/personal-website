import project1 from "../assets/projects/qgradient.png";
import project2 from "../assets/projects/signer.png";
import project3 from "../assets/projects/train.png";
import project4 from "../assets/projects/graphlogo.png";

export const HERO_CONTENT = `I'm currently an undergraduate at Columbia University majoring in Computer Science and minoring in Statistics. My academic interests span a wide array of disciplines, including computer science, mathematics, statistics, and physics. I am particularly passionate about exploring the intersections of these fields, such as the application of machine learning algorithms to solve real-world problems, leveraging statistical methods for data-driven decision-making, and understanding the mathematical principles underlying complex systems.`;

export const ABOUT_TEXT = `
<p>I'm a dedicated student and researcher who is passionate about ways to help people in need. 
My past research interests primarily lie at the intersection of quantum computing algorithms and machine learning. 
I independently developed a hybrid quantum-classical convolutional neural network for identifying dementia through non-invasive imaging techniques like CT and MRI.
</p>
<br>
<p>Another project I’m proud of is an app I developed using computer vision to classify and translate ASL gestures into text, 
aimed at supporting the deaf and hard-of-hearing community. 
This app received positive feedback from a local deaf center and won recognition in the Fairfax Shark Tank Challenge and the Congressional App Challenge, 
gaining recognition from <a href="https://x.com/TJHSST_Official/status/1616134994505629703" target="_blank" rel="noopener noreferrer" style="color: #007BFF; text-decoration: none;">Congressman Gerry Connolly</a>.</p>
<br>
<p>Beyond STEM, I value the humanities and enjoy writing stories and personal memoirs. 
My writing has earned accolades in the Scholastic Writing Competition, including a <a href="https://www.fcps.edu/news/fcps-students-earn-30-national-scholastic-art-and-writing-awards" target="_blank" rel="noopener noreferrer" style="color: #007BFF; text-decoration: none;">national silver medal</a> and multiple gold and silver keys.</p>
<br>
<p>In my free time, I love playing tennis, spending time with friends, and volunteering. 
I was a starting player for my high school varsity tennis team, a state qualifier, and honored as the 2023 District Player of the Year and 2024 District MVP. 
In college, I look forward to deepening my knowledge of machine learning and application development while finding ways to make a meaningful impact on my community.</p>
<br>
<p>I thrive in collaborative environments and enjoy solving complex problems in quantitative fields. 
Outside of coding, I enjoy staying active, exploring new NYC food spots with friends, and playing poker.</p>
`;

export const EXPERIENCES = [
  {
    year: "Oct. 2024 - Present",
    role: "Agent-Based Modeling Research Assistant",
    company: "Columbia University DiTecT Lab",
    description: `Created agent-based behavior analysis model on AnyLogic Software C++ backend under Professor Sharon Di. Simulated pedestrian and vehicle movement to maximize civilian safety & sustainable transportation decisions. Minimized subway crowd management to reduce airborne transmission of respiratory viruses (<a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2218809&HistoricalAwards=false" target="_blank" rel="noopener noreferrer" style="color: #007BFF; text-decoration: none;">NSF #2218809</a>)`,
    technologies: ["C++", "AnyLogic", "Java"],
  },
  {
    year: "Jun. 2024 - Aug. 2024",
    role: "AI/ML Intern",
    company: "Data Surge, LLC",
    description: `Developed XGBoost trees for entity resolution data deduplication by utilizing Python, SQL, and MLFlow. Improved previous model’s recall from 75% to 98% and streamlined product to user using DataBricks and React. Presented to U.S Immigration and Customs Enforcement (ICE) and received full-time return offer after university`,
    technologies: ["Python", "SQL", "React", "MLFlow"],
  },
  {
    year: "Jun. 2023 - Aug. 2023",
    role: "Radiation Effects Research Assistant",
    company: "Stony Brook Radiation Effects Lab",
    description: `Created app for analysis of X-ray diffraction data of fusion reactor materials under Professor David Sprouster. Crafted GUI to observe crucial molecular structures using C++ and automated sample analysis using Perl scripts. Presented at <a href="https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/presentations/view/2023-mrs-fall-meeting/2023-mrs-fall-meeting-3979667" target="_blank" rel="noopener noreferrer" style="color: #007BFF; text-decoration: none;">Materials Research Society Fall 2023 Conference</a>`,
    technologies: ["C++", "Perl", "Python"],
  },
  {
    year: "Jun. 2022 - Aug. 2022",
    role: "Software Engineering Intern",
    company: "Blue Clarity, LLC",
    description: `Automated 5000+ personalized sponsorship emails using webscraping service Scrapy Cloud API in Python. Collaborated with team to implement search function and content management system (CMS) using Node.js. Contributed 3000+ lines of code via Git and raised over $50k in sponsorship money for seasonal hackathon`,
    technologies: ["Python", "Node.js", "React"],
  },
];

export const PROJECTS = [
  {
    title: "Quantum ML for Dementia Detection",
    image: project1,
    description:
      "A quantum convolutional neural network outperforming similar ML methods for dementia detection in MRI/CT scans.",
    technologies: ["Python", "Qiskit", "Flask", "PyTorch", "pandas"],
    link: "https://ieeexplore.ieee.org/document/10313653"
  },
  {
    title: "Signterpreter",
    image: project2,
    description:
      "A computer vision application that translates ASL gestures from the webcam to text for the deaf.",
    technologies: ["Python", "CSS", "React", "AWS"],
    link: "https://github.com/Solices/GesText/tree/main"
  },
  {
    title: "Optimal Graph Search Algorithms for Train Routes",
    image: project3,
    description:
      "A graphical user interface testing graph search algorithms to find the most efficient and complete U.S train routes.",
    technologies: ["Python", "Tkinter"],
    link: "https://github.com/ryk5/Train-Routes-Graph-Search"
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing a little glimpse into my life and my passions.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    link: "https://github.com/ryk5/personal-website"
  },
];


export const CONTACT = {
  email: "E-mail",
};
