import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/DashboardHome/HomePage";
import UserPage from "../pages/UserPage/UserPage";
import CompanyPage from "../pages/Company/CompanyPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/user",
        element: <UserPage />
    },
    {
        path: "/company", 
        element: <CompanyPage />
    },
    {
        path: "/login", 
        element: <LoginPage />
    },
    {
        path: "/register", 
        element: <RegisterPage />
    }
])

function Routes() {
    return (
        //Establecer la ruta para rutas
        <RouterProvider router={routes} />
    )

}

export default Routes