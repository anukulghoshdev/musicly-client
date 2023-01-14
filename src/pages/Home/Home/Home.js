import React from 'react';
import Loader from '../../shared/Loader/Loader';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Companies from '../Companies/Companies';
import Contact from '../Contact/Contact';
import Contents from '../Contents/Contents';
import Newslatter from '../Newslatter/Newslatter';
import Pricing from '../Pricing/Pricing';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedItems ></AdvertisedItems>
            <Contents/>
            {/* <Pricing/> */}
            <Newslatter/>
            <Testimonials></Testimonials>
            <Companies/>
            <Contact/>
           
        </div>
    );
};

export default Home;