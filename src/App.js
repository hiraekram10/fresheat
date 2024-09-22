import logo from './logo.svg';
import './App.css';
import Navsection from './components/Navsection';
import Approuter from './routes/Approuter';
import Home from './components/Home';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <Welcome/>
  
   <Approuter/>
  
    
    </div>
  );
}

export default App;
