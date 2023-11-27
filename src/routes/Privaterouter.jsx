import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Privaterouter = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location =useLocation()
    console.log(location)

if (user){
    return children
}
if(loading){
    return <div>Loading....</div>
}

    return <Navigate to='/login' replace state={{from: location}}></Navigate>
};

export default Privaterouter;