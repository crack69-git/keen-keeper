import React from 'react';
import CardSection from './CardSection';
// import img from '../assets/hero.png';
const FriendCard = () => {
    return (
        <div className='mt-10 '>
            <p className='text-2xl font-semibold mb-5'>Your Friends</p>
            <div className=''>
                <CardSection />
            </div>

        </div>
    );
};

export default FriendCard;