import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
const tasksContext = createContext();
function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    setTasks(response.data);
  };
  const handleCheckbox = async (id, check, title) => {
    const response = await axios.put(`http://localhost:3001/tasks/${id}`, {
      title,
      check,
    });
    console.log(response);
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...response.data };
      }
      return task;
    });
    console.log(updatedTasks);

    setTasks(updatedTasks);
  };

  const deleteTasksById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/tasks/${id}`);
    console.log(response);
    const updatedtasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedtasks);
  };

  const handleCreateTask = async (title, check) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      title,
      check,
    });

    const updatedtasks = [...tasks, response.data];
    setTasks(updatedtasks);
  };
  console.log(tasks);
  const valueToShare = {
    tasks,
    fetchTasks,
    handleCheckbox,
    deleteTasksById,
    handleCreateTask,
  };

  return (
    <tasksContext.Provider value={valueToShare}>
      {children}
    </tasksContext.Provider>
  );
}
export { Provider };
export default tasksContext;
