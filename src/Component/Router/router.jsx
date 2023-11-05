import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Root from "../Root/root";
import AddBook from "../Pages/AddBook";
import PrivateRoute from "./PrivateRoute";





const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('/category.json')
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"register",
            element:<Register></Register>
        },
        {
            path:"addBook",
            element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
      ]
    },
  ]);

export default router;