import React, { Component} from 'react';
import { Link } from 'react-router';

const DeckContainer = props => {
  let decks = (props.decks).map(deck => {
    return(
      <li key={deck.id}>
        <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
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
