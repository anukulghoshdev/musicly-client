import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    




    return (
        <div>
            <h2 className='text-2xl text-slate-900'>My orders</h2>
            <h2 className='text-xs text-slate-900'>For Buyers/user</h2>
        </div>
    );
};

export default MyOrders;