import React from 'react';

const FormField = props =>{

  return(
    <div>
      <div>
        <label name={props.name}>{props.label}</label>
      </div>
      <div>
        <input type="text"
          id={props.name}
          name={props.name}
          value={props.content}
          onChange={props.handler} />
      </div>
    </div>


  )
}

export default FormField;
