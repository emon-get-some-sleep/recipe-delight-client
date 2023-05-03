import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import HomePage from "../components/HomePage/HomePage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ChefRecipi from "../components/ChefRecipi/ChefRecipi";
import PrivateRoutes from './PrivateRoutes';
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
        },
        {
          path: ':id',
          element: <PrivateRoutes><ChefRecipi></ChefRecipi></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`),
        }
      ]
    },
  ]);

  export default router;