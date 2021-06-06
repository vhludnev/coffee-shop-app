import React from 'react';
import { Link } from 'react-router-dom';

import images from '../img';
import './footer.scss';

const Footer = () => {
	return (   
		<div className="container">
			<div className="footer-nav">
				<div className="footer">
					<img src={images.BeansBlack} alt="beans" />
					<Link className="nav-link" to="/coffee-shop-app">Coffee house</Link>
					<Link className="nav-link" to="/ourcoffee">Our coffee</Link>
					<Link className="nav-link" to="/pleasure">For your pleasure</Link>
				</div>
				<div className="row beans">
					<img src={images.BeansLogoBlack} alt="beans" /> 
				</div>		
			</div>
		</div>
  	);
}
    
export default Footer;