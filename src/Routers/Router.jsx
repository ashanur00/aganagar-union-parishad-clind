import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import FromApplication from "../Pages/FromApplication/FromApplication";
import ErrorPages from "../Component/Error/ErrorPages";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPages/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/fromApplication',
          element: <FromApplication/>,
        }
      ]
    },
  ]);