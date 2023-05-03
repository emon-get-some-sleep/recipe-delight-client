import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // const [color, setColor] = useState("#ffffff");
    const override = {
        display: "block",
        margin: "30px auto",
        borderColor: "red",
      };

    if(loading){
        return <HashLoader
        color="#36d7b7"
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    }
    const location = useLocation();

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}}  replace/>
};

export default PrivateRoutes;