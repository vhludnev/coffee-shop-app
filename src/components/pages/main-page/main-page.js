import React from 'react';

import images from '../../img';
import './main-page.css';

const MainPage = () => {
  return (
    <>
      <div className="main">
        <div className="text-center info-block">
          <h1 className="shadowed">Everything You Love About Coffee</h1>
          <img src={images.BeansLogoWhite} alt="coffee beans" />
          <p className="pt-3">We makes every day full of energy and taste</p>
          <p className="shadowed">Want to try our beans?</p>
          <button>More</button>
        </div>
      </div>
      <div className="about">
          <h2>About Us</h2>
          <img src={images.BeansLogoBlack} alt="coffee beans" />  
          <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face. 
              <br/><br/>
              Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
          </p>
      </div>
      <div className="ourbest">
        <div className="container">
          <h2>Our Best</h2>
          <div className="d-flex justify-content-around bestcards">
            <div className="coffee-card">
              <div className="wrapper">
                <img src={images.CoffeeTemplate1} alt="coffee" />
                <p>Solimo Coffee Beans 2 kg</p>
                <p>10.73$</p>
              </div>
            </div>         
            <div className="coffee-card">
              <div className="wrapper">
                <img src={images.CoffeeTemplate2} alt="coffee" />
                <p>Presto Coffee Beans 1 kg</p>
                <p>15.99$</p>
              </div>
            </div>
            <div className="coffee-card">
              <div className="wrapper">
                <img src={images.CoffeeTemplate3} alt="coffee" />
                <p>AROMISTICO Coffee 1 kg</p>
                <p>6.99$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage;