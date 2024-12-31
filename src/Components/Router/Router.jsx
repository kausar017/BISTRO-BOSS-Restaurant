import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Bannar from "../../pages/Bannar/Bannar";
import Manu from "../../pages/Manu/Manu";
import Loader from "../../pages/Loader/Loader";
import OurShop from "../../pages/OurShop/OurShop";


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
                path: '/ourshop',
                element: <OurShop></OurShop>
            }
        ]
    },
]);


export default Router;