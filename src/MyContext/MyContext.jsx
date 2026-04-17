import React, { use, useState } from 'react';
import { MyMainContext } from './MainContext';
const cardfetch = fetch('/myData.json').then((res) => res.json());
const MyContext = ({ children }) => {
  const cardData = use(cardfetch);
  const [Com, setCom] = useState([]);
  const [current, setCurrent] = useState([]);
  const [Track, setTrack] = useState(0);
  const [attention, setAttention] = useState(0);
  const data = {
    Com,
    setCom,
    cardData,
    current,
    setCurrent,
    Track,
    setTrack,
    attention,
    setAttention,
  };
  return (
    <MyMainContext.Provider value={data}>{children}</MyMainContext.Provider>
  );
};

export default MyContext;
