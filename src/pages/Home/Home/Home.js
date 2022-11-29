import React from 'react';
import Loader from '../../shared/Loader/Loader';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;