import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Game from './find-falcone/game-component';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import './index.css';
import 'font-awesome/css/font-awesome.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <Game/>
    </Provider>,
    document.getElementById('root'));

document.title = 'Star Wars';
registerServiceWorker();
