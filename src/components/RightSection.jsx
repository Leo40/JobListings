import { useGlobalContext} from './GlobalState'

function RightSection({ Listing }) {

    const globalContext = useGlobalContext();
    const {
        items,
        Listings,
        setItemClicked, 
        setItems,
        setListings 
    } = globalContext;

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
            return <div className="right-section-item" onClick={() => {handleClick(tab)}}>{tab}</div>
            });        
        
        return renderedTabs;
    }
    
    const handleClick = (item) => {
        setItemClicked(true);
        setItems([...items, item]);  

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
        
        setListings(filteredListings);  
    }
    
    return (
        <div className="right-section">
            {renderTabs()}
        </div>
    )
}

export default RightSection
