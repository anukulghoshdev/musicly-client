import React from 'react';
import AllBuyers from '../AllBuyers/AllBuyers';
import AllSeller from '../AllSeller/AllSeller';

const AllUsers = () => {
    return (
        <div>
            <h2 className='text-6xl'>All Users</h2>
            <AllBuyers></AllBuyers>
            <AllSeller></AllSeller>
        </div>
    );
};

export default AllUsers;