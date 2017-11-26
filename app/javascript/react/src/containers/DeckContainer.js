import React, { Component} from 'react';

class DeckContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      stuff: ""
    }
  }
  render(){
    return(
      <div>
        <button>Build a new deck</button>

        <h4>Select a deck to study or add to.</h4>
        <ul>
          <li>Link to Deck 1 <button>Edit</button> <button>Study</button></li>
          <li>Link to Deck 2 <button>Edit</button> <button>Study</button></li>
          <li>Link to Deck 3 <button>Edit</button> <button>Study</button></li>
        </ul>
      </div>
    )
  }
}

export default DeckContainer;
