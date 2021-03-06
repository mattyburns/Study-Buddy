import React, { Component } from 'react';
import ReactQuill from 'react-quill';


class FlashCardInput extends Component {
  constructor(props){
    super(props);
    this.state ={
      frontContent: "",
      backContent: "",
      errorMessage: ""
    }
    this.handleChangeFront = this.handleChangeFront.bind(this);
    this.handleChangeBack = this.handleChangeBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChangeFront(value){
    this.setState({frontContent:value})
  }

  handleChangeBack(value){
    this.setState({backContent:value})
  }

  handleClearForm(){
    this.setState({frontContent: ""});
    this.setState({backContent: ""});
    this.setState({errorMessage: ""});
  }

  handleSubmit(event){
    event.preventDefault();
    let payLoad = {
      frontContent: this.state.frontContent,
      backContent: this.state.backContent,
      deckId: this.props.deckId,
      userId: this.props.currentUser.id
    }

    if(this.state.frontContent === "" || this.state.backContent === ""){
      this.setState({errorMessage: "Can't leave either side of card blank!"})
    }else{
      this.props.addNewCard(payLoad);
      this.handleClearForm();


    }
  }

  render(){
    let handleSubmit = (event) => this.handleSubmit(event)
    return(


        <div className="grid-x">
          <div>{this.state.errorMessage}</div>
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
          <button className ="button" onClick={handleSubmit}>Create Card</button>
        </div>

    )
  }
}


export default FlashCardInput
