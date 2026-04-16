import React, { createContext, use, useState } from 'react';
export const MyMainContext = createContext();
const cardfetch = fetch('/myData.json').then(res => res.json());
const MyContext = ({ children }) => {
    const cardData = use(cardfetch);
    const [Com, setCom] = useState([]);
    const data = {
        Com,
        setCom,
        cardData,
    }
    return <MyMainContext.Provider value={data}>
        {children}
    </MyMainContext.Provider>
};

export default MyContext;