import React, { useContext } from 'react';
import { MyMainContext } from '../MyContext/MyContext';

const CountSection = () => {
    const { cardData } = useContext(MyMainContext);
    console.log(cardData);

    return (
        <div className='grid grid-cols-2 sm:grid-cols-4  w-full gap-3 justify-between items-center py-10 -2'>
            <div className='text-center py-8 px-8 bg-white h-full'>
                <p className='text-3xl font-semibold'>{cardData.length}</p>
                <p>Total Friends</p>
            </div>
            <div className='text-center py-8 px-8 bg-white h-full'>
                <p className='text-3xl font-semibold'>{ }</p>
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