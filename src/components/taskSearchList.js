import TaskSearchShow from "./TaskSearchShow";
import { useContext } from "react";
import tasksContext from "./context/tasks";
import { useSearchParams } from "react-router-dom";
function TaskSearchList() {
  const [params, setParams] = useSearchParams();
  const searchterm = params.get("term");

  const { tasks } = useContext(tasksContext);
  const renderedList = tasks.map((task) => {
    if (task.title.includes(searchterm)) {
      return <TaskSearchShow task={task} />;
    } else return null;
  });
  return <div className="Tasks">{renderedList}</div>;
}
export default TaskSearchList;
