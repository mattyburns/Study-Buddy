import React, { Component } from 'react';
import FormField from '../components/FormField';

class DeckForm extends Component{
  constructor(props){
    super(props);
    this.state={
      name: "",
      description: "",
      errors: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateEntry = this.validateEntry.bind(this)
    this.validateSubmit = this.validateSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleChange(event){
    let formField = event.target.name;
    let newValue = event.target.value;
    this.setState({[formField]: newValue})
  }

  handleSubmit(event){
    event.preventDefault();
    let payLoad = {
      name: this.state.name,
      description: this.state.description,
      userId: this.props.currentUser.id
    }
    this.props.addNewDeck(payLoad);
  }

  validateEntry(selection) {
    let errors = [];
    if (this.state.name === ""){
      errors.push("Name field can't be blank.")
    }
    this.setState({errors: errors})

    if (errors.length){
      return false;
    } else {
      return true;
    }
  }

  validateSubmit(event){
    event.preventDefault();
    if(this.validateEntry() === false) {
      return false;
    }
    this.handleSubmit(event)
    this.handleClearForm(event)
  }


  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name: "",
      description: "",
    })
  }

  render(){
    let handleSubmit = (event) => this.validateSubmit(event);
    return(
      <form>
        <FormField
          name="name"
          content={this.state.name}
          label="Deck Title:"
          handler={this.handleChange}
        />

        <FormField
          name="description"
          content={this.state.description}
          label="Description of Deck:"
          handler={this.handleChange}
        />

        <input type="submit" className="button" value="Save" onClick={handleSubmit}/>
      </form>

    )
  }
}

export default DeckForm;
