
const Hero = () => {
    return (
      <div  className=" h-[90vh]  bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl uppercase font-bold pb-6">Alvi Asad</h1>
            <h1 className="text-4xl font-bold uppercase pb-10">
              Mern stack developer
            </h1>
            <p className="text-center text-xl font-bold max-w-2xl">
              I am a MERN stack developer passionate about crafting seamless
              digital experiences. Currently studying Computer Science and
              Engineering, my expertise lies in React, Firebase, Mongodb and
              Node.js. I thrive on challenges, valuing collaboration, honesty,
              and dedication. Beyond web development, I am excited about
              venturing into AI in the next five years, pushing the boundaries
              of technology.
            </p>
            <div className="mt-10 flex gap-5 justify-center">
              <button className="btn btn-primary uppercase text-white ">
                Download my resume
              </button>
              <button className="btn btn-primary uppercase text-white ">
                Contact Me
              </button>
            </div>
          </div>
          <div>
            <img
              className="pb-24"
              src={`https://github.com/alviasad0/My-protfolio-website/assets/79654387/29c80feb-5b1c-4113-8356-cd0214e4b6e0`}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Hero;