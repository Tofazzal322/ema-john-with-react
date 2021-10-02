
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router,Switch,Route, } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import Shop from './Components/Shop/Shop';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrederReview/OrderReview';
// import { Placeholder } from 'react-bootstrap';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path  ="/home">
          <Home></Home>
          </Route>
          <Route path  ="/inventory">
          <Inventory></Inventory>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/features">
            <Features></Features>
          </Route>
          <Route path="/orderreview">
            <OrderReview></OrderReview>
          </Route>          
          <Route path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </Route>          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
