import React, { useContext } from 'react';
import messageIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';
import callIcon from '../assets/call.png';
import { MyMainContext } from '../MyContext/MyContext';
const Timeline = () => {
  const { Com } = useContext(MyMainContext);
  const selector = (
    <>
      <option disabled>Filter timeline</option>
      <option>Date</option>
    </>
  );
  return (
    <div className="bg-base-200 h-full">
      <div className="w-4/5 mx-auto pt-20">
        <p className="text-5xl mb-3">Timeline</p>
        <select defaultValue="Pick a color" className="select mb-6">
          {selector}
        </select>
        <div className="grid grid-cols-1 gap-2 mb-10">
          {/* card section */}
          {Com.map((com, index) => (
            <div
              key={index}
              className="card flex-row items-center pl-4 w-full bg-base-100 card-sm shadow-sm"
            >
              <div>
                <img
                  src={
                    com.status === 'Call'
                      ? callIcon
                      : com.status === 'Message'
                        ? messageIcon
                        : videoIcon
                  }
                  alt="text"
                ></img>
              </div>
              <div className="card-body">
                <h2 className="card-title">
                  {com.status}{' '}
                  <span className="font-normal text-gray-500">
                    with {com.name}
                  </span>
                </h2>
                <p>{com.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
