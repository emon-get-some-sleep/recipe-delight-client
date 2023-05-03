import React, { createContext, useEffect, useState } from 'react';
import app from '../components/firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithRedirect } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext('');
const AuthProviders = ({children}) => {
    const [user, setUser] = useState('');

    const newUser = (name, photoURL, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }
   
    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signUpWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const signInWithGithub = () => {
       return signInWithRedirect(auth, githubProvider);
    }
    const signInWithGoogle = () => {
       return signInWithRedirect(auth, googleProvider);
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
        signInWithGoogle


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