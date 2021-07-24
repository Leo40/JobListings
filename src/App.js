import './App.css';
import { GlobalState } from './components/GlobalState';
import Wrapper from './components/Wrapper'

function App() {  
  return (      
    <GlobalState>
      <div className="App">          
          <Wrapper />          
      </div>    
    </GlobalState>
  );
}

export default App;
