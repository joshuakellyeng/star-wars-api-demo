import './App.css'
import SwApi  from './services/sw-api'
import Navbar from './services/Navbar';


function App() {



  return (
    <div>
      <Navbar/>
      <SwApi/>
    </div>
  );
}

export default App;
