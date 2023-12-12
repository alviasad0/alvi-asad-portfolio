

import Hero from "./Components/Hero/Hero";
import LatestProjects from "./Components/LatestProjects/LatestProjects";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skils/Skills";

import "./app.css"
function App() {

  return (
    <>
      <div className="bg-[#0c0c1d] text-[#CCCCCC]">
        <section id="homepage" className=" snap-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </section>

        <section id="skills" className=" snap-center">
          <Skills></Skills>
        </section>

        <section id="latestProjects" className=" ">
          <LatestProjects></LatestProjects>
        </section>
        <section className="h-screen snap-center">Portfolio 2</section>
        <section className="h-screen snap-center">Portfolio 3</section>
        <section id="contact" className="h-screen snap-center">
          Contact
        </section>
        <section id="about" className="h-screen snap-center">
          about
        </section>
      </div>
    </>
  );
}

export default App
