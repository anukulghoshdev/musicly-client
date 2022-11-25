import {
    useQuery,

} from '@tanstack/react-query'
import React, { useEffect, useState } from 'react';
import Loader from '../../shared/Loader/Loader';
import CategoryCard from './CategoryCard';

const Categories = () => {


    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='w-4/5 mx-auto '>
            <h3 className='text-center text-2xl text-slate-900 font-semibold mt-16'>Shop By Categories </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  text-center w-5/6 mx-auto mt-8 '>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>

    );
};

export default Categories;