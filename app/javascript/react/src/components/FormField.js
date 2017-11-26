import React from 'react';

const FormField = props =>{

  return(
    <div>
      <label name={props.name}>{props.labelText}</label>
      <input type="text"
        id={props.name}
        name={props.name}
        value={props.content}
        onChange={props.handler} />
    </div>


  )
}

export default FormField;
