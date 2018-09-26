import React from 'react';
import Thumbnail from '../Thumbnail';
import './GalleryThumb.css';

const GalleryThumb = ({images}) => {
  return (
    <div>
      {
        images.map(image=> {
          return(
            <Thumbnail
              source={image}
            />
          )
        })

      }
    </div>
  );
};

export default GalleryThumb;
