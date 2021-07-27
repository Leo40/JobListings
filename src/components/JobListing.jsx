import React from 'react'
import { useGlobalContext} from './GlobalState'


function JobListing({ Listing, filterListings }) {
    const globalContext = useGlobalContext();
    const {
        Listings,
        items,
        activeStateStyle,
        setListings,
        setItems,
        setItemClicked,
        setActiveStateStyle
    } = globalContext; 

    const { id, company, logo, newJob, featured, position, role, level, postedAt, contract, location, languages, tools } = Listing;

    const renderTabs = () => {        
        const tabs = [];

        Object.keys(Listing).forEach(key => {
            if(key === 'role' || key === 'level') { 
                tabs.push(Listing[key]);
            }
            if(key === 'languages' || key === 'tools') { 
                tabs.push(...Listing[key]);
            }                
        });

        const renderedTabs = tabs.map(tab => {            
            return <div className="right-section-item" style={{backgroundColor: activeStateStyle}} onClick={() => {handleTabClick(tab)}}>{tab}</div>
            });        
        
        return renderedTabs;
    }

    const handleTabClick = (item) => {
        setItemClicked(true);
        setItems([...items, item]);  
        
        const filteredListings = filterListings(Listings, item);
        setListings(filteredListings);
    }

    return (
        <div className="job-listing">
            <div className="logo"> 
                <img src={Listing.logo} alt={"logo"}/>
            </div>
            <div className="job-listing-mid-section">
                <div className="job-listing-header">
                <div className="company" >{company}</div>
                    {newJob ? <div className="new">NEW!</div> : ""}
                    {featured ?  <div className="featured">FEATURED</div> : ""}
                </div>
                <div className="title">
                    {Listing.position}
                </div>
                <div className="job-listing-details">
                    <div className="posted-at">{Listing.postedAt}</div>
                    <div className="contract">{Listing.contract}</div>
                    <div className="location">{Listing.location}</div>
                </div>
            </div>
            <div className="right-section">
                {renderTabs()}
            </div>
        </div>
    )
}

export default JobListing
