import { Navigate, useLocation } from "react-router-dom";
import AuthHooks from "../../Authentication/Provaider/AuthHooks";
import useAdmin from "../../Hooks/useAdmin";

const AdminRoute = ({children}) => {
    const { user, loading } = AuthHooks()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;