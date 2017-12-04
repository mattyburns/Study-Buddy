import React from 'react';
import FlashCardInput from './FlashCardInput';
import BackButton from '../components/BackButton';
import { Link } from 'react-router';

const FlashCardContainer = props => {
  let cards = (props.cards).map(card => {
    return(
      <li key={card.id}>
        <Link
          to={`/decks/${props.deckId}/cards/${card.id}`}
          dangerouslySetInnerHTML={{ __html: card.front_content }}
        />
      </li>

    )
  })
  return(
    <div>
      <div className="callout">
        <h3>Add a new card to this deck.</h3>
        <FlashCardInput
          addNewCard={props.addNewCard}
          currentUser={props.currentUser}
          deckId={props.deckId}
        />
      </div>
      <div className="callout">
        <ul>
          {cards}
        </ul>
      </div>

      <BackButton/>
      
    </div>

  )
}

export default FlashCardContainer;
