import React, { Component } from 'react';
import ReactQuill from 'react-quill';


class FlashCardEdit extends Component {
  constructor(props){
    super(props);
    this.state ={
      frontContent: "",
      backContent: "",
      deckId: "",
      userId: "",
      updateMessage: ""
    }
    this.handleChangeFront = this.handleChangeFront.bind(this);
    this.handleChangeBack = this.handleChangeBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editCard = this.editCard.bind(this);
  }

  editCard(event){
    let deckId = this.props.card.deck_id
    let cardId = this.props.card.id
    fetch(`/api/v1/decks/${deckId}/cards/${cardId}/edit`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ frontContent: body.front_content})
      this.setState({ backContent: body.back_content})
      this.setState({ deckId: body.deck_id})
      this.setState({ userId: body.user_id})
    })
  }

  updateCard(payLoad) {
    let deckId = this.props.card.deck_id
    let cardId = this.props.card.id
    fetch(`/api/v1/decks/${deckId}/cards/${cardId}`, {
      method: 'PUT',
      body: JSON.stringify(payLoad)
    })
    .then(response => response.json())
    .then(responseData =>{
      this.setState({ updateMessage: responseData.message })
    })
  }

  handleChangeFront(value){
    this.setState({frontContent:value})
  }

  handleChangeBack(value){
    this.setState({backContent:value})
  }

  handleSubmit(event){
    event.preventDefault();
    let payLoad = {
      frontContent: this.state.frontContent,
      backContent: this.state.backContent,
      deckId: this.props.card.deck_id,
      userId: this.props.card.user_id
    }
    this.updateCard(payLoad);
  }

  render(){
    let handleSubmit = (event) => this.handleSubmit(event)
    let editCard = (event) => this.editCard(event)
    return(
      <div>
        <button className="button" onClick={editCard}>Edit</button>
        <div className="grid-x">
          <div className="small-12 large-6 cell callout large">
            <h2>Front of Card</h2>
            <ReactQuill
              value={this.state.frontContent}
              onChange={this.handleChangeFront}
            />
          </div>
          <div className="small-12 large-6 cell callout large">
            <h2>Back of Card</h2>
            <ReactQuill
              value={this.state.backContent}
              onChange={this.handleChangeBack}
            />
          </div>
          <button className ="button" onClick={handleSubmit}>Save Edits</button>
        </div>
        <h1>{this.state.updateMessage}</h1>
      </div>
    )
  }
}

export default FlashCardEdit;
