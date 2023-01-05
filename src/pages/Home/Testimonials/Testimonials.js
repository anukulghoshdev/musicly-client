import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    return (
        <section class="relative pt-24 pb-32 bg-white overflow-hidden">
            <img class="absolute top-0 left-0" src="flaro-assets/images/testimonials/gradient.svg" alt="" />
            <img class="absolute bottom-0 right-0" src="flaro-assets/images/testimonials/gradient2.svg" alt="" />
            <div class="relative z-10 container px-4 mx-auto">
                <h2 class="mb-16 text-4xl md:text-5xl font-bold font-heading text-center tracking-px-n leading-tight">Don&apos;t just take our word for it</h2>
                <div class="flex flex-wrap -m-3">
                    <div class="w-full md:w-1/2 lg:w-1/3 p-3">
                        <div class="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                            <div class="flex flex-col justify-between h-full">
                                <div class="mb-5 block">
                                    <div class="flex flex-wrap mb-4 -m-2">

                                        <div className="avatar">
                                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://images.unsplash.com/photo-1472711649025-510d7c09a6fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80" alt='' />
                                            </div>
                                        </div>

                                        <div class="w-auto p-2 mx-2">
                                            <h3 class="font-semibold leading-normal">Jacob Jones</h3>
                                            <p class="text-gray-500 uppercase">@brooklysim</p>
                                        </div>

                                    </div>
                                    <p class="text-lg font-medium">If you haven&rsquo;t tried out Flaro App yet, I would definitely recommend it for both designers and developers &#x1F919;&#x1F3FB;</p>
                                </div>
                                <div class="block">
                                    <p class="text-sm text-gray-500 font-medium">3 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 p-3">
                        <div class="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                            <div class="flex flex-col justify-between h-full">
                                <div class="mb-5 block">
                                    <div class="flex flex-wrap mb-4 -m-2">

                                        <div className="avatar">
                                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='' />
                                            </div>
                                        </div>


                                        <div class="w-auto p-2 mx-2">
                                            <h3 class="font-semibold leading-normal">Wade Warren</h3>
                                            <p class="text-gray-500 uppercase">@brooklysim</p>
                                        </div>
                                    </div>
                                    <p class="text-lg font-medium">If you are thinking of a design partner to help you convert more customers, Flaro is a great choice.</p>
                                </div>
                                <div class="block">
                                    <p class="text-sm text-gray-500 font-medium">3 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/3 p-3">
                        <div class="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                            <div class="flex flex-col justify-between h-full">
                                <div class="mb-5 block">
                                    <div class="flex flex-wrap mb-4 -m-2">
                                        <div className="avatar">
                                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='' />
                                            </div>
                                        </div>
                                        <div class="w-auto p-2 mx-2">
                                            <h3 class="font-semibold leading-normal">Bessie Cooper</h3>
                                            <p class="text-gray-500 uppercase">@brooklysim</p>
                                        </div>
                                    </div>
                                    <p class="text-lg font-medium">We have built a few web apps using Flaro. It saves us a lot of time, because we don&apos;t have to build design features from scratch.</p>
                                </div>
                                <div class="block">
                                    <p class="text-sm text-gray-500 font-medium">3 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default Testimonials;