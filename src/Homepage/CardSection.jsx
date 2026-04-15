import React, { useContext } from 'react';
import { MyMainContext } from '../MyContext/MyContext';
import Card from './Card';

const CardSection = () => {
    const { cardData } = useContext(MyMainContext);
    console.log(cardData);
    return (
        <div className='grid grid-cols-4 gap-5 pb-20'>
            {
                cardData.map((card, index) => <Card key={index} card={card} />)
            }
        </div>
    );
};

export default CardSection;