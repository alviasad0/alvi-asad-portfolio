import { motion } from 'framer-motion';
const variants = {
  open: {
    transition: {
      staggerChildren : 0.1,
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}
const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

// eslint-disable-next-line react/prop-types
const Links = ({setOpen}) => {

    const links = (
      <>
        <motion.a
          variants={linkVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className={"text-xl font-bold uppercase"}
          href={`#homepage`}
        >
          Home Page
        </motion.a>
        <motion.a
          variants={linkVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className={"text-xl font-bold uppercase"}
          href={"#skills"}
        >
          Skills
        </motion.a>
        <motion.a
          variants={linkVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className={"text-xl font-bold uppercase"}
          href={"#latestProjects"}
        >
          Latest Projects
        </motion.a>
        <motion.a
          variants={linkVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className={"text-xl font-bold uppercase"}
          href={"#contact"}
        >
          Contact
        </motion.a>
        <motion.a
          variants={linkVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className={"text-xl font-bold uppercase"}
          href={"#about"}
        >
          About
        </motion.a>
      </>
    );
    
    return (
      <motion.div
        onClick={() => setOpen((prev) => !prev)}
        variants={variants}
        className="absolute w-full h-full flex flex-col items-center justify-center gap-5"
      >
      {links}
      </motion.div>
    );
};

export default Links;