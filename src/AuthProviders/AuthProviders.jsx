import React, { createContext, useEffect, useState } from 'react';
import app from '../components/firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithRedirect, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext('');
const AuthProviders = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const newUser = (name, photoURL, email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
   
    const signUpWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signUpWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const signInWithGithub = () => {
        setLoading(true);
       return signInWithPopup(auth, githubProvider);
    }
    const signInWithGoogle = () => {
        setLoading(true);
       return signInWithPopup(auth, googleProvider);
    }
    
    const authDetails = {
        user,
        newUser,
        auth,
        updateProfile,
        logOut,
        signIn,
        signUpWithGoogle,
        signUpWithGithub,
        signInWithGithub,
        signInWithGoogle,
        loading,
        sendPasswordResetEmail,


    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
        setUser(loggedInUser);
        setLoading(false);
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