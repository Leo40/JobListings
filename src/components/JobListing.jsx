import React from 'react'
import { useGlobalContext} from './GlobalState'


function JobListing({ Listing, filterListings }) {
    const globalContext = useGlobalContext();
    const {
        Listings,
        items,
        activeId,
        setListings,
        setItems,
        setItemClicked,
    } = globalContext; 

    const { company, logo, newJob, featured, position, postedAt, contract, location } = Listing;

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

        const renderedTabs = tabs.map((tab, index) => {             
            return <div className={`right-section-item ${items.includes(tab) && 'tab-is-active'}`} onClick={() => {handleTabClick(tab)}}>{tab}</div>
            });        
        
        return renderedTabs;
    }

    const handleTabClick = (item) => {
        if(items.includes(item)){
            return
        }
        
        setItemClicked(true);
        setItems([...items, item]);  
        
        const filteredListings = filterListings(Listings, item);
        setListings(filteredListings);
    }

    return (
        <div className="job-listing">
            <div className="logo"> 
                <img src={logo} alt={"logo"}/>
            </div>
            <div className="job-listing-mid-section">
                <div className="job-listing-header">
                <div className="company" >{company}</div>
                    {newJob ? <div className="new">NEW!</div> : ""}
                    {featured ?  <div className="featured">FEATURED</div> : ""}
                </div>
                <div className={`title ${items.length > 0 && 'title-is-active'}`}>
                    {position}
                </div>
                <div className="job-listing-details">
                    <div className="posted-at">{postedAt}</div>
                    <div className="contract">{contract}</div>
                    <div className="location">{location}</div>
                </div>
            </div>
            <div className="right-section">
                {renderTabs()}
            </div>
        </div>
    )
}

export default JobListing
