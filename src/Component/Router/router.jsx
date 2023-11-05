import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Root from "../Root/root";
import AddBook from "../Pages/AddBook";
import PrivateRoute from "./PrivateRoute";
import BookCategory from "../Pages/bookCategory";
import Details from "../Pages/Details";





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
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/addBook",
            element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
          path: "/details/:id",
          element:<PrivateRoute> <Details></Details> </PrivateRoute>,
          loader: () => fetch(`http://localhost:5000/books/`)
  
      },
        {
            path:"/books/:category",
            element: <PrivateRoute> <BookCategory></BookCategory> </PrivateRoute>,
            loader:() => fetch(`http://localhost:5000/books`)
        },
      ]
    },
  ]);

export default router;