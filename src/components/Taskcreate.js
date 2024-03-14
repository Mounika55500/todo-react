import { useState, useContext } from "react";
import tasksContext from "./context/tasks";

function Taskcreate() {
  const [added, setAdded] = useState(false);
  const [title, setTitle] = useState("");
  const [check, setCheck] = useState(false);
  const { handleCreateTask } = useContext(tasksContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleCreateTask(title, check);
    setTitle("");
  };
  const handleChange = (event) => {
    setAdded(false);
    setTitle(event.target.value);
  };
  const handleClick = () => {
    setAdded(true);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <p className="addtask-title">Add Task</p>
          <input
            className="addtask-input"
            onChange={handleChange}
            value={title}
            type="text"
          />
          <button className="addtask-button" onClick={handleClick}>
            Add
          </button>
        </form>
        {added && <h1> Task added</h1>}
      </div>
    </>
  );
}
export default Taskcreate;
