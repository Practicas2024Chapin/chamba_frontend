import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/DashboardHome/HomePage";
import Page1 from "../pages/DashboardHome/Page1";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/pagina1",
        element: <Page1 />
    }
])

function Routes() {
    return (
        //Establecer la ruta para rutas
        <RouterProvider router={routes} />
    )

}

export default Routes