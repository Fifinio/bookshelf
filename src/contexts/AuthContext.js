import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
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

    //signup user, params from signup.js, this function is exported in {value} obj and passed to AuthContext.Provider
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

    //signup user, params from signin.js, this function is exported in {value} obj and passed to AuthContext.Provider 
    function signin(email, password) {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setCurrentUser(userCredential.user)
        }).catch((error) => {
            setErrorCode(error.code);
            setErrorMessage('Wrong email or password.');
        })
    }

    //check if user is already logged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
                setErrorCode('');
                setErrorMessage('');
            }
        })
        return unsubscribe
    })


    const value = {
        currentUser,
        signup,
        signin,
        errorCode,
        errorMessage
    }

    if(currentUser){
        console.log("ZALOGOWANO" + JSON.stringify(currentUser.email))
    } else {
        console.log("NIEZALOGOWANO")
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}