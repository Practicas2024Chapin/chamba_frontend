import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/DashboardHome/HomePage";
import UserPage from "../pages/UserPage/UserPage";
import CompanyPage from "../pages/Company/CompanyPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import InboxPage from "../pages/Inbox/InboxPage";
import ProfilePage from "../pages/Perfil/MyProfile";
import AdminPage from "../pages/Admin/AdminPage";
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
    },
    {
        path: "/inbox",
        element: <InboxPage />
    }, 
    {
        path:"/profile", 
        element: <ProfilePage/>
    },
    {
        path:"/admin",
        element: <AdminPage/>
    }
])


function Routes() {
    return (
        //Establecer la ruta para rutas
        <RouterProvider router={routes} />
    )

}

export default Routes;