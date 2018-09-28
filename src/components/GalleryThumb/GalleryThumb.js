import React from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import './GalleryThumb.css';

const GalleryThumb = ({images, updateActiveImage, deleteThumbnail}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {
         images.map((image, i)=> {
          return (
            <Thumbnail
                    source={image.inactive}
                    activeSource={image.active}
                    key={i}
                    index={i}
                    updateActiveImage={updateActiveImage}
                    deleteThumbnail={deleteThumbnail}/>
                  )
        })
      }
    </div>
  );
};

export default GalleryThumb;
