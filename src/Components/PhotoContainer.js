import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos'

const PhotoContainer = props => { 
  console.log(props);
  const results = props.data;
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

export default PhotoContainer;