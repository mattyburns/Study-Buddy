import React, { Component } from 'react';
import BackButton from '../components/BackButton'



class StudySession extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []

    }
  }

  componentWillMount(){
    let deckId = this.props.params.deck_id
    fetch(`/api/v1/decks/${deckId}`,{
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({cards: body.cards})
    })
  }


  render(){
    let cards = (this.state.cards).map( card => {
      return(
        prompt("Hello")
      )
    })

    return(
      <div>
        {cards}
        <h1>I am a study session</h1>
        <BackButton/>
      </div>

    )
  }
}

export default StudySession;
