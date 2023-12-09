
const TroggleButton = ({ setOpen}) => {
    return (
      <div>
        <button onClick={()=> setOpen((prev)=> !prev)} className="w-12 h-12 rounded-full fixed top-6 left-6 bg-transparent border-none"> hi</button>
      </div>
    );
};

export default TroggleButton;