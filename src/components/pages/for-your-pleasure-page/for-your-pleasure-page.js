import React, { Component } from 'react';

import Cards from '../../cards/cards';
import AboutOur from '../../about-our';

import images from '../../img';
import './for-your-pleasure-page.scss';

import DummyServer from '../../../services/dummy-server';

export default class ForYourPleasure extends Component {

  state = {
    cardsList: []
  };

  componentDidMount() {
    const { getAllCards} = new DummyServer();
    getAllCards()
        .then(cardsList => {
            this.setState({
                cardsList
            });
        });
  };

  render() { 

    const aboutText = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        As greatly removed calling pleased improve an.
                        Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                      `

    return (
      <>
        <div className="pleasure">
          <div className="text-center">
            <h1>For your pleasure</h1>
          </div>
        </div>
        <div className="page-wrapper">
          <AboutOur picture={images.CoffeeCup} 
                    title='About our goods' 
                    text={aboutText} />
          <Cards 
            styles={{pointerEvents:'none', cursor:'default'}}
            cards={this.state.cardsList}/>
        </div>
      </>
    );
  }
}
