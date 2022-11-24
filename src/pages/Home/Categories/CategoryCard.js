import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, Category_name, img } = category;
    return (
        <Link to={`/category/${_id}`}>
            <div className='bg-gradient-to-tr from-purple-900 to-green-700 h-24 w-40  relative hover:from-yellow-900 hover:to-stone-800 rounded-lg'>
                <img src={img} alt="" className='w-full h-full object-cover absolute mix-blend-overlay rounded-lg' />
                <h2 className='text-xl text-slate-50 font-bold absolute left-2/4 top-1/2 transform -translate-y-1/2 -translate-x-1/2'> {Category_name}</h2>
            </div>
        </Link>
    );
};

export default CategoryCard;