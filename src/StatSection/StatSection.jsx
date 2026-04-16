import React, { useContext } from 'react';
import { Pie, PieChart } from 'recharts';
import { MyMainContext } from '../MyContext/MyContext';

const StatSection = () => {
  const { Com } = useContext(MyMainContext);
  const call = Com.filter((item) => item.status === 'Call');
  const text = Com.filter((item) => item.status === 'Message');
  const video = Com.filter((item) => item.status === 'Video');
  console.log(call, text, video);
  const data = [
    { name: 'Group A', value: call.length, fill: '#0088FE' },
    { name: 'Group B', value: text.length, fill: '#00C49F' },
    { name: 'Group C', value: video.length, fill: '#FFBB28' },
  ];
  return (
    <div className="bg-base-200 pt-20 pb-20">
      <div className="w-4/5 mx-auto">
        <p className="text-5xl mb-8 font-bold">Friendship Analytics</p>
        <div className=" bg-base-100 rounded-lg p-8 shadow-sm">
          <p className="text-2xl text-green-800 font-semibold">
            By interaction status
          </p>
          <div className="flex justify-center items-center">
            <PieChart width={500} height={500}>
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="50%"
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
            </PieChart>
          </div>
          <div className="flex justify-center items-center gap-6 mt-10">
            <p className="flex items-center gap-2">
              <span className="w-4 h-4 bg-yellow-500"></span>Text
            </p>
            <p className="flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-500"></span>Calls
            </p>
            <p className="flex items-center gap-2">
              <span className="w-4 h-4 bg-green-500"></span>video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatSection;
