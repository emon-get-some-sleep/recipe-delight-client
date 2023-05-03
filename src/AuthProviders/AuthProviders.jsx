import React, { createContext, useEffect, useState } from 'react';
import app from '../components/firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext('');
const AuthProviders = ({children}) => {
    const [user, setUser] = useState('');

    const newUser = (name, photoURL, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authDetails = {
        user,
        newUser,

    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
        setUser(loggedInUser);
       })
       return () => {
        unsubscribe();
       }
    }, [])
    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;