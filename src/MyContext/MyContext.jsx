import React, { createContext, useState } from 'react';
export const MyMainContext = createContext();
const MyContext = ({ children }) => {
    const [state, setState] = useState(true);
    const data = {
        state,
        setState
    }
    return <MyMainContext.Provider value={data}>
        {children}
    </MyMainContext.Provider>
};

export default MyContext;