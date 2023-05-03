import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import HomePage from "../components/HomePage/HomePage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

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
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;