import React from 'react';
import Thumbnail from '../Thumbnail';
import './GalleryThumb.css';

const GalleryThumb = ({images}) => {
  return (
    <div className="flex flex-wrap">
      {
         images.map((image, i)=> {
          return (
            <Thumbnail
                    source={image.inactive}
                    key={i}/>
                  )
        })
      }
    </div>
  );
};

export default GalleryThumb;
