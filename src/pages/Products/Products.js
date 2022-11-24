import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img2 from '../../assests/images/banner-imgs/img2.jpg'
import ProductCart from './ProductCart';

const Products = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <div className='bg-gradient-to-tr from-purple-900 to-green-700 h-96 w-full  relative'>
                <img src={img2} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />

                <div className='p-24'>
                    <h2 className='text-7xl text-slate-50 font-bold absolute md:left-40'> Products</h2>
                </div>
            </div>

            <h2 className='text-3xl font-bold text-center'>Products {data.length}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                {
                    data.map(product => <ProductCart key={product._id} product={product}></ProductCart>)
                }
            </div>

        </div>
    );
};

export default Products;