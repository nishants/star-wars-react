import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './app/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './app/reducers';

import './index.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
      <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
