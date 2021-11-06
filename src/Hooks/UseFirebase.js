import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import InitializeAuthentication from "../Pages/Login/Firebase/firebase.init";

InitializeAuthentication()

const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const SignInWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                setUser(error)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)

        });
        return () => unsubscribed;
    }, [])

    const LogOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        SignInWithGoogle,
        LogOut,
        isLoading

    }
}

export default UseFirebase;