import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthPRovider';
import { Navigate,useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location=useLocation();
    if(user){
        return children;
    }
    if(loader){
        return <h1>Loading</h1>
    }
    
    return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>

}
export default PrivateRouter;