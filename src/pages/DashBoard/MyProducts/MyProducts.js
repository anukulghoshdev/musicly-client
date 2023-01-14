import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loader from '../../shared/Loader/Loader';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import DeleteConfirmModal from '../../../components/DeleteConfirmModal/DeleteConfirmModal';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const [deletedProduct, setDeletedProduct] = useState(null);

    const { data: myproducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myproducts', user.displayName],
        queryFn: async () => {
            const res = await fetch(`https://musicly-server-anukulghoshdev.vercel.app/myproducts?seller_name=${user.displayName}`, {
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

    const closeModal = () => {
        setDeletedProduct(null)
    }
    
    const handleDeleteProduct = (product) => {
        console.log(product);

        fetch(`https://musicly-server-anukulghoshdev.vercel.app/product/${product._id}`, {
            method: 'DELETE',
            authorization: `bearer ${localStorage.getItem('musiclyToken')}`
        })
            .then(res => res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    refetch()
                    toast.success('Product Deleted Successfully');
                }

            })
    }

    const handleAdvertise=(id)=>{ // 
        fetch(`https://musicly-server-anukulghoshdev.vercel.app/product/advertise/${id}`,{ // {acknowledged: true, modifiedCount: 1, upsertedId: null, upsertedCount: 0, matchedCount: 1}
            method: 'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                toast.success("Product Advertise on Home")
            }
        })
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
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Seller Action</th>



                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {
                                myproducts && myproducts.map(product =>
                                    <tr className='border' key={product._id}>
                                        <td className="w-1/3 text-left py-3 px-4">
                                            <img className='w-20' src={product.product_pic} alt="" />
                                        </td>
                                        <td className="w-1/3 text-left py-3 px-4">{product.product_name}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{product.resale_price}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{product.original_price}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{product.location}</td>
                                        <td className="w-1/3 text-left py-3 px-4">
                                            {
                                                product?.paid ?
                                                    <Link href="#" class="inline-block px-6 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0 " disabled >
                                                        Sold
                                                    </Link>
                                                    :
                                                    <button onClick={()=>handleAdvertise(product._id)} class="w-9/12 py-2 text-base text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-4 md:w-auto">
                                                        Available
                                                    </button>
                                            }
                                        </td>
                                        <td className="w-1/3 text-left py-2 px-5">
                                            <label htmlFor="Delete-Confirm-Modal" onClick={() => setDeletedProduct(product)} type="button" class="inline-block px-4 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer"><RiDeleteBin6Fill></RiDeleteBin6Fill></label>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletedProduct && <DeleteConfirmModal  // title, message, closeModal, successAction, modalData
                    title={`Do you want to Delete this product`}
                    message={`If delete once it cannot be undone`}
                    successAction={handleDeleteProduct}
                    modalData={deletedProduct}
                    closeModal={closeModal}
                />
            }

        </div>
    );
};

export default MyProducts;

