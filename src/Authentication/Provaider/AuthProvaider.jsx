import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.init";

export const AuthContext = createContext(null)

const AuthProvaider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const creatAcount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const GoogleProvaider = new GoogleAuthProvider()
    const Google = () => {
        return signInWithPopup(auth, GoogleProvaider)
    }
    const GithubProvaider = new GithubAuthProvider()
    const Github = () => {
        return signInWithPopup(auth, GithubProvaider)
    }
    const authInfo = {
        creatAcount,
        login,
        logOut,
        Google,
        Github,
        user,
        loading
    }

    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, currnetUser => {
            setUser(currnetUser)
            console.log(currnetUser);
            setLoading(false)
        })
        return () => {
            return unsubscrib()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;