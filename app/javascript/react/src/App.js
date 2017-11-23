import React from 'react';
import ReactQuill from 'react-quill';


const App = props => {
  return(
    <div className="grid-x">
      <div className="small-12 large-6 cell callout large">
        <h2>Front of Card</h2>
        <ReactQuill/>
      </div>
      <div className="small-12 large-6 cell callout large">
        <h2>Back of Card</h2>
        <ReactQuill/>
      </div>
      <button className ="button">Create Card</button>
    </div>
  )
}

export default App
