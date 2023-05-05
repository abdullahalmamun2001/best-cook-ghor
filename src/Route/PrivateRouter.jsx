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
        return <progress className="progress progress-warning w-56" value="40" max="100"></progress>
    }
    
    return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>

}
export default PrivateRouter;