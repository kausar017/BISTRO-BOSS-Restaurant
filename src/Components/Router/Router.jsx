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
import PrivetRoute from "../../Authentication/PrivetRoute/PrivetRoute";
import Dashbord from "../MainLayout/Dashbord";
import MyCart from "../../pages/My-Cart/MyCart";
import AllUsers from "../../pages/AllUsers/AllUsers";


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
    },
    {
        path: '/dasbord',
        element: <PrivetRoute>
            <Dashbord></Dashbord>
        </PrivetRoute>,
        children: [
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            // admin path
            {
                path: '/dasbord/users',
                element: <AllUsers></AllUsers>
            }
        ]
    }

]);


export default Router;