import { Navigate, createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Character } from "../Pages/Character/Character";

export const Router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/character/:id",
    element: <Character />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]);
