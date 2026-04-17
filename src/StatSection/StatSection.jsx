import React, { useContext } from 'react';
import { Pie, PieChart } from 'recharts';
import { MyMainContext } from '../MyContext/MainContext';
import NothingSection from '../NothingSection/NothingSection';
import ChartSection from './ChartSection';

const StatSection = () => {
  const { Com } = useContext(MyMainContext);
  return (
    <div className="bg-base-200 pt-20 pb-20">
      <div className="w-4/5 mx-auto">
        <p className="text-5xl mb-8 font-bold">Friendship Analytics</p>
        {Com.length == 0 ? <NothingSection /> : <ChartSection />}
      </div>
    </div>
  );
};

export default StatSection;
