import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
 
import './app.css';

import LandingPage from './components/LandingPage';
import PodcastHome from './components/PodcastHome';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact>
          <LandingPage/>
        </Route>
        <Route path="/:title">
          <PodcastHome/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
