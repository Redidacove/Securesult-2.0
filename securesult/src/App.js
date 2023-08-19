import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./components/StartPage";
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from "./components/TeacherLogin";
import DashBoard from "./components/DashBoard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "studentlogin",
    element: <StudentLogin />,
  },
  {
    path: "teacherlogin",
    element: <TeacherLogin />,
  },
  {
    path: "dashboard",
    element: <DashBoard />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
