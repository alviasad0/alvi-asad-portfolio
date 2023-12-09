
import { useState } from "react";
import Links from "./Components/Links";
import TroggleButton from "./Components/TroggleButton";
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [open , setOpen ] = useState(false);
    const varients = {
      open: {
        clipPath: "circle(1200px at 50px 50px ",
        transition: {
          
          type: "spring",
          stiffness: 20
          
        },
      },
      closed: {
        clipPath: "circle(30px at 50px 50px )",
        transition: {
          delay: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
      },
    };


    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className="flex flex-col items-center justify-center bg-white text-black">
            <motion.div
            varients={varients}
                className="fixed top-0 left-0 bottom-0 w-[400px] bg-white">
               <Links></Links>
            </motion.div>
             <TroggleButton setOpen={setOpen}></TroggleButton>
        </motion.div>
    );
};

export default Sidebar;