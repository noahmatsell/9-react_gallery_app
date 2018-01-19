import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import apiKey from './config';
//Components
import Navbar from './Components/Navbar';
import SearchForm from './Components/SearchForm';
import PhotoContainer from './Components/PhotoContainer';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'succulents') => {
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
        <Navbar />
        {
            (this.state.loading) ? <p>Loading...</p> : <PhotoContainer data={this.state.photos} />
        }
      </div>
    );
  }
}
