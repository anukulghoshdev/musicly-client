import React from 'react';
import Loader from '../../shared/Loader/Loader';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Newslatter from '../Newslatter/Newslatter';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedItems ></AdvertisedItems>
            <Newslatter/>
            <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;