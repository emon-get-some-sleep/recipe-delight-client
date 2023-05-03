import React, { useContext} from 'react';



import { AuthContext } from '../AuthProviders/AuthProviders';
import { HashLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    
    const {loading, user} = useContext(AuthContext);
    const location = useLocation();
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
    

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}}  replace/>
};

export default PrivateRoutes;