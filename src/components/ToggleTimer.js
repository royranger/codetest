import React from 'react';

const ToggleTimer = ({toggleTimer, timer}) => {
  let toggle = "";
  if (timer) {
    toggle = "Stop";
  } else {
    toggle = "Start";
  }
  return(
    <div className='tc'>
      <div className="f6 link br-pill ph3 pv2 mb2 dib gray bg-light-green pointer"
            onClick={toggleTimer}>{`${toggle} autoplay`}</div>
    </div>
  );
};

export default ToggleTimer;
