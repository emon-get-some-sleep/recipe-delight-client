import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <div>Oh my god</div>,
        },
        {
          path:'/food',
          
        },
      ]
    },
  ]);

  export default router;