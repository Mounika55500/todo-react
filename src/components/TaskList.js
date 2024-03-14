import Taskshow from "./Taskshow";
import "./styles.css";
import tasksContext from "./context/tasks";
import { useContext } from "react";
function TaskList() {
  const { tasks } = useContext(tasksContext);
  console.log(tasks);
  const renderedTasks = tasks.map((task) => {
    return <Taskshow key={task.id} task={task} />;
  });
  return (
    <div className="Tasks">
      <h1>All Tasks</h1>
      <div>{renderedTasks}</div>;
    </div>
  );
}
export default TaskList;
