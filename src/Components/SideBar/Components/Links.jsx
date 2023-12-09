import { NavLink } from "react-router-dom";

const Links = () => {

    const links = (
      <>
        <a className={"text-xl font-bold uppercase"} href={`#homepage`}>
          Home Page
        </a>
        <a className={"text-xl font-bold uppercase"} href={"#services"}>
          services
        </a>
        <a className={"text-xl font-bold uppercase"} href={"#portfolio"}>
          Portfolio
        </a>
        <a className={"text-xl font-bold uppercase"} href={"#contact"}>
          Contact
        </a>
        <a className={"text-xl font-bold uppercase"} href={"#about"}>
          About
        </a>
      </>
    );
    
    return (
        <div className="absolute w-full h-full flex flex-col items-center justify-center gap-5">
            { links}
        </div>
    );
};

export default Links;