import React from 'react';

const Pricing = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">Our plans for you</h2>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 md:mb-8">
                    {/* <!-- plan - start --> */}
                    <div class="flex flex-col border rounded-lg p-4 pt-6">
                        <div class="mb-12">
                            <div class="text-gray-800 text-2xl font-bold text-center mb-2">Free</div>

                            <p class="text-gray-500 text-center mx-auto px-8 mb-8">For individuals and organizations who want to try our system</p>

                            <div class="space-y-2">
                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">1.000 MB file storage</span>
                                </div>
                                {/* <!-- check - end --> */}

                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">2.000 MB bandwidth per month</span>
                                </div>
                                {/* <!-- check - end --> */}

                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">200 tasks per month</span>
                                </div>
                                {/* <!-- check - end --> */}

                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">Comunity support</span>
                                </div>
                                {/* <!-- check - end --> */}
                            </div>
                        </div>

                        <div class="flex flex-col gap-8 mt-auto">
                            <div class="flex justify-center items-end gap-1">
                                <span class="self-start text-gray-600">$</span>
                                <span class="text-4xl text-gray-800 font-bold">0</span>
                                <span class="text-gray-500">per user/month</span>
                            </div>

                            <a href="#" class="block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Join for free</a>
                        </div>
                    </div>
                    {/* <!-- plan - end --> */}

                    {/* <!-- plan - start --> */}
                    <div class="flex flex-col border-2 border-indigo-500 rounded-lg relative p-4 pt-6">
                        <div class="mb-12">
                            <div class="flex justify-center absolute -top-3 inset-x-0">
                                <span class="h-6 flex justify-center items-center bg-indigo-500 text-white text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1">most popular</span>
                            </div>

                            <div class="text-gray-800 text-2xl font-bold text-center mb-2">Team</div>

                            <p class="text-gray-500 text-center mx-auto px-8 mb-8">Avanced feaures for Individuals and organizations</p>

                            <div class="space-y-2">
                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">Unlimited file storage</span>
                                </div>
                                {/* <!-- check - end --> */}

                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">10 GB bandwidth per month</span>
                                </div>
                                {/* <!-- check - end --> */}

                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">10.000 tasks per month</span>
                                </div>
                                {/* <!-- check - end --> */}

                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">Email support</span>
                                </div>
                                {/* <!-- check - end --> */}

                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">100 Webhooks</span>
                                </div>
                                {/* <!-- check - end --> */}
                            </div>
                        </div>

                        <div class="flex flex-col gap-8 mt-auto">
                            <div class="flex justify-center items-end gap-1">
                                <span class="self-start text-gray-600">$</span>
                                <span class="text-4xl text-gray-800 font-bold">19</span>
                                <span class="text-gray-500">per user/month</span>
                            </div>

                            <a href="#" class="block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Continue with Team</a>
                        </div>
                    </div>
                    {/* <!-- plan - end --> */}

                    {/* <!-- plan - start --> */}
                    <div class="flex flex-col border rounded-lg p-4 pt-6">
                        <div class="mb-12">
                            <div class="text-gray-800 text-2xl font-bold text-center mb-2">Enterprise</div>

                            <p class="text-gray-500 text-center mx-auto px-8 mb-8">Maximum performace for organisations</p>

                            <div class="space-y-2">
                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">Unlimited file storage</span>
                                </div>
                                {/* <!-- check - end --> */}

                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">Unlimited bandwidth per month</span>
                                </div>
                                {/* <!-- check - end --> */}

                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">1.000.000 tasks per month</span>
                                </div>
                                {/* <!-- check - end --> */}

                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">Email and phone support</span>
                                </div>
                                {/* <!-- check - end --> */}

                                {/* <!-- check - start --> */}
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="text-gray-600">Unlimited Webhooks</span>
                                </div>
                                {/* <!-- check - end --> */}
                            </div>
                        </div>

                        <div class="flex flex-col gap-8 mt-auto">
                            <div class="flex justify-center items-end gap-1">
                                <span class="self-start text-gray-600">$</span>
                                <span class="text-4xl text-gray-800 font-bold">49</span>
                                <span class="text-gray-500">per user/month</span>
                            </div>

                            <a href="#" class="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact Sales</a>
                        </div>
                    </div>
                    {/* <!-- plan - end --> */}
                </div>

                <div class="text-gray-500 text-sm sm:text-base text-center">Need help deciding? <a href="#" class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Get in touch</a>.</div>
            </div>
        </div>
    );
};

export default Pricing;