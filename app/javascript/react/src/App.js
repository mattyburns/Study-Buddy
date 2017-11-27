import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import HomePageContainer from './containers/HomePageContainer';
import DeckShowPage from './containers/DeckShowPage';
import CardShowPage from './containers/CardShowPage';


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={HomePageContainer}/>
      <Route path='/decks/:id' component={DeckShowPage}/>
      <Route path='/decks/:deck_id/cards/:id' component={CardShowPage}/>
    </Router>
  )
}


export default App;
