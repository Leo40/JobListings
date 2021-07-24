import React from 'react'
import JoblistingHeader from './JobListingHeader'
import JobListingDetails from './JobListingDetails'

function MidSection({ Listing }) {
    // alert(Listing.Title);
    return (
        <div className="job-listing-mid-section">
            <JoblistingHeader Header={Listing}/>
            <div className="title">{Listing.position}</div>
            <JobListingDetails Listing={Listing}/>
        </div>
    )
}

export default MidSection
