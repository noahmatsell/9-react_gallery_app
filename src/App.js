import React, { Component } from 'react';
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "succulents"
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Route path={`/search`} 
              render={ () => <SearchForm onSearch={query => this.setState({ query })}  />}/> 
            <Navbar />
            <Switch>
              <Route exact path={`/`} render={ ({props}) => {
                return <QueryRoute {...props} query={this.state.query} />;
              }} />
              {/* <Route exact path={`/:query`} component={QueryRoute} /> */}
              <Route exact path={`/cats`} render ={ () => {
                return <QueryRoute query="cats"/>
              } }/>
              <Route exact path={`/dogs`} render ={ () => {
                return <QueryRoute query="dogs"/>
              } }/>
              <Route exact path={`/computers`} render ={ () => {
                return <QueryRoute query="computers"/>
              } }/>
              <Route exact path={`/search/:query`} component={QueryRoute} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}
