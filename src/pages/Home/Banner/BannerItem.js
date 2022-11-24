import React from 'react';

const BannerItem = ({ slide }) => {
    const { id, image, prev, next, text } = slide;
    return (

        <div id={`slide${id}`} className="carousel-item relative bg-gradient-to-tr from-stone-900 to-slate-500 w-full h-96 ">
            <img src={image} alt='' className="w-full h-full object-cover absolute mix-blend-overlay bg-black" />

            <div className="absolute  left-1/2 top-1/3 flex justify-end transform translate-y-1/2  -translate-x-1/2  ">
                <h2 className='text-3xl lg:text-6xl text-gray-50 font-extrabold'>
                    {text}
                </h2>
            </div>

            {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-[55%] w-2/5">
                <p className='text-white text-sm hidden lg:block'>They are many variations of passages of availabel. But the mojority have suffered alteration in some form.</p>
            </div> */}

            <div className="absolute flex justify-start transform -translate-y-1/2 left-1/3 lg:left-[45%] top-[69%] w-2/5">
                <button className="btn btn-secondary   ">Shop Now</button>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default BannerItem;


