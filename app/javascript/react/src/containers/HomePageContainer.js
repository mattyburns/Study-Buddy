import React, { Component } from 'react';
import DeckContainer from './DeckContainer';
import LandingPage from '../components/LandingPage';


class HomePageContainer extends Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }


  render(){
    let pageView;
    let landingPage = <LandingPage/>;
    let homePage = <DeckContainer/>;

    if (this.state.signedIn == false){
      pageView = landingPage
    } else {
      pageView = homePage
    }

    return(
      <div>
        {pageView}
      </div>
    )
  }
}


export default HomePageContainer;
