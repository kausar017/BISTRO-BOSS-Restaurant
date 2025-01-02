import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Bannar from "../../pages/Bannar/Bannar";
import Manu from "../../pages/Manu/Manu";
import Loader from "../../pages/Loader/Loader";
import OurShop from "../../pages/OurShop/OurShop";
import Login from "../../AccessPage/Login";
import SingUp from "../../AccessPage/SingUp";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Bannar></Bannar>
            },
            {
                path: '/manu',
                element: <Manu></Manu>
            },
            {
                path: '/lodar',
                element: <Loader></Loader>
            },
            {
                path: '/ourshop/:category',
                element: <OurShop></OurShop>
            },

        ],
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/signup',
        element: <SingUp></SingUp>,
    }
]);


export default Router;