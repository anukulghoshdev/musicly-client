import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../shared/Loader/Loader';
import { RiDeleteBin6Fill } from "react-icons/ri";


const AllBuyers = ({ setDeletedUser }) => {
    const url = `https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/users/buyer?role=Buyer`
    const { data: buyers = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })


    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            {/* <!-- component --> */}
            {<div className="md:px-10 py-3 w-full">
                <h2 className='text-4xl text-slate-900'>All Buyers</h2>
                <div className="shadow overflow-hidden rounded border-b border-gray-200">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Role</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {
                                buyers?.map(buyer =>
                                    <tr>
                                        <td className="w-1/3 text-left py-3 px-4">{buyer.name}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{buyer.email}</td>
                                        <td className="w-1/3 text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">{buyer.role}</a></td>
                                        <td className="w-1/3 text-left py-3 px-4">
                                            <label htmlFor="Delete-Confirm-Modal" button onClick={() => setDeletedUser(buyer)} type="button" className="inline-block px-4 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer"><RiDeleteBin6Fill></RiDeleteBin6Fill></label>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>}
        </div>
    );
};

export default AllBuyers;