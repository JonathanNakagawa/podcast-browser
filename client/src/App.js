import React from 'react';

import './app.css';

import RSSSearcher from './components/RSSSearcher';
import PodcastRow from './components/structure/PodcastRow';

function App() {
  return (
    <div className="app--dark">
        <PodcastRow/>
    </div>
  );
}

export default App;
