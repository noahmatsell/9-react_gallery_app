import React from 'react';

import PhotoContainer from './PhotoContainer';

export default props => {
  return (props.match && props.match.params.query) ? <PhotoContainer query={props.match.params.query} /> : <PhotoContainer query={"succulents"} />
}