import React from 'react';
import { Link } from 'react-router-dom';

const ProductCart = ({ product }) => {
    const { product_name, product_pic, resale_price, original_price, years_of_use } = product;
    return (
        <section class="bg-[#F3F4F6] ">
            <div class="mb-10 overflow-hidden rounded-lg bg-white border-2 border-lime-900">
                <img src={product_pic} alt="" className='w-full h-[60]' />
                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                        <Link
                            to="#"
                            class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                            {product_name}
                        </Link>
                    </h3>
                    <p class="text-body-color mb-7 text-base leading-relaxed">
                        Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                        Lorem consectetur adipiscing elit.
                    </p>
                    <Link
                        to="#"
                        class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </section >
    );
};

export default ProductCart;