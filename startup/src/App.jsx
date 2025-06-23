import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./components/pages/Home";
import Detail from "./Detail/Detail";
import Request from "./Detail/Request";
import Login from "./login/Login";
import Sign from "./login/Sign";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/detail",
          element: <Detail />,
        },
        {
          path: "/detail/:id", // Dynamic route for Detail
          element: <Detail />,
        },
      ],
    },
    {
      path: "/request",
      element: <Request />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign",
      element: <Sign />,
    },
  
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
