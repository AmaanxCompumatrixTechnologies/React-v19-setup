import { lazy } from "react";

export const ROUTES = [
  {
    path: "/",
    element: lazy(() => import("../pages/home/Home.jsx")),
    public: true,
  },
  {
    path: "/login",
    element: lazy(() => import("../pages/auth/Login.jsx")),
    public: true,
  },
//   {
//     path: "/dashboard",
//     element: lazy(() => import("../pages/Dashboard")),
//     public: false,
//     roles: ["user", "admin"],
//   },
//   {
//     path: "/admin",
//     element: lazy(() => import("../pages/Admin")),
//     public: false,
//     roles: ["admin"],
//   },
  {
    path: "*",
    element: lazy(() => import("../pages/auth/NotFound.jsx")),
    public: true,
  },
];
