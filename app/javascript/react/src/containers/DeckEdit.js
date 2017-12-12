import React, { Component } from 'react';

class DeckEdit extends Component {
  constructor(props){
    super(props);
    this.state={
      currentName: "",
      currentDescription: "",
      updateMessage: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editDeck = this.editDeck.bind(this)
    this.updateDeck = this.updateDeck.bind(this)
  }

  editDeck(event){
    let deckId = this.event.target.id //need to get deck id
    fetch(`/api/v1/decks/${deckId}/edit`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ currentName: body.name})
      this.setState({ currentDescription: body.description})
    })
  }

  updateDeck(payLoad) { // need to get deck id
    let deckId = this.event.target.id
    fetch(`/api/v1/decks/${deckId}`, {
      method: 'PUT',
      body: JSON.stringify(payLoad)
    })
    .then(response => response.json())
    .then(responseData =>{
      this.setState({ updateMessage: responseData.message })
    })
  }

  handleChange(value){
    this.setState({currentName:value})
    this.setState({currentDescription:value})
  }

  handleSubmit(event){
    event.preventDefault();
    let payLoad = {
      name: this.state.currentName,
      description: this.state.currentDescription
    }
    this.updateDeck(payLoad);
  }

  render(){
    let handleChange = (event) => this.handleChange(event)
    let handleSubmit = (event) => this.handleSubmit(event)

    return(
      <form>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="medium-6 cell">
              <FormField
                name="name"
                content={this.state.currentName}
                label="Deck Title:"
                handler={this.handleChange}
              />
            </div>

            <div className="medium-6 cell">
              <FormField
                name="description"
                content={this.state.currentDescription}
                label="Description of Deck:"
                handler={this.handleChange}
              />
            </div>

            <input type="submit" className="button" value="Save" onClick={handleSubmit}/>
          </div>
        </div>
      </form>
    )
  }
}

export default DeckEdit;
