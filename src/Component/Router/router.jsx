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
import BorrowBooks from "../Pages/BorrowBooks";
import AllBook from "../Pages/AllBook";
import UpdateBooks from "../Pages/UpdateBooks";





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
            path:"/update/:id",
            element: <PrivateRoute><UpdateBooks></UpdateBooks></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
        },
        {
            path:"/allBook",
            element: <PrivateRoute><AllBook></AllBook></PrivateRoute>,
            loader:() => fetch('http://localhost:5000/books')
        },
        {
          path: "/details/:id",
          element:<PrivateRoute> <Details></Details> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
  
      },
        {
            path:"/books/:category",
            element: <PrivateRoute> <BookCategory></BookCategory> </PrivateRoute>,
            loader:() => fetch(`http://localhost:5000/books`)
        },
        {
            path:"/allBorrowBook",
            element: <PrivateRoute> <BorrowBooks></BorrowBooks> </PrivateRoute>,
            loader:() => fetch(`http://localhost:5000/borrowBooks`)
        },
      ]
    },
  ]);

export default router;