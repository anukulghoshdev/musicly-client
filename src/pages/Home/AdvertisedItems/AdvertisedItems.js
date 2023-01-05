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







        <div className="bg-[#e0fbfc] flex  justify-center py-16 overflow-hidden">

            <div>
                <h2 className='text-4xl font-semibold block text-center'>Advertise Products</h2>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 py-8 px-4'>

                    {
                        products.map((product, i) => <AdvertisedItemsCard
                            product={product}
                        />)
                        // products.map(product => console.log(product))
                    }

                </div>
            </div>
        </div>





    );
};

export default AdvertisedItems;

