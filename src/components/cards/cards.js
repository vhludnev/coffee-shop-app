import React from 'react';

import images from '../img';

import './cards.css';

const Cards = ({ styles, cards, onItemSelected }) => {

  const renderCards = (arr) => {
    return arr.map(({ id, name, origin, price }) => {
      return (
        <div className="coffee-card"
            key={`coffee_${id}`}
            onClick={() => onItemSelected(id)}>
          <div className="wrapper">
              <img src={images.CoffeeTemplate3} alt={`${origin} coffee ${name.split(" ")[1]}`} />
              <p>{name}</p>
              <p>{origin}</p>
              <p>{price}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="d-flex justify-content-between coffeecards"
          style={styles}>
          {renderCards(cards)}
      </div>
    </>
  ); 
}

export default Cards;