import React from 'react';

import PhotoContainer from './PhotoContainer';

export default props => {
  return <PhotoContainer query={props.query || props.match.params.query} />
}