import { motion } from "framer-motion";
import UIU from "./../../assets/UIU.jpg"
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
const Educations = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="max-w-screen-xl mx-auto  h-full"
    >
      <motion.div>
        <motion.h1 className="text-center text-5xl pb-5 font-bold text-white pt-10">
          Educational Qualifications{" "}
        </motion.h1>
      </motion.div>
      <motion.div className="flex flex-col md:flex-row gap-20 pt-20 justify-center items-center">
        <motion.img
                  src={ UIU}
          className="mx-auto h-[400px] w-[350px] md:w-[600px]  rounded-s-3xl mt-10"
          alt=""
        />

        <motion.div>
          <motion.p className=" text-5xl font-bold ">
            United International University (UIU)
          </motion.p>
          <motion.p className=" text-2xl pt-10 font-bold ">
            Bachelor's Degree in Computer Science and Engineering (CSE)
          </motion.p>
          <motion.p className="pt-5 text-xl font-semibold ">
            Enrolled: 2023 - Present
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Educations;
