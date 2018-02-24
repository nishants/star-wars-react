import React from 'react';
import Background from './components/background/star-world-background';
import HelpModal  from './help-modal/help-modal-component';
import MissionsHome  from './missions-home/mission-home-component';

const App = ()=> (
    <div id='app'>
      <Background/>
      <div id="main-content">
        <HelpModal/>
        <MissionsHome/>
      </div>
    </div>
);

export default App;