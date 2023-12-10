import { useState } from "react";
import Links from "./Components/Links";

import { motion } from 'framer-motion';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);


  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="flex flex-col items-center justify-center bg-white text-black"
    >
      <motion.div
        variants={variants}
        className="fixed top-0 left-0 bottom-0 w-[400px] bg-white"
      >
        <Links setOpen={setOpen}></Links>
      </motion.div>
      <div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-12 h-12 rounded-full fixed top-6 left-6 bg-transparent border-none"
        >
          {" "}
          {!open ? (
            <HiMenuAlt1 className="text-4xl font-extrabold mx-auto"></HiMenuAlt1>
          ) : (
            <IoMdCloseCircle className="text-4xl font-extrabold mx-auto"></IoMdCloseCircle>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
