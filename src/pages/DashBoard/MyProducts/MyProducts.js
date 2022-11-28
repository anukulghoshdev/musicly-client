import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loader from '../../shared/Loader/Loader';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.displayName);

    const { data: myproducts = [], isLoading } = useQuery({
        queryKey: ['myproducts', user.displayName],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?seller_name=${user.displayName}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('musiclyToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>

            <div className="md:px-10 py-3 w-full">
                <h2 className='text-4xl text-slate-900'>My Products</h2>
                <div className="shadow overflow-hidden rounded border-b border-gray-200">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Product Image</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Product Name</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Resale Price</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Original Price</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Meeting Location</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Sales Status</th>
                                
                                
                                
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {
                                myproducts?.map(product => 
                                    <tr className='border' key={product._id}>
                                        <td className="w-1/3 text-left py-3 px-4">
                                            <img className='w-20' src={product.product_pic} alt="" />
                                        </td>
                                        <td className="w-1/3 text-left py-3 px-4">{product.product_name}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{product.resale_price}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{product.original_price}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{product.location}</td>
                                        <td className="w-1/3 text-left py-3 px-4"><button className='btn btn-xs'> Available</button></td>
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

export default MyProducts;