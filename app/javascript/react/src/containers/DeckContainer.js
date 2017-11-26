import React, { Component} from 'react';

const DeckContainer = props => {
  let decks = (props.decks).map(deck => {
    return(
      <li key={deck.id}>
        {deck.name}
      </li>
    )
  })

  return(
    <div>
      <button>Build a new deck</button>

      <h4>Select a deck to study or add to.</h4>
      <ul>
        {decks}
      </ul>
    </div>
  )
}


export default DeckContainer;
