

import Navbar from "./Components/Navbar/Navbar";
import "./app.css"
function App() {

  return (
    <>
      <div className="bg-[#0c0c1d] text-[#CCCCCC]">
        <section className="h-screen snap-center">
         <Navbar></Navbar>
        </section>
        <section className="h-screen snap-center">Parallax</section>
        <section className="h-screen snap-center">Services</section>
        <section className="h-screen snap-center">Parallax</section>
        <section className="h-screen snap-center">Portfolio 1</section>
        <section className="h-screen snap-center">Portfolio 2</section>
        <section className="h-screen snap-center">Portfolio 3</section>
        <section className="h-screen snap-center">Contact</section>
      </div>
    </>
  );
}

export default App
