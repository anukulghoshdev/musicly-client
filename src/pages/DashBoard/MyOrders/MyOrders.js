import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loader from '../../shared/Loader/Loader';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/mybookingorders?email=${user?.email}`;

    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['mybookingorders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('musiclyToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
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
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Product Image</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Product Name</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Product Price</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Meeting Location</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Make Payment</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {
                                orders?.map(order =>
                                    <tr key={order._id} className='border'>
                                        <td className="w-1/3 text-left py-3 px-4">
                                            <img className='w-20' src={order.product_img} alt="" />
                                        </td>
                                        <td className="w-1/3 text-left py-3 px-4">{order.product_name}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{order.product_price}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{order.phone}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{order.meeting_location}</td>
                                        <td className="w-1/3 text-left py-3 px-4">
                                            {
                                                order.paid ?
                                                    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                                                        Paid
                                                    </button>
                                                    :

                                                    <Link to={`/dashboard/payment/${order._id}`}>
                                                        <button className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Pay Now</button>
                                                    </Link>
                                            }
                                        </td>

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