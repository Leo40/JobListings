import React from 'react'

function useFilter(Listings) {
    const filteredListings = Listings.filter(listing => {
        const values = Object.values(listing);

        return values.filter(value => {
            return isNaN(value) && typeof(value) !== 'boolean'
            })
            .map(value => {
                if(value instanceof Array){
                    return value.join("");
                }
                return value;
            })
            .some(val => { 
                return val.includes(item);
            })
    }); 

    return (
        filteredListings
    )
}

export default useFilter
