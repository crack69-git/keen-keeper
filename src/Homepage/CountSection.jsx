import React, { useContext } from 'react';
import { MyMainContext } from '../MyContext/MainContext';

const CountSection = () => {
  const { cardData, Com } = useContext(MyMainContext);
  const date = new Date();
  const monthName = date.toLocaleString('default', { month: 'long' });

  const interactionsThisMonth = Com.filter(
    (item) => item.month === monthName
  ).length;

  const onTrackCount = cardData.filter(
    (friend) => friend.status === 'On-track'
  ).length;
  const attentionCount = cardData.length - onTrackCount;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4  w-full gap-3 justify-between items-center py-10 -2">
      <div className="text-center py-8 px-8 bg-white h-full">
        <p className="text-3xl font-semibold">{cardData.length}</p>
        <p className="text-gray-500">Total Friends</p>
      </div>
      <div className="text-center py-8 px-8 bg-white h-full">
        <p className="text-3xl font-semibold">{onTrackCount}</p>
        <p className="text-gray-500">On Tracks</p>
      </div>
      <div className="text-center py-8 px-8 bg-white h-full">
        <p className="text-3xl font-semibold">{attentionCount}</p>
        <p className="text-gray-500">Need Attention</p>
      </div>
      <div className="text-center py-8 px-8 bg-white h-full">
        <p className="text-3xl font-semibold">{interactionsThisMonth}</p>
        <p className="text-gray-500">Interactions this month</p>
      </div>
    </div>
  );
};

export default CountSection;
