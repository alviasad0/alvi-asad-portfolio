import { motion } from "framer-motion";

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

const WhyHireMe = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="max-w-screen-xl mx-auto  h-full"
    >
      <motion.div></motion.div>
      <motion.div className="flex flex-col md:flex-row gap-20 pt-20 justify-center items-center">
        <motion.div>
          <motion.h1 className="text-center text-5xl pb-5 font-bold text-white pt-10">
            Why Hire Me ?{" "}
          </motion.h1>
          <motion.p className="text-center text-lg font-medium ">
            As a passionate MERN stack developer, I bring a wealth of expertise
            and creativity to every project. My journey in web development has
            equipped me with a comprehensive skill set, ranging from front-end
            technologies like HTML, CSS, and React to back-end solutions using
            Express.js and MongoDB. I pride myself on creating not just
            functional, but aesthetically pleasing and user-friendly
            applications. What sets me apart is a commitment to staying abreast
            of the latest industry trends and technologies, ensuring that the
            solutions I deliver are not only robust but also cutting-edge. I
            approach each project with an unwavering dedication to delivering
            high-quality results that align seamlessly with the client's vision.
            Collaborative, adaptable, and always eager to take on new
            challenges, I am ready to contribute my skills to your team and take
            your web development goals to new heights. Let's build something
            remarkable together.
          </motion.p>
        </motion.div>
        <motion.img
          src="/src/assets/profile.jpg"
          className="mx-auto h-[400px] w-[350px]  rounded-e-3xl mt-10"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default WhyHireMe;
