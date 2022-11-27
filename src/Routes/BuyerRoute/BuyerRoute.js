import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import Loader from '../../pages/shared/Loader/Loader';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, buyerLoading] = useBuyer(user?.email)
    const location = useLocation();


    if(loading || buyerLoading){
        return <Loader></Loader>
    }

    if(user && isBuyer){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default BuyerRoute;