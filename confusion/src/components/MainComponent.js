import React, { Component } from 'react';
import Menu from './MenuComponent'
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import HeaderComponent from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class MainComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }

  render() {
    const HomePage = () => {
      return(
        <Home />
      );
    }

    return (
      <div>
          <HeaderComponent />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component = { () => <Menu dishes={this.state.dishes} />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default MainComponent;
