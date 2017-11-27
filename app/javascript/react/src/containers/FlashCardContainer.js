import React from 'react';
import FlashCardInput from './FlashCardInput';
import BackButton from '../components/BackButton';
import { Link } from 'react-router';

const FlashCardContainer = props => {
  let cards = (props.cards).map(card => {
    return(
      <li>
        <Link to={`/decks/${props.deckId}/cards/${card.id}`}>{card.front_content}</Link>
      </li>
    )
  })
  return(
    <div>
      <FlashCardInput
        addNewCard={props.addNewCard}
        currentUser={props.currentUser}
        deckId={props.deckId}
      />

      <ul>
        {cards}
      </ul>

      <BackButton/>

    </div>

  )
}


export default FlashCardContainer;
