import { useGlobalContext} from './GlobalState'
import JobListings from '../data.json'

function FilterBar({ filterListings }) {
    const globalContext = useGlobalContext();
    const {
        items,
        itemClicked,   
        activeStateStyle,
        setListings,
        setItems,
        setItemClicked,
        setActiveStateStyle
    } = globalContext;

    const handleClearButton = () => {
        setListings(JobListings);
        setItems([]);
        setItemClicked(false);
    }

    const handleCloseButton = (clickedItem) => {        
        const filteredItems = items.filter(item => {
            return item !== clickedItem;            
        })
        
        setItems(filteredItems);

        const filteredListings = filteredItems.reduce((accu, curr) => {
            return filterListings(accu, curr);    
        }, JobListings)
        setListings(filteredListings);
    }

    const renderItems = () => {        
        const renderedItems = items.map((item) => {     
            // alert(item);
            return <div className="filter-bar-item"> 
                {item}
                <div className="close-button" onClick={() => {handleCloseButton(item)}}>X</div>
            </div>            
            })
            if(items.length === 0) {            
                setItemClicked(false);
            } 
        return renderedItems;
    }

    const renderFilterBar = () => {
        return (
            <div className="filter-bar">
                <div className="filter-bar-left">
                {renderItems()}
                </div>
                <div className="filter-bar-right">
                <div className="clear" onClick={handleClearButton}>Clear</div>
                </div>                     
            </div>
        )
    }

    return (
        itemClicked ? renderFilterBar() : null   
    )
}

export default FilterBar