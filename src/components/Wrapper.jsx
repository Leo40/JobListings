import JobListing from './JobListing'
import FilterBar from './FilterBar'
import { useGlobalContext} from './GlobalState'
import { useEffect } from 'react'

function App() {
    const globalContext = useGlobalContext();
    const {
        items,
        Listings,
        setListings
    } = globalContext; 

const renderJobListing = () => {
    const allJobListings = Listings.map(Listing => {            
        return (<JobListing Listing={Listing}/>);                    
    })
    return allJobListings;    
}

  return (   
    <>   
        <div className="bg-header"></div>
            <FilterBar />
        <div className="job-listings-wrapper">{renderJobListing()}</div>
    </>
  );
}

export default App;
