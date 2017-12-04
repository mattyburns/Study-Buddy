import React, { Component } from 'react';
import DeckContainer from './DeckContainer';
import LandingPage from '../components/LandingPage';
import DeckForm from './DeckForm';


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
          <div className="callout">
            <h3>Add a new deck</h3>
            <DeckForm
              currentUser={this.state.currentUser}
              addNewDeck={this.addNewDeck}
            />
          </div>

          <div className="callout">
            <DeckContainer
              decks={this.state.decks}
            />
          </div>
        </div>
      )
    }
  }
}


export default HomePageContainer;
