import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './app/app';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './app/reducers';
import thunk from 'redux-thunk';

import './index.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      <App/>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
