import React from 'react'

function JobListingDetails({ Listing }) {    
    return (
        <div className="job-listing-details">
            <div className="posted-at">{Listing.postedAt}</div>
            <div className="contract">{Listing.contract}</div>
            <div className="location">{Listing.location}</div>
        </div>
    )
}

export default JobListingDetails
