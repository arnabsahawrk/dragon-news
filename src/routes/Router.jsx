import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Errors/ErrorPage";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import SingleNews from "../pages/SingleNews/SingleNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "newsDetails/:id",
        element: <SingleNews />,
      },
    ],
  },
]);

export default router;
