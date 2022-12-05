import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loader from '../../shared/Loader/Loader';
import { RiDeleteBin6Fill } from "react-icons/ri";
import DeleteConfirmModal from '../../../components/DeleteConfirmModal/DeleteConfirmModal';
import toast from 'react-hot-toast';

const AllSeller = ({ setDeletedUser }) => {
    const [sellers, setSellers] = useState([]);
    const [loader, setLoader] = useState(true);


    // const { data: sellers = [], isLoading } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch("https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/users/seller?role=Seller")
    //         const data = res.json()
    //         return data
    //     }
    // })

    // if (isLoading) {
    //     return <Loader></Loader>
    // }

    useEffect(() => {
        fetch("https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/users/seller?role=Seller")
            .then(res => res.json())
            .then(data => {
                setSellers(data)
                setLoader(false)
            })
    }, [])
    if (loader) {
        return <Loader></Loader>
    }

    const handleVerifySeller=(id)=>{ // /user/seller/verify/:id
        fetch(`https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/user/seller/verify/${id}`,{ //{acknowledged: true, modifiedCount: 1, upsertedId: null, upsertedCount: 0, matchedCount: 1}
            method: 'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                toast.success('Seller verified')
            }
        })

    }


    return (
        <div className="md:px-10 py-3 w-full">
            <h2 className='text-4xl text-slate-900'>All Sellers</h2>
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">email</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">role</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Verify</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {
                            sellers?.map(seller =>
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">{seller.name}</td>
                                    <td className="w-1/3 text-left py-3 px-4">{seller.email}</td>
                                    <td className="w-1/3 text-left py-3 px-4">{seller.role}</td>
                                    <td className="w-1/3 text-left py-3 px-4">
                                        {
                                            seller?.verified ? 
                                            <button  type="button" class="inline-block px-4 py-1 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out" disabled>Verifid</button>
                                            : 
                                            <button onClick={()=>handleVerifySeller(seller._id)} type="button" class="inline-block px-4 py-1 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Verify Seller</button>
                                        }
                                    </td>
                                    <td className="w-1/3 text-left py-3 px-4">
                                        <label htmlFor="Delete-Confirm-Modal" button onClick={() => setDeletedUser(seller)} type="button" className="inline-block px-4 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer"><RiDeleteBin6Fill></RiDeleteBin6Fill></label>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllSeller;