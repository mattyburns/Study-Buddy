import React from 'react';

const CardTile = props => {
  return(
    <div>
      <p dangerouslySetInnerHTML={{ __html: props.card.front_content }}></p>
      <p dangerouslySetInnerHTML={{ __html: props.card.back_content }}></p>
    </div>
  )
}

export default CardTile;
