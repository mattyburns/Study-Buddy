import React from 'react';
import ReactQuill from 'react-quill';


const App = props => {
  return(
    <div>
      <div >
        <h2>Front of Card</h2>
        <ReactQuill/>
      </div>
      <div>
        <h2>Back of Card</h2>
        <ReactQuill/>
      </div>
      <button>Create Card</button>
    </div>
  )
}

export default App
