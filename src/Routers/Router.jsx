import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import FromApplication from "../Pages/FromApplication/FromApplication";
import ErrorPages from "../Component/Error/ErrorPages";
import Contarct from "../Pages/Contarct/Contarct";
import CertificateVerification from "../Pages/CertificateVerification/CertificateVerification";


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
        },
        {
          path: '/contarct',
          element: <Contarct/>,
        },
        {
          path: '/CertificateVerification',
          element: <CertificateVerification/>
        }
      ]
    },
  ]);