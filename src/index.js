import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import registerServiceWorker from './registerServiceWorker';
import configure from './configure';

const { store, history } = configure();
ReactDOM.render(<App store={store} history={history}/>, document.getElementById('root'));
registerServiceWorker();
