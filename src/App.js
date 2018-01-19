import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import SearchForm from './Components/SearchForm';
import PhotoContainer from './Components/PhotoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchForm />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
