import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './Slideshow.css';

const Slideshow = ({caption, activeImage}) => {
  return(
    <div className='tc'>
      <div className='dib tv relative'
           caption={caption}>
           <CSSTransitionGroup transitionName="slideshow"
                               transitionAppearTimeout={1000}
                               transitionEnterTimeout={1000}
                               transitionLeaveTimeout={1000}>
                               <img src={activeImage}
                                    alt="activeimage"
                                    key={activeImage}
                                    className="vh-40 center db slideshow-gif"
                                    />
           </CSSTransitionGroup>

      </div>
      <div>
        <p id="caption">{caption}</p>
      </div>
    </div>
  );
};

export default Slideshow;
