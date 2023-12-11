

import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import "./app.css"
function App() {

  return (
    <>
      <div className="bg-[#0c0c1d] text-[#CCCCCC]">
        <section id="homepage" className=" snap-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </section>
        <section id="skills" className="h-screen snap-center">
          <Parallax type="skills"></Parallax>
        </section>
        <section className="h-screen snap-center">Skills </section>
        <section id="portfolio" className="h-screen snap-center">
          <Parallax type="projects"></Parallax>
        </section>
        <section className="h-screen snap-center">Portfolio 1</section>
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
