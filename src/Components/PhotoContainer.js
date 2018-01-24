import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';
//Components
import Photo from './Photo';
import NoPhotos from './NoPhotos'

export default class PhotoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoData: [],
      loading: true,
    };
  }
  
  componentDidMount() {
    this.performSearch(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.props.query) {
      this.performSearch(nextProps.query);
    }
  }

  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=25&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photoData: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }

  render() {
    const results = this.state.photoData;
    let photos;
    
    if (results.length > 0){
      photos = results.map(photo =>
        <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`} key={photo.id} />
      );
    } else {
      photos = <NoPhotos />
    }
    
    return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
        {(this.state.loading) ? <p>Loading...</p> : photos}
        </ul>
      </div>
    );
  }
}