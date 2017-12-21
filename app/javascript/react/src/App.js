import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import HomePageContainer from './containers/HomePageContainer';
import DeckShowPage from './containers/DeckShowPage';
import CardShowPage from './containers/CardShowPage';
import StudyPage from './containers/StudyPage';


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={HomePageContainer}/>
      <Route path='/decks/:id' component={DeckShowPage}/>
      <Route path='/decks/:deck_id/cards/:id' component={CardShowPage}/>
      <Route path='/study/decks' component={StudyPage}/>
    </Router>
  )
}


export default App;
