import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {motion } from "framer-motion"
import Sidebar from "../SideBar/Sidebar";
const Navbar = () => {
  return (
    <div className="h-[100px]">
          {/* side bar  */}
          <Sidebar></Sidebar>
      <div className="max-w-screen-xl mx-auto   h-full pt-10">
        <div className="flex justify-between items-center">
          <div className="">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="font-bold text-3xl  "
            >
              Alvi Asad
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold flex gap-5"
          >
            <a href="#">
              <HiOutlineMail></HiOutlineMail>
            </a>
            <a href="#">
              <FaGithub></FaGithub>
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
