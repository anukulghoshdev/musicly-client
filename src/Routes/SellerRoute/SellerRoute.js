import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useSeller from '../../hooks/useSeller';
import Loader from '../../pages/shared/Loader/Loader';

const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, sellerLoading] = useSeller(user?.email);
    const location = useLocation();
    

    if(loading || sellerLoading){
        return <Loader></Loader>
    }

    if(user && isSeller){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;