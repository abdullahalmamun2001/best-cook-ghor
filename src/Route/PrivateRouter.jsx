import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthPRovider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    if(user){
        return children;
    }
    
    return <Navigate to='/login' replace={true}></Navigate>

}
export default PrivateRouter;