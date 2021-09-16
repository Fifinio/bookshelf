import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
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

    //signup user, params from signup.js, this function is passed in {value} obj and passed to AuthContext.Provider
    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential.user)
            })
            .catch((error) => {
                setErrorCode(error.code);
                setErrorMessage('Something went wrong. Please try again.');
            })
    }

    //signup user, params from signin.js, this function is passed in {value} obj and passed to AuthContext.Provider 
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
        }, [])
        return unsubscribe
    })

    //logout user, passed in Authcontext.Provider value
    function logout(){
        signOut(auth).then(() => {
            setCurrentUser('')
            console.log(`Wylogowano użytkownika ${currentUser.email}`)
            console.log('=============================================')
        })
        .catch((error) => {
            setErrorCode(error.code)
        })
    }

    //value object passed in AutContext.Provider
    const value = {
        currentUser,
        signup,
        signin,
        logout,
        errorCode,
        errorMessage
    }

    if(currentUser){
        console.log("ZALOGOWANO " + JSON.stringify(currentUser.email))
    } else {
        console.log("BRAK ZALOGOWANEGO UŻYTKOWNIKA")
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}