import React from 'react';

const CountSection = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4  w-full gap-3 justify-between items-center my-10 -2'>
            <div className='text-center py-8 px-8 bg-white h-full'>
                <p className='text-3xl font-semibold'>0</p>
                <p>Total Friends</p>
            </div>
            <div className='text-center py-8 px-8 bg-white h-full'>
                <p className='text-3xl font-semibold'>0</p>
                <p>On Tracks</p>
            </div>
            <div className='text-center py-8 px-8 bg-white h-full'>
                <p className='text-3xl font-semibold'>0</p>
                <p>Need Attention</p>
            </div>
            <div className='text-center py-8 px-8 bg-white h-full'>
                <p className='text-3xl font-semibold'>0</p>
                <p>Interactions this month</p>
            </div>
        </div>
    );
};

export default CountSection;