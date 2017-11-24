import React, { Component } from 'react';
import FlashCardInput from './containers/FlashCardInput'


class App extends Component {
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
    fetch('/api/v1/cards', {
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({cards: body})
    })
  }

  addNewCard(payLoad) {
  fetch('/api/v1/cards', {
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
        <FlashCardInput
          addNewCard={this.addNewCard}
          currentUser={this.state.currentUser}
        />
      </div>
    )
  }
}


export default App
