import React, { Component } from 'react';
import FlashCardContainer from './FlashCardContainer';
import DeckEdit from './DeckEdit';


class DeckShowPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      signedIn: [],
      currentUser: [],
      cards: []
    }
    this.addNewCard = this.addNewCard.bind(this)
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
    let deckId = this.props.params.id
    fetch(`/api/v1/decks/${deckId}/cards`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({cards: body.cards})
    })
  }

  addNewCard(payLoad) {
    let deckId = this.props.params.id
    fetch(`/api/v1/decks/${deckId}/cards`, {
      method: 'POST',
      body: JSON.stringify(payLoad)
    })
    .then(response => response.json())
    .then(responseData =>{
      this.setState({ cards: [responseData, ...this.state.cards] })
    })
  }
  render(){
    return(
      <div>
        <FlashCardContainer
          addNewCard={this.addNewCard}
          currentUser={this.state.currentUser}
          deckId={this.props.params.id}
          cards={this.state.cards}
        />

        <DeckEdit
          currentUser={this.state.currentUser}
          deckId={this.props.params.id}
        />
      </div>
    )
  }
}

export default DeckShowPage;
