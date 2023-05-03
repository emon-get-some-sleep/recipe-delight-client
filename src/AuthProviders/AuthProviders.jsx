import React, { createContext } from 'react';

export const AuthContext = createContext('');
const AuthProviders = ({children}) => {
    const authDetails = {

    }
    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;