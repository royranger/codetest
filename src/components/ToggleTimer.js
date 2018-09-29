import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

library.add(faPause, faPlay);

const ToggleTimer = ({toggleTimer, timer}) => {
  return(
    <div className='tc'>
      <div className="f6 link br-pill ph3 pv2 mb2 dib gray bg-light-green pointer"
            onClick={toggleTimer}>
              <FontAwesomeIcon icon={timer ? "pause" : "play"}/>
      </div>
    </div>
  );
};

export default ToggleTimer;
