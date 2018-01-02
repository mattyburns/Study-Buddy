import React, { Component } from 'react';
import DeckContainer from './DeckContainer';
import LandingPage from '../components/LandingPage';
import DeckForm from './DeckForm';
import { Link } from 'react-router';
import Study from '../images/study.png';
import Build from '../images/build.png';


class HomePageContainer extends Component {
  constructor(props){
    super(props);
    this.state ={
      signedIn: "",
      currentUser: "",
      decks: []
    }
    this.addNewDeck = this.addNewDeck.bind(this)
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

  addNewDeck(payLoad){
    fetch(`/api/v1/decks`, {
      method: 'POST',
      body: JSON.stringify(payLoad)
    })
    .then(response => response.json())
    .then(responseData =>{
      this.setState({ decks: [responseData, ...this.state.decks] })
    })
  }

  render(){
    let addNewDeck = (event) => this.addNewDeck(event)

    if (this.state.signedIn == false){
      return(
        <div>
          <LandingPage/>
        </div>
      )
    } else {
      return(
        <div>
          <Link to={'/study/decks'}><img src={Study} alt="Study mode"></img></Link>
          <Link to={'/build/decks'}><img src={Build} alt="Build mode"></img></Link>
        </div>
      )
    }
  }
}


export default HomePageContainer;
