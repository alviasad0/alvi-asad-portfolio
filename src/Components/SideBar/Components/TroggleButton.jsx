import { HiMenuAlt1 } from "react-icons/hi";
// eslint-disable-next-line react/prop-types
const TroggleButton = ({ setOpen }) => {
  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-12 h-12 rounded-full fixed top-6 left-6 bg-transparent border-none"
      >
        {" "}
        <HiMenuAlt1 className="text-2xl font-extrabold mx-auto"></HiMenuAlt1>
      </button>
    </div>
  );
};

export default TroggleButton;
