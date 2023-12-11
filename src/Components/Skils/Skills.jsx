import { motion} from "framer-motion"
import { useEffect, useState } from "react";

const Skills = () => {
   const [allSkills , setAllSkills] = useState([])

   console.log(allSkills);
    useEffect(() => {
        fetch("/public/skills.json")
          .then((response) => response.json())
          .then((data) => setAllSkills(data));
   },[])


    return (
      <motion.div className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] ">
        <motion.div className="max-w-screen-xl mx-auto ">
          

          {/* title seciton  */}
          <motion.div>
            <motion.h1 className="text-center text-4xl md:text-7xl font-bold  text-white">
              Languages & Frameworks I Excel In{" "}
            </motion.h1>
          </motion.div>

          {/* my skill card section  */}
          <motion.div>
            <motion.div className="grid grid-cols-1 gap-10 md:grid-cols-4">
              {allSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="card mx-5 md:mx-0  hover:bg-white hover:text-black border border-white  "
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