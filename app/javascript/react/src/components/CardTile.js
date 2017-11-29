import React from 'react';

const CardTile = props => {
  return(
    <div>
      <h1>I'm the card tile</h1>
      <p dangerouslySetInnerHTML={{ __html: props.card.front_content }}></p>
      <p dangerouslySetInnerHTML={{ __html: props.card.back_content }}></p>
    </div>
  )
}

export default CardTile;
