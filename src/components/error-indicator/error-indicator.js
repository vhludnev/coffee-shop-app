import React from 'react';

import './error-indicator.css';
import images from '../img';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={images.beans} alt="error icon"/>
      <span className="boom">OOPS!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (please, come back later!)
      </span>
    </div>
  );
}

export default ErrorIndicator;
