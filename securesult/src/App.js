import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./components/StartPage";
import DashBoardStudent from "./components/DashBoardStudent";
import DashBoardTeacher from "./components/DashBoardTeacher";
import Student from "./components/StudentLogin/Student";
import Teacher from "./components/TeacherLogin/Teacher";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "studentlogin",
    element: <Student />,
  },
  {
    path: "teacherlogin",
    element: <Teacher />,
  },
  {
    path: "dashboardStudent",
    element: <DashBoardStudent />,
  },
  {
    path: "dashboardTeacher",
    element: <DashBoardTeacher />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
