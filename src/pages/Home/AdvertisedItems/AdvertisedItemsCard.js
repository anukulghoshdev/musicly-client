import React from 'react';
import { Link } from 'react-router-dom';
import './AdvertisedItems.css'
const AdvertisedItemsCard = ({ product }) => {
    const { product_pic, product_name, original_price, years_of_use } = product
    return (

        // <div className="card w-full bg-slate-100 shadow-xl max-h-96 rounded-0">
        //     <figure><img src={product_pic} className="w-full h-52 " alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{product_name}</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>


        // <div className="w-80 rounded-md shadow-md dark:bg-gray-200 dark:text-gray-100 ">
        //     <img src={product_pic} alt="" className="object-cover  w-full rounded-t-md h-60 dark:bg-gray-500" />
        //     <div className="flex flex-col justify-between p-6 space-y-8">
        //         <div className="space-y-2">
        //             <h2 className="text-2xl font-semibold tracking-wide text-gray-900">{product_name}</h2>
        //             <div>
        //                 <p className="dark:text-gray-900">Price: {original_price}</p>
        //                 <p className="dark:text-gray-900">Years of use: {years_of_use}</p>
        //             </div>
        //         </div>
        //         <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-500 dark:text-gray-100">Buy Now</button>
        //     </div>
        // </div>

        <div>
            <Link href="#" class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">

                <img src={product_pic} loading="lazy" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" alt="" />

                <div class="w-full flex flex-col bg-indigo-50 text-center rounded-lg relative p-4">
                    <span class="text-gray-500">{product_name}</span>
                    <span class="text-gray-800 text-lg lg:text-xl font-bold">৳{original_price}</span>
                </div>
            </Link>
        </div>



    );
};

export default AdvertisedItemsCard;