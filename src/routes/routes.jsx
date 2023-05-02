import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import HomePage from "../components/HomePage/HomePage";

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
          path:'/food',
          
        },
      ]
    },
  ]);

  export default router;