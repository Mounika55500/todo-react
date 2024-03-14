import TaskList from "./components/TaskList";
import TaskDoneList from "./components/TaskDoneList";
import "./components/styles.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/Welcome";
import TaskSearchList from "./components/taskSearchList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/alltasks",
          element: <TaskList />,
        },
        {
          path: "/completedtasks",
          element: <TaskDoneList />,
        },
        {
          path: "/search",
          element: <TaskSearchList />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
