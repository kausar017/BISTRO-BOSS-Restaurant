import { useContext } from "react";
import { AuthContext } from "./AuthProvaider";


const AuthHooks = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default AuthHooks;