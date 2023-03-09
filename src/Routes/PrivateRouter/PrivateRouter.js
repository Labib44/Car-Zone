import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, lodaing } = useContext(AuthContext);
    const location=useLocation();

    if(lodaing){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>;
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRouter;