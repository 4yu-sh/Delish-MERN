import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Landingpage from "../pages/landing/Landingpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
