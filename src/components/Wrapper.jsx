import JobListing from './JobListing'
import FilterBar from './FilterBar'
import Listings from '../data.json'
import { useGlobalContext} from './GlobalState'

function App() {
    const globalContext = useGlobalContext();
    const {
        items
    } = globalContext;

const filteredListings = Listings.filter(listing => {

    const allItems = items.join();    
    const allLanguages = listing.languages;
    const allTools = listing.tools;
    const role = listing.role;
    const level = listing.level;

    console.log(allItems);
    console.log(allLanguages);
    console.log(allTools);

    if(!allLanguages.includes(allItems) && !allTools.includes(allItems) && !allItems.includes(role) && !allItems.includes(level)){
       return listing;
   } 
})

const renderJobListing = () => {
    const allJobListings = filteredListings.map(Listing => {            
        return (<JobListing Listing={Listing}/>);                    
    });

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
