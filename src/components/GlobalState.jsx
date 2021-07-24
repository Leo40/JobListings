import React, { createContext, useContext, useState } from 'react';
const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

export function GlobalState({ children }) {   

    const [active, setActive] = useState(false);
    const [itemClicked, setItemClicked] = useState(false);
    const [items, setItems] = useState([]);
  
    return (        
        <GlobalContext.Provider value={{ 
            active, 
            itemClicked,
            items,
            setActive,
            setItemClicked,
            setItems
         }}>
            {children}
        </GlobalContext.Provider>        
    )    
}
