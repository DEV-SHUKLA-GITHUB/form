import { useState } from "react";
import { AiFillDownCircle } from "react-icons/ai";
import "./App.css";

function Form() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return clicked ? (
    <div className="container">
      <div className="header">
        <h1 className="heading">Project</h1>
        <AiFillDownCircle className="icon" onClick={handleClick} />
      </div>
      <input type="text" className="input" placeholder="Project Name" />
    </div>
  ) : (
    <div className="container closedContainer">
      <div className="header">
        <h1 className="heading">Project</h1>
        <AiFillDownCircle className="icon" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Form;
