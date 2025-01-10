import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.init";
import useAxiosPiblic from "../../Hooks/useAxiosPiblic";

export const AuthContext = createContext(null)

const AuthProvaider = ({ children }) => {

    const axiosPiblic = useAxiosPiblic()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const creatAcount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateuserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
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
        updateuserProfile,
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
            if (currnetUser) {
                // get token
                const userInfo = { email: currnetUser.email }
                axiosPiblic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false)
                        }
                    })
            } else {
                //remove token
                localStorage.removeItem('access-token')
                setLoading(false)
            }

            console.log(currnetUser);

        })
        return () => {
            return unsubscrib()
        }
    }, [axiosPiblic])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;