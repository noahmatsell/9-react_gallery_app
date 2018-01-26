import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Switch from 'react-router-dom/Switch';

//Components
import Navbar from './Components/Navbar';
import SearchForm from './Components/SearchForm';
import QueryRoute from './Components/QueryRoute'
import NotFound from './NotFound'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div className="container">
        <Route path={`/search`} 
          render={ () => <SearchForm />}/> 
        <Navbar />
        <Switch>
          <Route exact path={`/`} component={QueryRoute} />
          <Route exact path={`/search`} component={QueryRoute} /> 
          <Route exact path={`/search/:query`} component={QueryRoute} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;