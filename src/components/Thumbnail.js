import React from 'react';

const Thumbnail = ({source}) => {
  return(
    <div>
      <img src={source}
           alt="thumbnail"/>
    </div>
  );
};

export default Thumbnail;
