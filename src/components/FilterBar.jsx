import { useGlobalContext} from './GlobalState'
import JobListings from '../data.json'

function FilterBar() {
    const globalContext = useGlobalContext();
    const {
        items,
        itemClicked,   
        setListings,
        setItems,
        setItemClicked
    } = globalContext;

    const handleClear = () => {
        setListings(JobListings);
        setItems([]);
        setItemClicked(false);
    }

    const handleButton = (clickedItem) => {
        const filteredItems = items.filter(item => {
            return item !== clickedItem;
        })

        setItems(filteredItems);
    }

    const renderFilterBar = () => {
        return (
            <div className="filter-bar">
                <div className="filter-bar-left">
                {renderItems()}
                </div>
                <div className="filter-bar-right">
                <div className="clear" onClick={handleClear}>Clear</div>
                </div>                     
            </div>
        )
    }

    const renderItems = () => {        
        const renderedItems = items.map(item => {     
            // alert(item);
            return <div className="filter-bar-item"> 
                {item}
                <div className="close-button" onClick={() => {handleButton(item)}}>X</div>
            </div>            
            })
        return renderedItems;
    }

    return (
        itemClicked ? renderFilterBar() : null   
    )
}

export default FilterBar