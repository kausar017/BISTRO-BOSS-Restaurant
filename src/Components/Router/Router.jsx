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
import Contact from "../../pages/Contact/Contact";
import AddItem from "../../pages/AddItem/AddItem";
import AdminRoute from "../../pages/AdminRoute/AdminRoute";
import ManageItem from "../../pages/ManageItem/ManageItem";
import ManageItemUpdate from "../../pages/ManageItem/ManageItemUpdate";
import Payment from "../../pages/Payment/Payment";
import PaymentHIstroy from "../../pages/PaymentHistroy/PaymentHIstroy";
import AdminHome from "../../pages/AdminHome/AdminHome";
import UserHome from "../../pages/UserHome/UserHome";


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
            {
                path: 'contact',
                element: <Contact></Contact>
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
    // dasbord route
    {
        path: '/dasbord',
        element: <PrivetRoute>
            <Dashbord></Dashbord>
        </PrivetRoute>,
        children: [
            // normal user routes
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/dasbord/Payment',
                element:
                    <Payment></Payment>

            },
            {
                path: '/dasbord/userHome',
                element:
                   <UserHome></UserHome>

            },
            {
                path: '/dasbord/PaymentHistroy',
                element:
                    <PaymentHIstroy></PaymentHIstroy>

            },
            // admin rputes
            {
                path: '/dasbord/adminHome',
                element: <AdminRoute>
                    <AdminHome></AdminHome>
                </AdminRoute>
            },
            {
                path: '/dasbord/additem',
                element: <AdminRoute>
                    <AddItem></AddItem>
                </AdminRoute>
            },

            {
                path: '/dasbord/users',
                element: <AdminRoute>
                    <AllUsers></AllUsers>
                </AdminRoute>
            },
            {
                path: '/dasbord/manageItems',
                element: <AdminRoute>
                    <ManageItem></ManageItem>
                </AdminRoute>
            },
            {
                path: '/dasbord/update/:id',
                element: <AdminRoute><ManageItemUpdate></ManageItemUpdate></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/manu/${params.id}`)
            },

        ]
    }

]);


export default Router;