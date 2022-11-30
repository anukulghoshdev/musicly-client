import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { Result } from 'postcss';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loader from '../../shared/Loader/Loader';

const AddPrducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)

    const navigate = useNavigate();

    const posted_time = new Date();

    const imgHostKey = process.env.REACT_APP_img_bb_host_api;




    const conditions = [
        {
            id: 1,
            name: 'Excelent',
        },
        {
            id: 2,
            name: 'Good'
        },
        {
            id: 3,
            name: 'fair'
        }

    ]

    const handleAddProduct = (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=12000&key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData);
                if (imageData.success) {
                    // console.log(imageData.data.url);
                    const product = {
                        product_name: data.product_name,
                        product_pic: imageData.data.display_url,
                        Category_name: data.Category_name,
                        resale_price: data.resale_price,
                        location: data.location,
                        original_price: data.original_price,
                        years_of_use: data.years_of_use,
                        posted_time: data.posted_time,
                        seller_name: data.seller_name,
                        condition: data.condition,
                        description: data.description,

                    }
                    // save product to db
                    fetch("http://localhost:5000/addproducts", {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('musiclyToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then((res) => res.json())
                        .then(result => {
                            console.log(result);
                            if(result.acknowledged){
                                toast.success('product added successfully')
                                navigate('/dashboard/myproducts')
                                

                            }
                        })
                }
            })
    }

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/productCategories")
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }


    return (
        <div className="mt-10 sm:mt-0 md:p-10">
            <div className="md:grid md:grid-cols-3 md:gap-6">

                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-2xl  font-bold leading-6 text-gray-900">Add Product</h3>
                        <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                    </div>
                </div>

                <div className="mt-5 md:col-span-2 md:mt-0">
                    <div >
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <form onSubmit={handleSubmit(handleAddProduct)} className="grid grid-cols-6 gap-6 ">

                                    <div className="form-control col-span-6 sm:col-span-3">
                                        <label for="product_name" className="block text-sm font-medium text-gray-700">Product Name</label>
                                        <input {...register("product_name", { required: "Product Name is required" })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                                    </div>

                                    <div className=" form-control col-span-6 sm:col-span-3">
                                        <label for="resale_price" className="block text-sm font-medium text-gray-700">Resale Price</label>
                                        <input {...register("resale_price", { required: "Price Name is required" })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                                    </div>

                                    <div className=" form-control col-span-6 sm:col-span-3">
                                        <label for="resale_price" className="block text-sm font-medium text-gray-700">Origianl Price</label>
                                        <input {...register("original_price", { required: "Price Name is required" })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label for="condition" className="block text-sm font-medium text-gray-700">Product Condition</label>
                                        <select {...register("condition", { required: "condition is required" })} className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                            {
                                                conditions.map(condition => <option key={condition.id} value={condition.name}>{condition.name}</option>)
                                            }
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label for="Category_name" className="block text-sm font-medium text-gray-700">Product Category</label>
                                        <select {...register("Category_name", { required: "condition is required" })} className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                            {
                                                categories.map(category => <option key={category._id} value={category.Category_name}>{category.Category_name}</option>)
                                            }
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label for="street-address" className="block text-sm font-medium text-gray-700">Location</label>
                                        <input {...register("location", { required: "Location is required" })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="description" className="block text-sm font-medium text-gray-700">Description</label>
                                        <textarea {...register("description", { required: "Description is required" })} className="textarea textarea-bordered w-full" placeholder="Type here..."></textarea>
                                    </div>



                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="years_of_use" className="block text-sm font-medium text-gray-700">Years of Purchase</label>
                                        <input {...register("years_of_use", { required: "Years of Purchase is required" })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="seller_name" className="block text-sm font-medium text-gray-700">Seller Name</label>
                                        <input {...register("seller_name")} defaultValue={user.displayName} readOnly type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="posted_time" className="block text-sm font-medium text-gray-700">Posted Time</label>
                                        <input {...register("posted_time")} defaultValue={posted_time} readOnly type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                                    </div>



                                    <div className="form-control w-full  ">
                                        <label className="label">
                                            <span className="label-text">Product Photo</span>
                                        </label>
                                        <input {...register("image", { required: "Image is required" })} type="file" className="input input-bordered w-full " />
                                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                                    </div>

                                    <div className="bg-gray-50  text-right  ">
                                        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add Product</button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPrducts;
















