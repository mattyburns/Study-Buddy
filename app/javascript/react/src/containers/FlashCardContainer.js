import React from 'react';
import FlashCardInput from './FlashCardInput';
import BackButton from '../components/BackButton';

const FlashCardContainer = props => {
  return(
    <div>
      <FlashCardInput
        addNewCard={props.addNewCard}
        currentUser={props.currentUser}
      />
      
      <ul>
        <li>List of Cards</li>
      </ul>

      <BackButton/>

    </div>

  )
}


export default FlashCardContainer;
