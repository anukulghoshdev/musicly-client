import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation  } from "swiper";



import './Banner.css'


import img1 from '../../../assests/images/banner-imgs/img1.jpg'
import img2 from '../../../assests/images/banner-imgs/img2.jpg'
import img3 from '../../../assests/images/banner-imgs/img3.jpg'
// import BannerItem from './BannerItem';

const Banner = () => {

    const bannerImageSlides = [
        {
            image: img1,
            id: 1,
            text: 'From Starters To Pro... ',
            des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, corporis temporibus? Nemo necessitati ptatibus esse assumenda numquam earum harum nisi!",
            prev: 3,
            next: 2
        },
        {
            image: img2,
            id: 2,
            text: 'Exciting Guitar Pack',
            des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, corporis temporibus? Nemo necessitatibus at ibus esse assumenda numquam earum harum nisi!",
            prev: 1,
            next: 3
        },
        {
            image: img3,
            id: 3,
            text: 'New Jersey Guiter',
            des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, corporis temporibus? Nemo necessitatibus at quibusdam, itaque, velit ipsam",
            prev: 2,
            next: 1
        }
    ]





    return (
        <div>

            {/* <div className="carousel w-full">
                {
                    bannerImageSlides.map(slide => <BannerItem key={slide.id} slide={slide}></BannerItem>)
                }
            </div> */}


            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    bannerImageSlides.map(slide => (
                        <SwiperSlide>

                            <div className='relative w-full h-[800px] bg-gradient-to-t from-black'>
                                <img src={slide.image} alt="" className='w-full h-full object-cover mix-blend-overlay' />

                                <div className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 space-y-6 text-center '>
                                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold text-white  mb-0'>{slide.text}</h1>

                                    <div className='w-full text-center hidden md:block'>
                                        <p className='text-[16px]   text-white w-3/4 inline-block
                                '>{slide.des}</p>
                                    </div>

                                    <button className="btn btn-warning">Shop Now</button>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))

                }
            </Swiper>

        </div>
    );
};

export default Banner;