import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorBoundry from "../error-boundry";
import Nav from '../nav';
import Footer from '../footer';
import {
    MainPage,
    OurCoffee,
    OurCoffeeCard,
    ForYourPleasure,
    PageNotFound } from '../pages';

import './app.scss';

const App = () => {

    return (     
        <Router>
            <Nav />
            <ErrorBoundry>
                <Switch>
                    <Route exact path="/coffee-shop" component={MainPage} />
                    <Route exact path="/ourcoffee" component={OurCoffee} />
                    <Route path="/ourcoffee/:id?" render={({ match }) => { 
                        return <OurCoffeeCard itemId={match.params.id}/> 
                    }}/>
                    <Route exact path="/pleasure" component={ForYourPleasure} />
                    <Route component={PageNotFound}/>
                </Switch>
            </ErrorBoundry>
            <Footer />
        </Router>
    );
  }
  
  export default App;