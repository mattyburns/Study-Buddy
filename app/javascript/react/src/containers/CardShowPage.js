import React, { Component } from 'react';
import CardTile from '../components/CardTile';

class CardShowPage extends Component{
  constructor(props){
    super(props);
    this.state={
      frontContent: "",
      backContent: "",
      card: ""
    }
  }

  componentDidMount() {
    let deckId = this.props.params.deck_id
    let cardId = this.props.params.id
    fetch(`/api/v1/decks/${deckId}/cards/${cardId}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({card: body.cards})
    })
  }


  render(){
    return(
      <div>
        <h1>Card Show page</h1>
        
        <CardTile
          card={this.state.card}
        />

      </div>



    )
  }
}

export default CardShowPage;
