import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Loader from '../../shared/Loader/Loader';
import AdvertisedItemsCard from './AdvertisedItemsCard';

const AdvertisedItems = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const {data:products, isLoading}=useQuery({
        queryKey:['products'],
        queryFn: async()=>{
            const res = await fetch(`https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/products`)
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='py-14 text-center  max-w-7xl mx-auto'>
            <h3 className='text-3xl font-semibold my-7' >Advertised Products {products.length}</h3>
            <Carousel className='py-7 my-10 ' responsive={responsive}>
                {
                    products.map((product, i)=>product.advertise && <AdvertisedItemsCard 
                        product={product}
                    />)
                }

            </Carousel>;
        </div>
    );
};

export default AdvertisedItems;

