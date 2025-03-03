import logo from './logo.svg';
import './App.css';
import Navsection from './components/Navsection';
import Approuter from './routes/Approuter';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Fooditems from './components/Fooditems';
import Offers from './components/Offers';


function App() {
  return (
    <div className="App">
      {/* <Welcome/> */}
   
      
  
   <Approuter/>
   <Fooditems/>
   <Offers/>
   
   
  
    
    </div>
  );
}

export default App;
