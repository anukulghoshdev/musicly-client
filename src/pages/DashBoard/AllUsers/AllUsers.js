import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteConfirmModal from '../../../components/DeleteConfirmModal/DeleteConfirmModal';
import AllBuyers from '../AllBuyers/AllBuyers';
import AllSeller from '../AllSeller/AllSeller';

const AllUsers = () => {
    const [deletedUser, setDeletedUser] = useState(null);

    const closeModal = () => {
        setDeletedUser(null)
    }
    const handleDeleteUser = user => {
        fetch(`https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/user/${user._id}`, {
            method: 'DELETE',
            authorization: `bearer ${localStorage.getItem('musiclyToken')}`
        })
            .then(res => res.json())
            .then(data=>{
                if(data.deletedCount){
                    toast.success('Deleted Successfully')
                }

            })
    }

    return (
        <div>
            <h2 className='text-6xl'>All Users</h2>
            <AllBuyers
                setDeletedUser={setDeletedUser}
            />

            <AllSeller
                setDeletedUser={setDeletedUser}
            />

            {
                deletedUser &&
                <DeleteConfirmModal
                    title={`Are you sure you want to delete? `}
                    message={`If delete once it can not be undone!`}
                    successAction={handleDeleteUser}
                    modalData={deletedUser}
                    closeModal={closeModal}
                />
            }
        </div>
    );
};

export default AllUsers;