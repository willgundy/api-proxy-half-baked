import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import './App.css';
import Header from './Header';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to={'/pokemon'}/>
            </Route>
            <Route exact path="/pokemon" >
              <PokemonSearch />
            </Route>
            <Route exact path="/yelp" >
              <YelpSearch />
            </Route>
            <Route exact path="/weather" >
              <WeatherSearch /> 
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
