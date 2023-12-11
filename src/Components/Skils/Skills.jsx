import { motion} from "framer-motion"
import { useEffect, useState } from "react";

const variants = {
  initial: {
        x: -400,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
   const [allSkills , setAllSkills] = useState([])

   console.log(allSkills);
    useEffect(() => {
        fetch("/public/skills.json")
          .then((response) => response.json())
          .then((data) => setAllSkills(data));
   },[])


    return (
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        
        className="bg-gradient-to-b from-[#0c0c1d] to-[#111132]  "
      >
        <motion.div className="max-w-screen-xl mx-auto ">
          {/* title seciton  */}
          <motion.div>
            <motion.h1 className="text-center text-4xl md:text-7xl font-bold  text-white pt-24 pb-10">
              Tech Stack Mastery{" "}
            </motion.h1>
            <motion.p className="text-center md:text-xl font-medium pb-32 text-white">
              Dive into my tech stack—a fusion of precision and innovation. From
              crafting elegant HTML and CSS layouts to sculpting dynamic React
              interfaces, my skills bridge creativity and functionality. Explore
              the backend with Node.js, Express.js, MongoDB, and Firebase. Watch
              ideas come to life as I deploy seamlessly with Netlify. This is my
              toolkit; each skill a brushstroke in the canvas of web
              development. Explore below.
            </motion.p>
          </motion.div>

          {/* my skill card section  */}
          <motion.div className="">
            <motion.div className="grid grid-cols-1 gap-10 md:grid-cols-4 ">
              {allSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="card mx-5 md:mx-0  hover:bg-white hover:text-black border-2  border-white  "
                >
                  <figure className="px-10 pt-10 ">
                    <img
                      src={skill.imageUrl}
                      alt="Shoes"
                      className="w-[100px] h-[100px] rounded-xl border border-black"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{skill.name}</h2>
                    <p>{skill.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
};

export default Skills;