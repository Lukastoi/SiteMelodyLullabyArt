import React from 'react';
import ReactDOM from 'react-dom';
import { render, hydrate } from "react-dom";
import { Provider } from 'react-redux'
import configureStore,{history} from './app/store/configureStore'
import { ConnectedRouter } from "connected-react-router";
import './index.css';
import App from './app/app';
import * as serviceWorker from './serviceWorker';
import Loadable from 'react-loadable'
import { createBrowserHistory } from "history";
//test

const store = configureStore();

const root = document.querySelector("#root");
const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history/>
    </ConnectedRouter>
  </Provider> 
);
if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  // If we're not running on the server, just render like normal
  render(Application, root);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
