import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import HomePageContainer from './containers/HomePageContainer';
import DeckShowPage from './containers/DeckShowPage';


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={HomePageContainer}/>
      <Route path='/decks/:id' component={DeckShowPage}/>
    </Router>



  )

}


export default App;
