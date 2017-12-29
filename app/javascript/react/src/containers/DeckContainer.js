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
      <h4>{props.title}</h4>
      <ul>
        {decks}
      </ul>
    </div>
  )
}


export default DeckContainer;
