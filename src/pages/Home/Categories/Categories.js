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
            const res = await fetch('https://musicly-server-anukulghoshdev.vercel.app/categories')
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className=' bg-slate-100  py-12'>
            <h3 className='text-center text-3xl text-slate-900 font-semibold mt-16'>Shop By Categories </h3>
            <div className='pb-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-2/4  mx-auto py-10'>
                    {
                        categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Categories;