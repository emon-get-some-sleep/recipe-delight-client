import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import HomePage from "../components/HomePage/HomePage";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <HomePage></HomePage>,
        },
        {
          path:'login',
          element: <Login></Login>
          
        },
      ]
    },
  ]);

  export default router;