import React, { Component } from 'react';
import FormField from '../components/FormField';

class DeckEdit extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      description: "",
      updateMessage: "",
      test:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editDeck = this.editDeck.bind(this)
    this.updateDeck = this.updateDeck.bind(this)
  }

  editDeck(event){
    let deckId = this.props.deckId
    fetch(`/api/v1/decks/${deckId}/edit`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ name: body.name})
      this.setState({ description: body.description})
    })
  }

  updateDeck(payLoad) {
    let deckId = this.props.deckId
    fetch(`/api/v1/decks/${deckId}`, {
      method: 'PUT',
      body: JSON.stringify(payLoad)
    })
    .then(response => response.json())
    .then(responseData =>{
      this.setState({ updateMessage: responseData.message })
    })
  }

  handleChange(event){
    let field = event.target.name
    let newValue = event.target.value
    this.setState({[field]: newValue})
  }

  handleChangeDescription(event){
    this.setState({description:value})
  }

  handleSubmit(event){
    event.preventDefault();
    let payLoad = {
      userId: this.props.currentUser.id,
      name: this.state.name,
      description: this.state.description
    }
    this.updateDeck(payLoad);
  }

  render(){
    let handleChange = (event) => this.handleChange(event)
    let handleSubmit = (event) => this.handleSubmit(event)
    let editDeck = (event) => this.editDeck(event)

    return(

      <div>

        <button className="button" onClick={editDeck}>Edit</button>

        <form>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">

              <div className="medium-6 cell">
                <FormField
                  name="name"
                  content={this.state.name}
                  label="Deck Title:"
                  handler={this.handleChange}
                />
              </div>

              <div className="medium-6 cell">
                <FormField
                  name="description"
                  content={this.state.description}
                  label="Description of Deck:"
                  handler={this.handleChange}
                />
              </div>

              <input type="submit" className="button" value="Save Updates" onClick={handleSubmit}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default DeckEdit;
