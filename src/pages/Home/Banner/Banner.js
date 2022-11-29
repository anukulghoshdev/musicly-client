import React from 'react';

import img1 from '../../../assests/images/banner-imgs/img1.jpg'
import img2 from '../../../assests/images/banner-imgs/img2.jpg'
import img3 from '../../../assests/images/banner-imgs/img3.jpg'
import BannerItem from './BannerItem';

const Banner = () => {

    const bannerImageSlides = [
        {
            image: img3,
            id: 1,
            text: 'From Starters To Pro... ',
            prev: 3,
            next: 2
        },
        {
            image: img1,
            id: 2,
            text: 'Exciting Guitar Pack',
            prev: 1,
            next: 3
        },
        {
            image: img2,
            id: 3,
            text: 'New Jersey Guiter',
            prev: 2,
            next: 1
        }
    ]


    return (
        <div>

            <div className="carousel w-full">
                {
                    bannerImageSlides.map(slide=><BannerItem key={slide.id} slide={slide}></BannerItem>)
                }
            </div>
        </div>
    );
};

export default Banner;