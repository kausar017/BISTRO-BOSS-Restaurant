import React, { useContext } from 'react';
import { AuthContext } from './AuthProvaider';

const AuthHooks = () => {
    const provaider = useContext(AuthContext)
    return {
        provaider
    }
};

export default AuthHooks;