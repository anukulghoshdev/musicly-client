import React from 'react';
// import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

// import { Navigation } from 'swiper';

const BannerItem = ({ slide }) => {
    const {  image } = slide;
    return (

        // <div id={`slide${id}`} className="carousel-item relative bg-gradient-to-tr from-stone-900 to-slate-500 w-full h-[800px]">
        //     <img src={image} alt='' className="w-full h-full object-cover absolute mix-blend-overlay bg-black" />

        //     <div className="absolute  left-1/2 top-1/3 flex justify-end transform translate-y-1/2  -translate-x-1/2  ">
        //         <h2 className='text-3xl lg:text-6xl text-gray-50 font-extrabold'>
        //             {text}
        //         </h2>
        //     </div>

        //     {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-[55%] w-2/5">
        //         <p className='text-white text-sm hidden lg:block'>They are many variations of passages of availabel. But the mojority have suffered alteration in some form.</p>
        //     </div> */}

        //     <div className="absolute flex justify-start transform -translate-y-1/2 left-1/3 lg:left-[45%] top-[69%] w-2/5">
        //         <button className="btn btn-secondary   ">Shop Now</button>
        //     </div>

        //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //         <a href={`#slide${prev}`} className="bg-orange-500 btn btn-circle">❮</a>
        //         <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        //     </div>
        // </div>


        <Swiper
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide>
                <div className='relative w-full h-[800px] bg-gradient-to-t from-black'>
                    <img src={image} alt="" className='w-full h-full object-cover mix-blend-overlay' />

                    <div className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 space-y-6 text-center '>
                        <h1 className='text-7xl font-semibold text-white  mb-0'>From Starters To Pro... </h1>

                        <div className='w-full text-center'>
                            <p className='text-[16px]   text-white w-3/4 inline-block
                            '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat fuga recusandae maiores id quasi rem impedit. Beatae quis incidunt nemo.</p>
                        </div>

                        <button className="btn btn-warning">Shop Now</button>
                    </div>

                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default BannerItem;


