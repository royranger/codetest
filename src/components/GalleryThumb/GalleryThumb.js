import React from 'react';
import Thumbnail from '../Thumbnail';
import './GalleryThumb.css';

const GalleryThumb = ({images}) => {
  return (
    <div className="flex flex-wrap">
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
