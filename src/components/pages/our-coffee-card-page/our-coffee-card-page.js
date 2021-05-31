import React, { Component } from 'react';

import FadeIn from '../../fadein';
import PageNotFound from '../../pages/404-page';
import Spinner from '../../spinner';

import images from '../../img';
import './our-coffee-card-page.css';

import DummyServer from '../../../services/dummy-server';

export default class OurCoffeeCard extends Component {

  state = {
    item: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  async updateItem() {
    const { getCard, _cards } = new DummyServer();
    const { itemId } = this.props;
    if (!itemId || itemId > _cards.length || isNaN(itemId)) {
      return this.setState({
        error: true
      });
    }

    getCard(itemId)
      .then((item) => {
        this.setState({
          item
        })
        //console.log(item.image)
      })
      .catch((err) => console.warn(err))
  }

  handleImageLoaded = () => {
    this.setState({ loading: false });
  }

  render() { 

    

    const { item, loading, error} = this.state;
    const { origin, desc, price, image} = item;
    const spinner = loading ? <div className="spinner"><Spinner/></div> : null;
    if (error) {
      return <PageNotFound />
    };

    return (
      <FadeIn delay={250} duration={500}>
        <div className="ourcoffeecard">
          <div className="text-center">
            <h1>Our Coffee</h1>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="container">
            <div className="d-flex justify-content-around">
              <div className="picture">
                <img src={image} alt="coffee" style={loading ? {display: 'none'} : {}} onLoad={this.handleImageLoaded}/>
                {spinner}
              </div>
              <div className="info">
                <h2>About it</h2>
                <img src={images.BeansLogoBlack} alt="coffee beans" />
                <p><b>Country: </b>{origin}</p>
                <p><b>Description: </b>{desc}</p>
                <p><b>Price: </b><span>{price}</span></p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }
}
