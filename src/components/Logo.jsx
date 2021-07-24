import React from 'react'

function Logo( {Listing} ) {   
    return (
        <div className="logo">
            <img src={Listing.logo} alt={"logo"}/>
        </div>
    )
}

export default Logo
  