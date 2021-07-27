import React, { createContext, useContext, useState } from 'react';
import JobListings from '../data.json'

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

export function GlobalState({ children }) {   

    const [itemClicked, setItemClicked] = useState(false);
    const [items, setItems] = useState([]);
    const [Listings, setListings] = useState(JobListings);
    const [activeStateStyle, setActiveStateStyle] = useState("hsl(180, 52%, 96%)");    
  
    return (        
        <GlobalContext.Provider value={{ 
            itemClicked,
            items,
            Listings,
            activeStateStyle,
            setItemClicked,
            setItems,
            setListings,
            setActiveStateStyle,
         }}>
            {children}
        </GlobalContext.Provider>        
    )    
}
