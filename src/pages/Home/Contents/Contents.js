import React from 'react';
import guiter from '../../../assests/guiter.jpg'
import violin from '../../../assests/violin.jpg'

const Contents = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

                <div class="mb-10 md:mb-16">
                    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">New Collections</h2>

                    <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                </div>


                <div class="grid sm:grid-cols-2 gap-6">

                    <a href="#" class="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
                        <img src={guiter} loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                        <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                        <div class="flex flex-col relative">
                            <span class="text-gray-300">Acoustic</span>
                            <span class="text-white text-lg lg:text-xl font-semibold">Guitar</span>
                        </div>
                    </a>



                    <a href="#" class="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
                        <img src={violin} loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                        <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                        <div class="flex flex-col relative">
                            <span class="text-gray-300">Modern</span>
                            <span class="text-white text-lg lg:text-xl font-semibold">Violin</span>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Contents;