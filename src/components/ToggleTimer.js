import React from 'react';

const ToggleTimer = ({toggleTimer, timer}) => {
  let toggle = "";
  if (timer) {
    toggle = "Stop";
  } else {
    toggle = "Start";
  }
  return(
    <div className='tc'
          onClick={toggleTimer}>
      <a className="f6 link br-pill ph3 pv2 mb2 dib gray bg-light-green" href="#0">{`${toggle} autoplay`}</a>
    </div>
  );
};

export default ToggleTimer;
