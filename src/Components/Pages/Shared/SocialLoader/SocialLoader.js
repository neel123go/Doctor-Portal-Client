import React from 'react';

const SocialLoader = () => {
    return (
        <div className='flex justify-center items-center my-10'>
            <button type="button" className="bg-indigo-500 rounded-full w-36 py-2 text-white text-lg" disabled>Loading...</button>
        </div>
    );
};

export default SocialLoader;