import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth"
import { firebaseAuth } from "../services/firebase";

const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [errorCode, setErrorCode] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const auth = firebaseAuth;

    //signup user, variables comes from signup.js
    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential.user)
            })
            .catch((error) => {
                setErrorCode(error.code);
                setErrorMessage(error.message);
            })
    }

    //check if user is already logged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            }
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signup,
        errorCode,
        errorMessage
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}