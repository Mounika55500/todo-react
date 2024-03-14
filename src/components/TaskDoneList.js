import React from "react";
import { TaskDoneShow } from "./TaskDoneShow";
import tasksContext from "./context/tasks";
import { useContext } from "react";
const TaskDoneList = () => {
  const { tasks } = useContext(tasksContext);
  console.log(tasks);
  const renderDoneTasks = tasks.map((task) => {
    if (task.check === true) {
      return <TaskDoneShow task={task} />;
    }
    return null;
  });

  return (
    <div className="Tasks">
      <h1>Completed Tasks</h1>
      <div>{renderDoneTasks}</div>;
    </div>
  );
};

export default TaskDoneList;
