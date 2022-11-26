import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loader from '../../shared/Loader/Loader';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/mybookingorders?email=${user?.email}`;

    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['mybookingorders', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('musiclyToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }



    return (
        <div>
            <h2 className='text-xs text-slate-900'>For Buyers/user</h2>

            {/* <!-- component --> */}
            <div className="md:px-10 py-3 w-full">
            <h2 className='text-4xl text-slate-900'>My orders</h2>
                <div className="shadow overflow-hidden rounded border-b border-gray-200">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Product Name</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Product Price</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Meeting Location</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {
                                orders.map(order =>
                                    <tr>
                                        <td className="w-1/3 text-left py-3 px-4">{order.product_name}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{order.product_price}</td>
                                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">{order.phone}</a></td>
                                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">{order.meeting_location}</a></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;