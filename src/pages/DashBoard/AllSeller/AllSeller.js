import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loader from '../../shared/Loader/Loader';

const AllSeller = () => {
    const [sellers, setSellers] = useState([])
    const [loader, setLoader] = useState(true)
    // const { data: sellers = [], isLoading } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch("http://localhost:5000/users/seller?role=Seller")
    //         const data = res.json()
    //         return data
    //     }
    // })

    // if (isLoading) {
    //     return <Loader></Loader>
    // }

    useEffect(() => {
        fetch("http://localhost:5000/users/seller?role=Seller")
            .then(res => res.json())
            .then(data => {
                setSellers(data)
                setLoader(false)
            })
    }, [])
    if(loader){
        return <Loader></Loader>
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

                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {
                            sellers?.map(seller =>
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">{seller.name}</td>
                                    <td className="w-1/3 text-left py-3 px-4">{seller.email}</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">{seller.role}</a></td>

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