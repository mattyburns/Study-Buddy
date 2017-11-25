import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import FlashCardContainer from './containers/FlashCardContainer'


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={FlashCardContainer}/>
    </Router>



  )

}


export default App;
