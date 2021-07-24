import React from 'react'

function JobListingHeader({ Header }) {
    return (
        <div className="job-listing-header">
            <div className="company" >{Header.company}</div>
            {Header.new ? <div className="new">NEW!</div> : ""}
            {Header.featured ?  <div className="featured">FEATURED</div> : ""}
        </div>
    )
}

export default JobListingHeader
