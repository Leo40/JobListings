import JobListing from './JobListing'
import FilterBar from './FilterBar'
import { useEffect } from 'react'
import { useGlobalContext} from './GlobalState'

function App() {
    const globalContext = useGlobalContext();
    const {
        items,
        Listings
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
