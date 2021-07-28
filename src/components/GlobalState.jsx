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
  
    return (        
        <GlobalContext.Provider value={{ 
            itemClicked,
            items,
            Listings,
            setItemClicked,
            setItems,
            setListings,
         }}>
            {children}
        </GlobalContext.Provider>        
    )    
}
