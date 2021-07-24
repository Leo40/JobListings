import { useGlobalContext} from './GlobalState'

function RightSection({ Listing }) {

    const globalContext = useGlobalContext();
    const {
    setItemClicked,    
    items,
    setItems
    } = globalContext;

    const renderLanguages = () => {
        const languages = Listing.languages;
        const listOfLanguages = languages.map(language => {
            return <div className="right-section-item" onClick={() => {handleClick(language)}}>{language}</div>
            });        
        
        return listOfLanguages;
    }
    
    const handleClick = (item) => {
        setItemClicked(true);
        setItems([...items, item]);        
    }
    
    return (
        <div className="right-section">
            <div className="right-section-item" onClick={() => {handleClick(Listing.role)}}>{Listing.role}</div>
            <div className="right-section-item" onClick={() => {handleClick(Listing.level)}}>{Listing.level}</div>
            {renderLanguages()}
        </div>
    )
}

export default RightSection
