import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from "react-icons/bs";

const ProductCart = ({ product, setSell_product }) => {

    const { product_name, product_pic, location, Category_name, resale_price, original_price, years_of_use, seller_name, posted_time } = product;

    // useEffect(() => {
    //     fetch("https://musicly-server-anukulghoshdev.vercel.app/users/seller?role=Seller")
    //         .then(res => res.json())
    //         .then(data => {
    //             setSellers(data)
        
    //         })
    // }, []) ----------------------

    return (
        <div className="max-w-sm rounded overflow-hidden rounded-t-lg shadow-xl">


            <img className="w-full h-64 rounded-t-lg " src={product_pic} alt="Sunset in the mountains" />



            <div className="pl-5 ">
                <div className="font-bold text-xl my-2">{product_name}</div>
            </div>



            <div className='pl-5 flex justify-between  items-center '>
                <h2 className='text-sm text-slate-800 font-medium'>location: {location}</h2>
                <div className='pr-3'>
                    <div className='flex items-center'>
                        Seller: {seller_name}
                            <BsFillCheckCircleFill className='text-sky-500 ml-1'></BsFillCheckCircleFill>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className="flex flex-col px-6 pt-4 pb-2 border-2 ">

                    <p>{years_of_use}</p>
                    <p>{posted_time.slice(0, 15)}</p>

                </div>
                <div>
                    <h2 className='text-base text-zinc-600 font-bold mr-5'>৳{resale_price}</h2>
                    <h2 className='text-base line-through text-zinc-600 font-bold mr-5'>৳{original_price}</h2>
                </div>

            </div>

            <div className='text-center px-3 py-5'>
                <label onClick={() => setSell_product(product)} htmlFor="BuyingModal" className=" btn btn-primary box-border relative z-30 inline-flex items-center justify-center w-full px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                        Buy Now
                    </span>
                </label>

                {/* <label htmlFor="BuyingModal" className="btn">open modal</label> */}
            </div>

        </div>
    );
};

export default ProductCart;