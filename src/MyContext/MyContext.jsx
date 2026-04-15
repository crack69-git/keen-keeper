import React, { createContext, use, useState } from 'react';
export const MyMainContext = createContext();
const cardfetch = fetch('/myData.json').then(res => res.json());
const MyContext = ({ children }) => {
    const cardData = use(cardfetch);
    const [state, setState] = useState(true);
    const data = {

        state,
        setState,
        cardData,
    }
    return <MyMainContext.Provider value={data}>
        {children}
    </MyMainContext.Provider>
};

export default MyContext;