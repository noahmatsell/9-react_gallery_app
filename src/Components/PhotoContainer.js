import React, { Component } from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos'


export default class PhotoContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.query !== this.props.query) {
      this.props.search(nextProps.query);
    }
  }

  render() {
    const results = this.props.data;
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
          {photos}
        </ul>
      </div>
    );
  }
}