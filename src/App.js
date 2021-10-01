import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import MealDetails from './Components/Mealdetails/MealDetails';
import NotFound from './Components/NotFound/NotFound';
import Resturant from './Components/Resturant/Resturant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header></Header>
        <Switch>
          <Route path='/resturant'>
            <Resturant></Resturant>
          </Route>
          <Route exact path='/'>
            <Resturant></Resturant>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/meals/:mealId'>
            <MealDetails></MealDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
