import React from 'react';
import Thumbnail from '../Thumbnail';
import './GalleryThumb.css';

const GalleryThumb = ({images, updateActiveImage}) => {
  return (
    <div className="flex flex-wrap">
      {
         images.map((image, i)=> {
          return (
            <Thumbnail
                    source={image.inactive}
                    activeSource={image.active}
                    key={i}
                    updateActiveImage={updateActiveImage}/>
                  )
        })
      }
    </div>
  );
};

export default GalleryThumb;
