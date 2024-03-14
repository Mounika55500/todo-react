import "./styles.css";
import { useContext } from "react";
import tasksContext from "./context/tasks";
function Taskshow({ task }) {
  const { handleCheckbox, deleteTasksById } = useContext(tasksContext);
  const handleClick = () => {
    deleteTasksById(task.id);
  };
  let check;
  const handleChange = (e) => {
    check = e.target.checked;

    handleCheckbox(task.id, check, task.title);
  };
  console.log(task);

  return (
    <div className="list">
      <input
        value={task.title}
        checked={task.check}
        type="checkbox"
        onChange={handleChange}
      />
      {task.title}

      <button className="delete-button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
export default Taskshow;
