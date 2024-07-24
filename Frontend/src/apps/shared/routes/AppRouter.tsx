import { lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import LandingPage from "../components/pages/home/LandingPage";

const routes: Array<RouteObject> = [
  {
    id: "root",
    path: "/",
    element: <RootLayout />,
    children: [
      {
        id: "home",
        path: "/",
        element: <LandingPage />,
      },
      {
        id: "login",
        path: "/login",
        Component: lazy(() => import("../components/auth/SignIn")),
      },
      {
        id: "register",
        path: "/register",
        Component: lazy(() => import("../layout/SignUp")),
      },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
