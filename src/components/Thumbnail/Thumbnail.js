import React from 'react';
import './Thumbnail.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);

const Thumbnail = ({source, activeSource, updateActiveImage, index, deleteThumbnail}) => {
  return(
    <div className="pa2 tc relative"
         id="thumbnail">
         <FontAwesomeIcon icon="times"
                          id="delete"
                          onClick={()=> deleteThumbnail(index)}/>
         <img src={source}
           className="br2 h3 w3 dib pointer"
           alt="thumbnail"
           onClick={()=> {updateActiveImage(activeSource)}}/>
    </div>
  );
};

export default Thumbnail;
