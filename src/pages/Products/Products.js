import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import img2 from '../../assests/images/banner-imgs/img2.jpg'
import BuyingModal from '../../components/BuyingModal/BuyingModal';
import ProductCart from './ProductCart';

const Products = () => {
    const data = useLoaderData()
    const category_name = data[0].Category_name;
    // console.log(data);

    const [sell_product, setSell_product]=useState(null);
  


    return (
        <div>
            <div className='bg-gradient-to-tr from-purple-900 to-green-700 h-96 w-full  relative'>
                <img src={img2} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />

                <div className='p-24'>
                    <h2 className='text-7xl text-slate-50 font-bold absolute md:left-40'> {category_name}</h2>
                </div>
            </div>

            <h2 className='text-3xl font-bold text-center'>Products {data.length}</h2>

            <div className=' mx-auto w-4/6'>
                <div className='w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        data.map(product => <ProductCart key={product._id} product={product} setSell_product={setSell_product}></ProductCart>)
                    }
                </div>
            </div>

            {
                sell_product && <BuyingModal sell_product={sell_product} setSell_product={setSell_product}></BuyingModal>
            }

        </div>
    );
};

export default Products;