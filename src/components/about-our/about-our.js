import React from 'react';

import images from '../img';
import './about-our.scss';

const AboutOur = ({picture, title, text}) => {

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-around aboutour">
                    <div className="picture">
                        <img src={picture} alt="coffee" />
                    </div>
                    <div className="info">
                        <h2>{title}</h2>
                        <img src={images.BeansLogoBlack} alt="coffee beans" />
                        <p>{text}</p>
                    </div>
                </div>
            </div>
            <div className="text-center divider">
                <hr/>
            </div>
        </>
    );
}

export default AboutOur;