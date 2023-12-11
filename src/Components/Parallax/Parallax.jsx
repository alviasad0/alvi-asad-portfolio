
import { motion} from "framer-motion"

const Parallax = ({type}) => {
    return (
      <div
        className={
          type === "skills"
            ? `bg-gradient-to-b from-[#111132] to-[#0c0c1d]  w-full h-full relative`
            : `bg-gradient-to-b from-[#111132] to-[#505064] w-full h-full relative`
        }
      >
        <h1 className="text-white flex text-center justify-center items-center h-full text-6xl font-bold">
          {type === "skills" ? "My Skills" : "My best Projects"}
        </h1>
        <div
          className="bg-cover bottom-0 w-full h-full absolute z-40"
          style={{
            backgroundImage: "url(/src/assets/mountains.png)",
          }}
        ></div>
        <div
          className="bg-cover bottom-0 w-full h-full absolute z-20"
          style={{
            backgroundImage: "url(/src/assets/planets.png)",
          }}
        ></div>
        <div
          className="bg-cover bottom-0 w-full h-full absolute z-10"
          style={{
            backgroundImage: "url(/src/assets/stars.png)",
          }}
        ></div>
      </div>
    );
};

export default Parallax;