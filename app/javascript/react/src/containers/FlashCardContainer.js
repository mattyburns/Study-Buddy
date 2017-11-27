import React from 'react';
import FlashCardInput from './FlashCardInput';
import BackButton from '../components/BackButton';

const FlashCardContainer = props => {
  let cards = (props.cards).map(card => {
    return(
      <li>
        {card.front_content}
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
