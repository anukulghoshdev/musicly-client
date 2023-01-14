import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../shared/Loader/Loader';
import AdvertisedItemsCard from './AdvertisedItemsCard';

import Slider from "react-slick";


const AdvertisedItems = () => {



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://musicly-server-anukulghoshdev.vercel.app/products/advertise`)
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (







        // <div className="bg-[#e0fbfc] flex  justify-center py-16 overflow-hidden">

        //     <div>
        //         <h2 className='text-4xl font-semibold block text-center'>Advertise Products</h2>


        //         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 py-8 px-4'>

        //             {
        //                 products.map((product, i) => <AdvertisedItemsCard
        //                     product={product}
        //                 />)
        //                 // products.map(product => console.log(product))
        //             }

        //         </div>
        //     </div>
        // </div>



        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">Featured Products</h2>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {
                        products.map((product, i) => <AdvertisedItemsCard
                            product={product}
                        />)
                    }
                </div>
            </div>
        </div>





    );
};

export default AdvertisedItems;

