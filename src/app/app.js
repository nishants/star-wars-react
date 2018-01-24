import React from 'react';
import Background from './components/background/star-world-background';
import HelpModal  from './help-modal/help-modal-component';

const App = ()=> (
    <div id='app'>
      <Background/>
      <div id="main-content">
        <HelpModal/>
      </div>
    </div>
);

export default App;