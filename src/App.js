import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import apiKey from './config';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Switch from 'react-router-dom/Switch';

//Components
import Navbar from './Components/Navbar';
import SearchForm from './Components/SearchForm';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './NotFound'

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      photos: [],
      loading: true,
      query: "succulents"
    };
  } 

  componentDidMount() {
    this.performSearch(this.state.query);
  }
  
  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=25&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }

  render() {
    return (
      <div className="App">
        <SearchForm onSearch={this.performSearch} />

        <BrowserRouter>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path={`/`} 
                render={ () =>  (this.state.loading) ? <p>Loading...</p> : <PhotoContainer query= {this.props.query} search={this.performSearch} data={this.state.photos}/>}/> 
              <Route path={`/cats`} 
                render={ () =>  (this.state.loading) ? <p>Loading...</p> : <PhotoContainer query={"cats"} search={this.performSearch} data={this.state.photos}/>}/> 
              <Route path={`/dogs`} 
                render={ () => (this.state.loading) ? <p>Loading...</p> : <PhotoContainer query={"dogs"} search={this.performSearch} data={this.state.photos}/>}/> 
              <Route path={`/computers`} 
                render={ () => (this.state.loading) ? <p>Loading...</p> : <PhotoContainer query={"computers"} search={this.performSearch} data={this.state.photos}/>}/> 
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}
