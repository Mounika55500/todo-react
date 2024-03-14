import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect, useContext } from "react";
import tasksContext from "./context/tasks";
import Search from "./Search";
function Welcome() {
  const { fetchTasks } = useContext(tasksContext);
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <Search />
      <Sidebar />

      <Outlet />
    </>
  );
}
export default Welcome;
