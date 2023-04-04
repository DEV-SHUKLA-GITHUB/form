import { useState } from "react";
import { AiFillDownCircle, AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
// toast.configure();

function Form() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleSave = () => {
    toast("saved successfully");
    setClicked(!clicked);
  };
  const handleDelete = () => {
    toast("deleted successfully");
    setClicked(!clicked);
  };
  return clicked ? (
    <div className="container">
      <div className="header">
        <h1 className="heading">Project</h1>
        <AiFillDownCircle className="icon" onClick={handleClick} />
      </div>
      <div className="main">
        <div className="mainSection">
          <input type="text" className="input" placeholder="Project Name" />
          <AiFillDelete className="Delete" onClick={handleDelete} />
        </div>
        <button className="save" onClick={handleSave}>
          Save
        </button>
        <ToastContainer />
      </div>
    </div>
  ) : (
    <div className="container closedContainer">
      <div className="header">
        <h1 className="heading">Project</h1>
        <AiFillDownCircle className="icon" onClick={handleClick} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Form;
