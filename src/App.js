import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react';
import "./App.css";
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import CartScreen from './Screen/CartScreen';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop'
import SideDrawer  from './components/SideDrawer';
function App() {
  const [sidetoggle, setsidetoggle] = useState(false);
  return (
    <Router>
       <Navbar click={()=>setsidetoggle(true)}/>
        <SideDrawer show={sidetoggle} click={()=>setsidetoggle(true)}/> 
        <Backdrop show={sidetoggle} click={()=>setsidetoggle(false)}/>
      
        <main>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/product/:productId" component={ProductScreen} />
            <Route path="/cart" exact component={CartScreen} />
          </Switch>
        </main>
    </Router>
  );
}

export default App;
