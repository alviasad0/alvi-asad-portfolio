

import Contact from "./Components/Contact/Contact";
import Educations from "./Components/Educations/Educations";
import Hero from "./Components/Hero/Hero";
import LatestProjects from "./Components/LatestProjects/LatestProjects";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skils/Skills";
import WhyHireMe from "./Components/WhyHireMe/WhyHireMe";

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
        
        <section id="contact" className="h-screen snap-center">
          <Contact></Contact>
        </section>
        <section id="whyChooseMe" className="h-screen snap-center">
          <WhyHireMe></WhyHireMe>
        </section>
        <section id="education" className="h-screen snap-center">
          <Educations></Educations>
        </section>
      </div>
    </>
  );
}

export default App
