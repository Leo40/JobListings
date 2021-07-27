import JobListing from './JobListing'
import FilterBar from './FilterBar'
import { useGlobalContext} from './GlobalState'

function Wrapper() {

    const filterListings = (Listings, item) => {
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
    
        return filteredListings
    }        

    const globalContext = useGlobalContext();
    const {
        Listings
    } = globalContext; 

const renderJobListing = () => {
    const allJobListings = Listings.map(Listing => {            
        return (<JobListing filterListings={filterListings} Listing={Listing}/>);                    
    })
    return allJobListings;    
}

  return (   
    <>   
        <div className="bg-header"></div>
            <FilterBar filterListings={filterListings} />
        <div className="job-listings-wrapper">{renderJobListing()}</div>
    </>
  );
}

export default Wrapper;
