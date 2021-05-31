import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FilterSearchPanel from '../../filter-search-panel/filter-search-panel';
import Cards from '../../cards/cards';
import AboutOur from '../../about-our';

import images from '../../img';
import './our-coffee-page.css';

import DummyServer from '../../../services/dummy-server';

class OurCoffee extends Component {

  state = {
    cardsList: [],
    term: '',
    filter: ''
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name
          .toLowerCase()
          .indexOf(term.toLowerCase()) > -1; 
    })
  };

  filter(items, filter) {
    switch(filter) {
      case 'brazil': 
        return items.filter(item => item.origin === 'Brazil');
      case 'kenya':
        return items.filter(item => item.origin === 'Kenya');
      case 'columbia':
        return items.filter(item => item.origin === 'Columbia');
      default:
        return items;
    }
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
    const { history } = this.props;
    const { cardsList, term, filter } = this.state;

    const visibleCards = this.filter(this.search(cardsList, term), filter);
    
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
        <div className="ourcoffee">
          <div className="text-center">
            <h1>Our Coffee</h1>
          </div>
        </div>
        <div className="page-wrapper">
          <AboutOur picture={images.Girl} 
                    title='About our beens' 
                    text={aboutText} />
          <FilterSearchPanel 
            onSearchChange={this.onSearchChange}
            filter={filter}
            onFilterChange={this.onFilterChange} />
          <Cards 
            styles={{minHeight:'640px', cursor:'pointer'}}
            cards={visibleCards} 
            onItemSelected={(itemId) => history.push(`ourcoffee/${itemId}`)} />
        </div>
      </>
    );
  }
}

export default withRouter(OurCoffee);