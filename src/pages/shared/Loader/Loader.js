import React from 'react';

const Loader = () => {
    return (

        <div className='flex items-center justify-center min-h-screen'>
            <div  style={{borderTopColor: "transparent"}} className="w-8 h-8 border-4 border-blue-600 rounded-full animate-spin"></div>
            <p className="ml-2">Loading...</p>
        </div>

    );
};

export default Loader;

//style="border-top-color:transparent"