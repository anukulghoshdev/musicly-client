import React from 'react';

const About = () => { 
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Brand new
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Innovative analytics
                            <br className="hidden md:block" />
                            that you{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                will love
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </a>
                </div>
                <div className="relative">
                    <svg
                        className="absolute w-full text-teal-accent-400"
                        fill="currentColor"
                        viewBox="0 0 600 392"
                    >
                        <rect x="0" y="211" width="75" height="181" rx="8" />
                        <rect x="525" y="260" width="75" height="132" rx="8" />
                        <rect x="105" y="83" width="75" height="309" rx="8" />
                        <rect x="210" y="155" width="75" height="237" rx="8" />
                        <rect x="420" y="129" width="75" height="263" rx="8" />
                        <rect x="315" y="0" width="75" height="392" rx="8" />
                    </svg>
                    <svg
                        className="relative w-full text-deep-purple-accent-400"
                        fill="currentColor"
                        viewBox="0 0 600 392"
                    >
                        <rect x="0" y="311" width="75" height="81" rx="8" />
                        <rect x="525" y="351" width="75" height="41" rx="8" />
                        <rect x="105" y="176" width="75" height="216" rx="8" />
                        <rect x="210" y="237" width="75" height="155" rx="8" />
                        <rect x="420" y="205" width="75" height="187" rx="8" />
                        <rect x="315" y="83" width="75" height="309" rx="8" />
                    </svg>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">The</span>
                        </span>{' '}
                        quick, brown fox jumps over a lazy dog
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">The doctor said</h6>
                            <p className="text-sm text-gray-900">
                                Sportacus andrew weatherall goose Refined gentlemen super mario
                                des lynam alpha trion zap rowsdower.
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
                            <p className="text-sm text-gray-900">
                                Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">
                                Baseball ipsum dolor
                            </h6>
                            <p className="text-sm text-gray-900">
                                Bro ipsum dolor sit amet gaper backside single track, manny Bike
                                epic clipless. Schraeder drop gondy.
                            </p>
                        </div>
                    </div>
                    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                        <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                            <h6 className="mb-2 font-semibold leading-5">They urge you</h6>
                            <p className="text-sm text-gray-900">
                                A flower in my garden, a mystery in my panties. Heart attack never
                                stopped old Big Bear.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    );

};

export default About;