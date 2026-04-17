import React, { useContext } from 'react';
import { MyMainContext } from '../MyContext/MainContext';
import Card from './Card';

const CardSection = () => {
  const { cardData } = useContext(MyMainContext);
  // console.log(cardData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-20">
      {cardData.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default CardSection;
