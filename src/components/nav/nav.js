import React from 'react';
import { Link } from 'react-router-dom';

import images from '../img';
import './nav.scss';

const Nav = ()=> {
	return (   
		<div className="nav">
		  	<img src={images.BeansWhite} alt="coffee beans" />
			<Link className="nav-link" to="/coffee-shop-app">Coffee house</Link>
			<Link className="nav-link" to="/ourcoffee">Our coffee</Link>
			<Link className="nav-link" to="/pleasure">For your pleasure</Link>
		</div>
  	);
}

export default Nav;