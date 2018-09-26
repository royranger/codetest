import React from 'react';

const Thumbnail = ({source}) => {
  return(
    <div className="pa2 tc">
      <img src={source}
           className="br2 h3 w3 dib"
           alt="thumbnail"/>
    </div>
  );
};

export default Thumbnail;
