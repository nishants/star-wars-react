import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Game from './find-falcone/game-component';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import './index.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      <Game/>
    </Provider>,
    document.getElementById('root'));

document.title = 'Star Wars';
registerServiceWorker();
