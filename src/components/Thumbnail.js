import React from 'react';

const Thumbnail = ({source, activeSource, updateActiveImage}) => {
  return(
    <div className="pa2 tc">
      <img src={source}
           className="br2 h3 w3 dib"
           alt="thumbnail"
           onClick={()=> {updateActiveImage(activeSource)}}/>
    </div>
  );
};

export default Thumbnail;
