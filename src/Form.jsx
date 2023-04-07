import { useState } from "react";
import { AiFillDownCircle, AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
// toast.configure();

function Form() {
  const [clicked, setClicked] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleSave = () => {
    toast("saved successfully");
    setClicked(!clicked);
  };
  const handleChange = (e) => {
    setProjectName(e.target.value);
    // console.log(e.target.value);
    console.log(projectName);
  };
  const handleDelete = (item) => {
    const name = projects.filter((project) => project !== item);
    console.log(item);
    setProjects(name);

    // console.log(name);
  };
  const addNew = () => {
    setProjects([...projects, projectName]);
    // console.log(projects);
  };

  return clicked ? (
    <div className="main-div">
      <div className="container">
        <div className="header">
          <h1 className="heading">Project</h1>
          <AiFillDownCircle className="icon" onClick={handleClick} />
        </div>
        <div className="main">
          <div className="mainSection">
            <input
              type="text"
              onChange={handleChange}
              value={projectName}
              className="input"
              placeholder="Project Name"
            />
            {/* <AiFillDelete className="Delete" onClick={handleDelete} /> */}
          </div>
          <div className="buttons">
            {/* <button className="save" onClick={handleSave}>
              Save
            </button> */}
            <button className="save" onClick={addNew}>
              Add New
            </button>
            {/* <button className="save" onClick={handleDelete}>
              Delete
            </button> */}
          </div>
          <ToastContainer />
        </div>
      </div>
      <div className="saved">
        <h2>Saved Projects</h2>
        <ul>
          {projects.map((project) => (
            <div key={project} className="savedProject">
              <li>{project}</li>
              <button
                className="save delete"
                onClick={() => handleDelete(project)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
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
