import React from 'react'
import Logo from './Logo'
import MidSection from './MidSection'
import RightSection from './RightSection'

function JobListing({ Listing }) {

    return (
        <div className="job-listing">
            <Logo Listing={Listing}/>
            <MidSection Listing={Listing}/>
            <RightSection Listing={Listing}/>
        </div>
    )
}

export default JobListing
