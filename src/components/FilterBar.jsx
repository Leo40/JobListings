import { useGlobalContext} from './GlobalState'

function FilterBar() {
    const globalContext = useGlobalContext();
    const {
    // active,
    itemClicked,
    items
    } = globalContext;

    const renderFilterBar = () => {
        return (
            <>
                <div className="filter-bar">{renderItems()}</div>        
                <div className="clear">Clear</div>
            </>
        )
    }

    const renderItems = () => {        
        const renderedItems = items.map(item => {             
            return <div className="filter-bar-item">{item}</div>            
            })
        return renderedItems;
    }

    return (
        itemClicked ? renderFilterBar() : null   
    )
}

export default FilterBar