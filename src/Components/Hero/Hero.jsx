import { motion } from "framer-motion"


const textVarients = {
    initials: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren : 0.1
        }
    }
} 

const Hero = () => {
    return (
      <div className=" md:h-[90vh]  bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
        <div className="flex flex-col  md:flex-row items-center justify-center md:gap-32">
          <motion.div
            variants={textVarients}
            initial="initials"
            animate={"animate"}
            className="text-center pt-20"
          >
            <motion.h1
              variants={textVarients}
              className="text-6xl uppercase font-bold pb-6 text-white"
            >
              Alvi Asad
            </motion.h1>
            <motion.h1
              variants={textVarients}
              className="text-4xl font-bold uppercase pb-10 text-white"
            >
              Mern stack developer
            </motion.h1>
            <motion.p
              variants={textVarients}
              className="text-center  md:text-xl font-bold max-w-2xl text-white tracking-wide "
            >
              I am a MERN stack developer passionate about crafting seamless
              digital experiences. Currently studying Computer Science and
              Engineering, my expertise lies in React, Firebase, Mongodb and
              Node.js. I thrive on challenges, valuing collaboration, honesty,
              and dedication. Beyond web development, I am excited about
              venturing into AI in the next five years, pushing the boundaries
              of technology.
            </motion.p>
            <motion.div
              variants={textVarients}
              className="mt-10 flex gap-5 justify-center"
            >
              <motion.button
                variants={textVarients}
                className="btn btn-primary border-2 border-white hover:bg-white hover:text-violet-700 font-bold hover:border-2 bg-transparent text-white hover:border-violet-500  uppercase   "
              >
                Download my resume
              </motion.button>
              <motion.button
                variants={textVarients}
                className="btn btn-primary border-2 border-white hover:bg-white hover:text-violet-700 font-bold hover:border-2 bg-transparent text-white hover:border-violet-500  uppercase "
              >
                <a href="#contact">Contact Me</a>
              </motion.button>
            </motion.div>
          </motion.div>

          <div>
            <img className="opacity-90" src="/src/assets/alviasad_banner-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Hero;