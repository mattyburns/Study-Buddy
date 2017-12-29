import React, { Component } from 'react';
import BackButton from '../components/BackButton';
import DeckContainer from '../containers/DeckContainer';

class StudyPage extends Component{
  constructor(props){
    super(props);
    this.state = {
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
    return(
      <div>
        <h1>I am the study page!</h1>
        <BackButton/>

        <DeckContainer
          decks={this.state.decks}
          title ="Select a deck to study."
        />

      </div>

    )
  }
}

export default StudyPage;
