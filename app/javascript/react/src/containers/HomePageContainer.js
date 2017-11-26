import React, { Component } from 'react';
import DeckContainer from './DeckContainer';
import LandingPage from '../components/LandingPage';


class HomePageContainer extends Component {
  constructor(props){
    super(props);
    this.state ={
      signedIn: "",
      currentUser: "",
      decks: []


    }
  }

  componentDidMount() {
    fetch('/api/v1/user/is_signed_in',{
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({signedIn: body.signed_in})
      this.setState({currentUser: body.user})
    })
    fetch('/api/v1/decks', {
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({decks:body.decks})
    })
  }


  render(){
    let pageView;
    let landingPage = <LandingPage/>;
    let homePage = <DeckContainer decks={this.state.decks}/>;

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
